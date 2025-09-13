import React, { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode"; // npm i jwt-decode

const API_BASE = "http://localhost:5000/api/auth";

export default function UserDashboard() {
  const token = localStorage.getItem("token");
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Get user id from token once
  useEffect(() => {
    if (!token) {
      setError("Please log in first");
      setLoading(false);
      return;
    }
    try {
      const decoded = jwtDecode(token);
      setUserId(decoded.id);
    } catch {
      setError("Invalid token");
      setLoading(false);
    }
  }, [token]);

  // Fetch profile when userId is known
  useEffect(() => {
    if (!userId) return;
    (async () => {
      try {
        console.log(`${API_BASE}/${userId}`);
        const res = await fetch(`${API_BASE}/${userId}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.msg || "Failed to load profile");
        setUser(data);
        setForm({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [userId, token]);

  const handleSave = async () => {
    setError("");
    setMessage("");
    try {
      const res = await fetch(`${API_BASE}/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Update failed");
      setUser(data);
      setMessage("Profile updated successfully!");
      setEditing(false);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p className="text-center py-12 text-gray-600">Loading…</p>;
  if (error) return <p className="text-center text-red-600 py-12">{error}</p>;
  if (!user) return null;

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8 transition-transform hover:scale-[1.01]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Your Dashboard
        </h2>

        {message && (
          <div className="mb-4 text-green-700 bg-green-100 border border-green-300 rounded p-2 text-center">
            {message}
          </div>
        )}

        <div className="space-y-5">
          {["name", "email", "phone"].map((field) => (
            <div key={field}>
              <label className="block font-semibold text-gray-700 mb-1 capitalize">
                {field}
              </label>
              {editing ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  value={form[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                />
              ) : (
                <p className="p-3 bg-gray-100 rounded-lg text-gray-800">
                  {user[field]}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {editing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditing(false);
                  setForm({
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                  });
                }}
                className="bg-gray-300 px-6 py-2 rounded-lg shadow hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="bg-yellow-500 text-white px-8 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

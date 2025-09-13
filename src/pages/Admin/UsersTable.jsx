import React, { useEffect, useState,useContext } from "react";

const API_BASE = "http://localhost:5000/api";
import { AuthContext } from "../../context/AuthContext";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState(null);
  const { user } = useContext(AuthContext);

  // Replace with how you store token (e.g. localStorage, context, etc.)
  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/auth`,user);
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Failed to load users");
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    try {
      const res = await fetch(`${API_BASE}/auth/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Delete failed");
      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4">Users</h3>

      {error && <p className="text-red-600 mb-2">{error}</p>}
      {loading && <p className="text-gray-600 mb-2">Loading...</p>}

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-yellow-100">
            <th className="border px-2 py-1">Username</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Phone</th>
            <th className="border px-2 py-1">Role</th>
            <th className="border px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="border px-2 py-1 text-center">
                No users yet
              </td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u._id}>
                <td className="border px-2 py-1">{u.username}</td>
                <td className="border px-2 py-1">{u.name}</td>
                <td className="border px-2 py-1">{u.email}</td>
                <td className="border px-2 py-1">{u.phone}</td>
                <td className="border px-2 py-1">{u.role}</td>
                <td className="border px-2 py-1 text-center">
                  <button
                    onClick={() => deleteUser(u._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:5000/api/chefs";

const ChefControl = () => {
  const [chefs, setChefs] = useState([]);
  const [form, setForm] = useState({
    name: "",
    qualification: "",
    experience: "",
    signature: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);

  // Fetch chefs
  const fetchChefs = async () => {
    try {
      const res = await fetch(API_BASE, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Failed to fetch chefs");
      setChefs(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchChefs();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit (Add / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res, data;
      if (editingId) {
        res = await fetch(`${API_BASE}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch(API_BASE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(form),
        });
      }
      data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Save failed");

      setForm({ name: "", qualification: "", experience: "", signature: "" });
      setEditingId(null);
      fetchChefs();
    } catch (err) {
      setError(err.message);
    }
  };

  // Edit
  const handleEdit = (chef) => {
    setForm({
      name: chef.name,
      qualification: chef.qualification,
      experience: chef.experience,
      signature: chef.signature,
    });
    setEditingId(chef._id);
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this chef?")) return;
    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Delete failed");
      setChefs((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4">Chef Control</h3>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Chef Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border-2 border-gray-200 rounded-lg p-2"
        />
        <input
          name="qualification"
          type="text"
          placeholder="Qualification"
          value={form.qualification}
          onChange={handleChange}
          required
          className="border-2 border-gray-200 rounded-lg p-2"
        />
        <input
          name="experience"
          type="text"
          placeholder="Experience"
          value={form.experience}
          onChange={handleChange}
          required
          className="border-2 border-gray-200 rounded-lg p-2"
        />
        <input
          name="signature"
          type="text"
          placeholder="Signature"
          value={form.signature}
          onChange={handleChange}
          required
          className="border-2 border-gray-200 rounded-lg p-2"
        />

        <div className="col-span-full flex gap-2">
          <button
            type="submit"
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-xl hover:translate-y-1 transition"
          >
            {editingId ? "Update Chef" : "Add Chef"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm({ name: "", qualification: "", experience: "", signature: "" });
              }}
              className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-xl"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {error && <p className="text-red-600 mt-3">{error}</p>}

      {/* List */}
      <div className="grid gap-4 mt-6">
        {chefs.length ? (
          chefs.map((chef) => (
            <div
              key={chef._id}
              className="bg-white border-2 border-yellow-400 rounded-xl p-4 shadow-sm flex justify-between items-center"
            >
              <div>
                <div className="font-semibold">{chef.name}</div>
                <div className="text-sm text-gray-500">
                  {chef.qualification} • {chef.experience}
                </div>
                <div className="text-sm italic">{chef.signature}</div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(chef)}
                  className="px-3 py-1 border rounded-md text-sm hover:bg-yellow-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(chef._id)}
                  className="px-3 py-1 border rounded-md text-sm hover:bg-red-100"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-600 border rounded-md">
            No chefs yet
          </div>
        )}
      </div>
    </div>
  );
};

export default ChefControl;

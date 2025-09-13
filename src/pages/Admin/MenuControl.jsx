// MenuControl.jsx
import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:5000/api";

export default function MenuControl({ menuItems, setMenuItems }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({ category: "veg", name: "", price: "" });
  const [editingId, setEditingId] = useState(null);

  // category filter for the list below
  const [filterCat, setFilterCat] = useState("all");

  // fetch menu once
  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/menu`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to load menu");
        setMenuItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add or Update
  const submitForm = async (e) => {
    e.preventDefault();
    setError(null);

    const payload = {
      category: form.category,
      name: form.name.trim(),
      price: Number(form.price),
    };

    try {
      let res, data;
      if (editingId) {
        res = await fetch(`${API_BASE}/menu/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        data = await res.json();
        if (!res.ok) throw new Error(data.message || "Update failed");
        setMenuItems((prev) =>
          prev.map((it) => (it._id === data._id ? data : it))
        );
        setEditingId(null);
      } else {
        res = await fetch(`${API_BASE}/menu`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        data = await res.json();
        if (!res.ok) throw new Error(data.message || "Create failed");
        setMenuItems((prev) => [data, ...prev]);
      }

      // reset form
      setForm({ category: "veg", name: "", price: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  const onEdit = (item) => {
    setForm({ category: item.category, name: item.name, price: item.price });
    setEditingId(item._id);
  };

  const onDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    try {
      const res = await fetch(`${API_BASE}/menu/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setMenuItems((prev) => prev.filter((it) => it._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Filter items to show
  const shownItems =
    filterCat === "all"
      ? menuItems
      : menuItems.filter((it) => it.category === filterCat);

  return (
    <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4">Menu Control</h3>

      {/* Add / Edit Form */}
      <form onSubmit={submitForm} className="grid gap-4 md:grid-cols-3">
        <select
          value={form.category}
          onChange={(e) =>
            setForm((s) => ({ ...s, category: e.target.value }))
          }
          required
          className="border-2 border-yellow-400 rounded-lg p-2 font-semibold bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <option value="veg">🥗 Veg</option>
          <option value="nonveg">🍗 Non-Veg</option>
          <option value="seafood">🦞 Seafood</option>
          <option value="soups">🥣 Soups</option>
          <option value="maincourse">🍛 Main Course</option>
          <option value="noodles">🍜 Noodles</option>
          <option value="salads">🥬 Salads</option>
          <option value="desserts">🍨 Desserts</option>
        </select>

        <input
          type="text"
          placeholder="Item Name"
          value={form.name}
          onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
          required
          className="border-2 border-gray-200 rounded-lg p-2"
        />
        <input
          type="number"
          min="1"
          placeholder="Price ₹"
          value={form.price}
          onChange={(e) => setForm((s) => ({ ...s, price: e.target.value }))}
          required
          className="border-2 border-gray-200 rounded-lg p-2"
        />

        <div className="col-span-full flex gap-2">
          <button
            type="submit"
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-xl hover:translate-y-1 transition"
          >
            {editingId ? "Update Item" : "Add Item"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm({ category: "veg", name: "", price: "" });
              }}
              className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-xl"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Filter Dropdown for list */}
      <div className="mt-6 flex items-center gap-3">
        <label className="font-semibold">Show category:</label>
        <select
          value={filterCat}
          onChange={(e) => setFilterCat(e.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        >
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="nonveg">Non-Veg</option>
          <option value="seafood">Seafood</option>
          <option value="soups">Soups</option>
          <option value="maincourse">Main Course</option>
          <option value="noodles">Noodles</option>
          <option value="salads">Salads</option>
          <option value="desserts">Desserts</option>
        </select>
      </div>

      {/* Error / Loading */}
      {error && <p className="text-red-600 mt-3">{error}</p>}
      {loading && <p className="text-gray-600 mt-3">Loading…</p>}

      {/* Items List */}
      <div className="grid gap-4 mt-6">
        {shownItems.length ? (
          shownItems.map((item) => (
            <div
              key={item._id}
              className="bg-white border-2 border-yellow-400 rounded-xl p-4 shadow-sm flex justify-between items-center gap-4"
            >
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">
                  {item.category} • ₹{item.price}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(item)}
                  className="px-3 py-1 border rounded-md text-sm hover:bg-yellow-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item._id)}
                  className="px-3 py-1 border rounded-md text-sm hover:bg-red-100"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-600 border rounded-md">
            No menu items in this category
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";

const AdminDashboard = () => {
  const tabs = ["menu", "orders", "reservations", "users", "chef"];
  const [activeTab, setActiveTab] = useState("menu");

  // Sample state for menu items and chefs
  const [menuItems, setMenuItems] = useState([]);
  const [chefs, setChefs] = useState([]);

  const handleAddMenuItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const newItem = {
      category: form.category.value,
      name: form.name.value,
      price: form.price.value,
    };
    setMenuItems((prev) => [...prev, newItem]);
    form.reset();
  };

  const handleAddChef = (e) => {
    e.preventDefault();
    const form = e.target;
    const newChef = {
      name: form.name.value,
      qualification: form.qualification.value,
    };
    setChefs((prev) => [...prev, newChef]);
    form.reset();
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r-2 border-yellow-400 p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-red-500 mb-6">Admin</h2>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-left py-2 px-4 rounded-lg font-semibold hover:bg-yellow-100 transition ${
              activeTab === tab ? "bg-yellow-400 text-white" : "text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Control
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">
          Control menu & tables, and view orders/users. (Client-side demo)
        </p>

        {/* Menu Control */}
        {activeTab === "menu" && (
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Menu Control</h3>
            <form onSubmit={handleAddMenuItem} className="grid gap-4 md:grid-cols-3">
              <select name="category" required className="border-2 border-gray-200 rounded-lg p-2">
                <option value="veg">Veg</option>
                <option value="nonveg">Non-Veg</option>
                <option value="seafood">Seafood</option>
                <option value="soups">Soups</option>
                <option value="maincourse">Main Course</option>
                <option value="noodles">Noodles</option>
                <option value="salads">Salads</option>
                <option value="desserts">Desserts</option>
              </select>
              <input name="name" type="text" placeholder="Item Name" required className="border-2 border-gray-200 rounded-lg p-2" />
              <input name="price" type="number" min="1" defaultValue="99" required className="border-2 border-gray-200 rounded-lg p-2" />
              <button type="submit" className="bg-red-500 text-white font-bold py-2 px-4 rounded-xl col-span-full hover:translate-y-1 transition">Add Item</button>
            </form>

            <div className="grid gap-4 mt-6">
              {menuItems.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-yellow-400 rounded-xl p-4 shadow-sm flex justify-between">
                  <span>{item.name} ({item.category})</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Orders */}
        {activeTab === "orders" && (
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Orders</h3>
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="border px-2 py-1">ID</th>
                  <th className="border px-2 py-1">User</th>
                  <th className="border px-2 py-1">Items</th>
                  <th className="border px-2 py-1">Total</th>
                  <th className="border px-2 py-1">Location</th>
                  <th className="border px-2 py-1">Status</th>
                  <th className="border px-2 py-1">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1 text-center" colSpan="7">No orders yet</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Reservations */}
        {activeTab === "reservations" && (
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Reservations</h3>
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="border px-2 py-1">ID</th>
                  <th className="border px-2 py-1">User</th>
                  <th className="border px-2 py-1">Date</th>
                  <th className="border px-2 py-1">Seats</th>
                  <th className="border px-2 py-1">Type</th>
                  <th className="border px-2 py-1">Payment</th>
                  <th className="border px-2 py-1">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1 text-center" colSpan="7">No reservations yet</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Users */}
        {activeTab === "users" && (
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Users</h3>
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="border px-2 py-1">Username</th>
                  <th className="border px-2 py-1">Name</th>
                  <th className="border px-2 py-1">Email</th>
                  <th className="border px-2 py-1">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1 text-center" colSpan="4">No users yet</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Chef Control */}
        {activeTab === "chef" && (
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Chef Control</h3>
            <form onSubmit={handleAddChef} className="grid gap-4 md:grid-cols-2">
              <input name="name" type="text" placeholder="Chef Name" required className="border-2 border-gray-200 rounded-lg p-2"/>
              <input name="qualification" type="text" placeholder="Qualification" required className="border-2 border-gray-200 rounded-lg p-2"/>
              <button type="submit" className="bg-red-500 text-white font-bold py-2 px-4 rounded-xl col-span-full hover:translate-y-1 transition">Add Chef</button>
            </form>

            <div className="grid gap-4 mt-6">
              {chefs.map((chef, idx) => (
                <div key={idx} className="bg-white border-2 border-yellow-400 rounded-xl p-4 shadow-sm flex justify-between">
                  <span>{chef.name}</span>
                  <span>{chef.qualification}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;

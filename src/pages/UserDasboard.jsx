import React, { useState, useEffect } from "react";

const UserDashboard = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: "Guest",
    email: "",
    phone: "",
  });

  // Sample orders data
  const [orders, setOrders] = useState([
    // Example: { id: 1, items: "Pizza, Salad", total: 450, status: "Delivered" }
  ]);

  // Sample reservations data
  const [reservations, setReservations] = useState([
    // Example: { id: 1, date: "2025-09-10", seats: 4, type: "Dinner", status: "Confirmed" }
  ]);

  // Simulate fetching user info on mount
  useEffect(() => {
    // Fetch from API or localStorage here
    setUser({
      name: "Sudhakar",
      email: "sudhakar@example.com",
      phone: "+91 9876543210",
    });

    // Sample recent orders
    setOrders([
      { id: 1, items: "Paneer Butter Masala, Naan", total: 350, status: "Delivered" },
      { id: 2, items: "Veg Biryani", total: 250, status: "Pending" },
    ]);

    // Sample reservations
    setReservations([
      { id: 1, date: "2025-09-12", seats: 4, type: "Lunch", status: "Confirmed" },
      { id: 2, date: "2025-09-15", seats: 2, type: "Dinner", status: "Pending" },
    ]);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl font-bold">Your Dashboard</h2>
        <p className="mt-2 text-gray-700">
          Welcome, <b id="ud_name">{user.name}</b> 👋
        </p>

        <div className="grid mt-3 gap-6 md:grid-cols-3">
          {/* Profile Card */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Profile</h3>
            <div id="ud_profile" className="text-gray-700 space-y-1">
              <p><b>Email:</b> {user.email}</p>
              <p><b>Phone:</b> {user.phone}</p>
            </div>
            <a href="/cart" className="btn secondary mt-3 block text-center">Go to Cart</a>
          </div>

          {/* Recent Orders */}
          <div className="card overflow-x-auto">
            <h3 className="text-xl font-semibold mb-2">Recent Orders</h3>
            <table className="table w-full">
              <thead className="bg-yellow-100">
                <tr>
                  <th>ID</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-2">No orders yet</td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.items}</td>
                      <td>₹{order.total}</td>
                      <td className={`status ${order.status === "Delivered" ? "success" : order.status === "Pending" ? "warn" : "info"}`}>
                        {order.status}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Reservations */}
          <div className="card overflow-x-auto">
            <h3 className="text-xl font-semibold mb-2">Reservations</h3>
            <table className="table w-full">
              <thead className="bg-yellow-100">
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Seats</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {reservations.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-2">No reservations yet</td>
                  </tr>
                ) : (
                  reservations.map((res) => (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.date}</td>
                      <td>{res.seats}</td>
                      <td>{res.type}</td>
                      <td className={`status ${res.status === "Confirmed" ? "success" : res.status === "Pending" ? "warn" : "info"}`}>
                        {res.status}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;

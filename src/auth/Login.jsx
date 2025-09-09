import React, { useState } from "react";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("user"); // user/admin tab
  const [userForm, setUserForm] = useState({ username: "", password: "" });
  const [adminForm, setAdminForm] = useState({ username: "admin", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "user") setUserForm({ ...userForm, [name]: value });
    else setAdminForm({ ...adminForm, [name]: value });
  };

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    setError("");
    if (formType === "user") {
      // Simulate user login
      if (userForm.username && userForm.password) {
        alert(`User Logged in: ${userForm.username}`);
      } else {
        setError("Please fill all fields!");
      }
    } else {
      // Simulate admin login
      if (adminForm.username === "admin" && adminForm.password) {
        alert("Admin Logged in!");
      } else {
        setError("Invalid admin credentials!");
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-100 via-white to-red-100 p-6">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-6">
        {/* Tab Buttons */}
        <div className="md:col-span-2 flex justify-center gap-4 mb-4">
          <button
            onClick={() => setActiveTab("user")}
            className={`px-6 py-2 rounded-full font-bold transition ${
              activeTab === "user" ? "bg-red-500 text-white" : "bg-white border-2 border-yellow-400"
            }`}
          >
            User Login
          </button>
          <button
            onClick={() => setActiveTab("admin")}
            className={`px-6 py-2 rounded-full font-bold transition ${
              activeTab === "admin" ? "bg-red-500 text-white" : "bg-white border-2 border-yellow-400"
            }`}
          >
            Admin Login
          </button>
        </div>

        {/* User Login Form */}
        {activeTab === "user" && (
          <div className="card p-6 shadow-lg border-2 border-yellow-400 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">User Login</h2>
            <form onSubmit={(e) => handleSubmit(e, "user")} className="flex flex-col gap-4">
              <label className="font-semibold">Username</label>
              <input
                type="text"
                name="username"
                value={userForm.username}
                onChange={(e) => handleInputChange(e, "user")}
                className="p-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
                placeholder="Enter your username"
                required
              />
              <label className="font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={userForm.password}
                onChange={(e) => handleInputChange(e, "user")}
                className="p-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
                placeholder="Enter your password"
                required
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="mt-2 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition"
              >
                Login
              </button>
            </form>
          </div>
        )}

        {/* Admin Login Form */}
        {activeTab === "admin" && (
          <div className="card p-6 shadow-lg border-2 border-yellow-400 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
            <form onSubmit={(e) => handleSubmit(e, "admin")} className="flex flex-col gap-4">
              <label className="font-semibold">Username</label>
              <input
                type="text"
                name="username"
                value={adminForm.username}
                onChange={(e) => handleInputChange(e, "admin")}
                className="p-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              />
              <label className="font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={adminForm.password}
                onChange={(e) => handleInputChange(e, "admin")}
                className="p-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
                required
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="mt-2 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition"
              >
                Login as Admin
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoginPage;

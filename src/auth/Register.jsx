import React, { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (form.password !== form.confirm) {
      setError("Passwords do not match!");
      return;
    }

    // Simulate registration success
    alert(`User Registered Successfully!\nWelcome, ${form.name}`);
    setForm({
      name: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirm: "",
      address: "",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-100 via-white to-red-100 p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg border-2 border-yellow-400 p-8">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Create Your Account</h2>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Name & Username */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              />
            </div>
            <div>
              <label className="font-semibold">Username</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                placeholder="johndoe"
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="example@mail.com"
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              />
            </div>
            <div>
              <label className="font-semibold">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+91 1234567890"
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              />
            </div>
          </div>

          {/* Password & Confirm */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              />
            </div>
            <div>
              <label className="font-semibold">Confirm Password</label>
              <input
                type="password"
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                required
                placeholder="Confirm password"
                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="font-semibold">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows="3"
              placeholder="Your address..."
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;

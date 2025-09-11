import React, { useState ,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(form);

      if (data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-100 via-white to-red-100 p-6">
      <div className="max-w-md w-full p-6 shadow-lg border-2 border-yellow-400 rounded-xl bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="font-semibold">Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="p-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
            placeholder="Enter your username"
            required
          />
          <label className="font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
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
    </section>
  );
};

export default LoginPage;

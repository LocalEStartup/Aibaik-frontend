import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  
  const { user } = useContext(AuthContext);
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-tr from-yellow-200/40 via-white to-red-200/30 text-center">
        <div className="container mx-auto px-6">
          <span className="uppercase text-xs tracking-widest font-bold text-red-500">Welcome to AIBAIK</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-2 mb-4">Good food Eat smart & healthy</h1>
          <p className="text-gray-500 mb-6">Order your favorites, reserve a table, or meet our master chefs.</p>
              {/* Show buttons only if user is NOT logged in */}
          {!user && (
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/login"
                className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:-translate-y-1 transition"
              >
                User Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition"
              >
                New User? Register
              </Link>
            </div>
          )}

          {/* Example: If logged in, show dashboard link */}
          {user && (
            <div className="flex flex-wrap gap-4 justify-center">
              {user.role === "admin" ? (
                <Link
                  to="/dashboard"
                  className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:-translate-y-1 transition"
                >
                  Go to Admin Dashboard
                </Link>
              ) : (
                <Link
                  to="/userdashboard"
                  className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:-translate-y-1 transition"
                >
                  Go to User Dashboard
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Quick Picks Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Quick Picks</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Veg */}
            <Link to="/veg" className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 shadow hover:-translate-y-1 transition">
              <img src="/idli1.jpg" alt="Vegetarian" className="h-40 w-full object-cover rounded-lg" />
              <h3 className="mt-3 text-lg font-bold">Vegetarian</h3>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>12+ dishes</span>
                <span className="font-bold">From ₹59</span>
              </div>
              <div className="mt-3">
                <span className="inline-block px-3 py-1 bg-yellow-300 rounded-lg font-semibold">View Details</span>
              </div>
            </Link>

            {/* Non-Veg */}
            <Link to="/nonveg" className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 shadow hover:-translate-y-1 transition">
              <img src="/nonveg.jpg" alt="Non Veg" className="h-40 w-full object-cover rounded-lg" />
              <h3 className="mt-3 text-lg font-bold">Non-Vegetarian</h3>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>12+ dishes</span>
                <span className="font-bold">From ₹99</span>
              </div>
              <div className="mt-3">
                <span className="inline-block px-3 py-1 bg-yellow-300 rounded-lg font-semibold">View Details</span>
              </div>
            </Link>

            {/* Seafood */}
            <Link to="/seafood" className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 shadow hover:-translate-y-1 transition">
              <img src="/seafood.jpg" alt="Seafood" className="h-40 w-full object-cover rounded-lg" />
              <h3 className="mt-3 text-lg font-bold">Seafood</h3>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>12+ dishes</span>
                <span className="font-bold">From ₹129</span>
              </div>
              <div className="mt-3">
                <span className="inline-block px-3 py-1 bg-yellow-300 rounded-lg font-semibold">View Details</span>
              </div>
            </Link>

            {/* Soups */}
            <Link to="/soups" className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 shadow hover:-translate-y-1 transition">
              <img src="/soup.jpg" alt="Soups" className="h-40 w-full object-cover rounded-lg" />
              <h3 className="mt-3 text-lg font-bold">Soups</h3>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>12+ bowls</span>
                <span className="font-bold">From ₹69</span>
              </div>
              <div className="mt-3">
                <span className="inline-block px-3 py-1 bg-yellow-300 rounded-lg font-semibold">View Details</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

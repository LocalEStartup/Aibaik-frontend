import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext"; // optional

const API_BASE = "http://localhost:5000/api";

export default function MenuPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  // const { addToCart } = useCart();  // your cart logic here

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // keep track of quantity per item id
  const [qtyMap, setQtyMap] = useState({});

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/menu`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to load menu");

        const filtered = category
          ? data.filter(
              (item) => item.category.toLowerCase() === category.toLowerCase()
            )
          : data;

        setItems(filtered);
        // initialize quantity to 1 for each item
        const initQty = {};
        filtered.forEach((it) => (initQty[it._id] = 1));
        setQtyMap(initQty);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, [category]);

  const changeQty = (id, delta) => {
    setQtyMap((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const handleAdd = (item) => {
    const q = qtyMap[item._id] || 1;
    // addToCart(item, q); // call your cart logic
    alert(`Added ${q} × ${item.name} to cart`);
  };

  const handleOrderNow = (item) => {
    const q = qtyMap[item._id] || 1;
    // addToCart(item, q);
    navigate("/cart");
  };

  if (loading) return <p className="text-center py-8">Loading menu…</p>;
  if (error) return <p className="text-center text-red-600 py-8">{error}</p>;

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 capitalize">
          {category ? `${category} Menu` : "Our Menu"}
        </h2>

        {items.length === 0 ? (
          <p className="text-center text-gray-600">No items available</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <div
                key={item._id}
                className="card bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-4 shadow-md transition hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="thumb flex items-center justify-center h-36 rounded-xl bg-gradient-to-br from-yellow-200 via-red-100 to-yellow-50 font-bold text-red-700">
                  {item.category.toUpperCase()}
                </div>

                {/* Details */}
                <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
                <div className="meta flex items-center justify-between text-gray-600 mt-2">
                  <span className="price font-bold text-red-600">
                    ₹{item.price}
                  </span>

                  {/* Quantity controls */}
                  <div className="qty flex items-center gap-2">
                    <button
                      onClick={() => changeQty(item._id, -1)}
                      className="w-8 h-8 border-2 border-red-500 rounded-lg font-bold"
                    >
                      –
                    </button>
                    <span>{qtyMap[item._id] || 1}</span>
                    <button
                      onClick={() => changeQty(item._id, 1)}
                      className="w-8 h-8 border-2 border-red-500 rounded-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="actions-row flex gap-3 mt-4">
                  <button
                    onClick={() => handleAdd(item)}
                    className="btn bg-red-500 text-white rounded-xl px-4 py-2 font-bold hover:translate-y-[-2px] transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleOrderNow(item)}
                    className="btn secondary bg-yellow-400 text-black rounded-xl px-4 py-2 font-bold hover:translate-y-[-2px] transition"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:5000/api/chefs";

export default function ChefSection() {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChefs = async () => {
      setLoading(true);
      try {
        // No auth needed if this page is public; remove token header if not required
        const res = await fetch(API_BASE);
        const data = await res.json();
        if (!res.ok) throw new Error(data.msg || "Failed to load chefs");
        setChefs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchChefs();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading our master chefs…</p>;
  }
  if (error) {
    return <p className="text-center text-red-600 py-10">{error}</p>;
  }

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Master Chefs</h2>
        {chefs.length === 0 ? (
          <p className="text-center text-gray-600">No chefs available yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {chefs.map((chef) => (
              <div
                key={chef._id}
                className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md hover:translate-y-1 transition-transform duration-200"
              >
                <div className="h-36 w-full rounded-xl bg-gradient-to-br from-yellow-200 to-red-200 flex items-center justify-center text-2xl font-bold text-red-800 mb-4">
                  Chef
                </div>
                <h3 className="text-xl font-bold mb-2">{chef.name}</h3>
                {chef.qualification && (
                  <p className="mb-1">Qualification: {chef.qualification}</p>
                )}
                {chef.experience && (
                  <p className="mb-1">Experience: {chef.experience}</p>
                )}
                {chef.signature && (
                  <p className="mb-1">Signature: {chef.signature}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

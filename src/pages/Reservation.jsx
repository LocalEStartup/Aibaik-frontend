import React, { useState } from "react";

const tables = [
  { title: "AC Dining", img: "/ac.jpg", desc: "Cool & cozy. Limited seats." },
  { title: "AC Dining", img: "/ac.jpg", desc: "Cool & cozy. Limited seats." },
  { title: "AC Dining", img: "/ac.jpg", desc: "Cool & cozy. Limited seats." },
  { title: "Non-AC Dining", img: "/nonca.jpg", desc: "Open ambiance. Family friendly." },
];

const Reservation = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    seats: 2,
    type: "AC",
    note: "",
    payment: "UPI",
    amount: 199,
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple demo response
    setMsg(`Reservation confirmed for ${formData.seats} seat(s) on ${formData.date} at ${formData.time}.`);
    setShowModal(false);
  };

  return (
    <div className="relative bg-white min-h-screen font-inter">
      {/* Interactive Offer Banner */}
      <div className="bg-red-500 text-white text-center py-4 font-bold text-lg animate-pulse">
        🎉 Special Offer: Book a table and get 10% off today! 🎉
      </div>

      <section className="py-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Reserve a Table</h2>

        {/* Table Gallery */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
          {tables.map((table, idx) => (
            <div key={idx} className="border-2 border-yellow-400 rounded-2xl overflow-hidden shadow-md">
              <div className="h-40 overflow-hidden">
                <img src={table.img} alt={table.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <b>{table.title}</b>
                <p>{table.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reservation Button */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-red-500 text-white rounded-xl font-bold shadow-lg hover:bg-red-600 transition"
          >
            Reserve Now
          </button>
        </div>

        {/* Reservation Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-lg">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 font-bold text-xl"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4 text-center">Confirm Your Reservation</h3>
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold">Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full px-3 py-2 border-2 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                  </div>
                  <div>
                    <label className="font-semibold">Time</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full px-3 py-2 border-2 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold">Seats</label>
                    <input type="number" min="1" name="seats" value={formData.seats} onChange={handleChange} className="w-full px-3 py-2 border-2 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                  </div>
                  <div>
                    <label className="font-semibold">Type</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="w-full px-3 py-2 border-2 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200">
                      <option value="AC">AC</option>
                      <option value="Non-AC">Non-AC</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-semibold">Special Request</label>
                  <textarea rows="3" name="note" value={formData.note} onChange={handleChange} placeholder="Birthday surprise, high chair, etc." className="w-full px-3 py-2 border-2 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200"></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold">Payment Method</label>
                    <select name="payment" value={formData.payment} onChange={handleChange} className="w-full px-3 py-2 border-2 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200">
                      <option>UPI</option>
                      <option>Card</option>
                      <option>Cash on arrival</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold">Advance Amount (₹)</label>
                    <input type="number" name="amount" value={formData.amount} onChange={handleChange} className="w-full px-3 py-2 border-2 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                  </div>
                </div>

                <button type="submit" className="mt-3 w-full px-4 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition shadow-lg">
                  Confirm Reservation
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Reservation message */}
        {msg && <p className="mt-4 text-center text-green-600 font-semibold">{msg}</p>}
      </section>
    </div>
  );
};

export default Reservation;

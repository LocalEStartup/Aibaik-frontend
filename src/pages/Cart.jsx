import React, { useState, useEffect } from "react";

// Sample products data (Replace with real data from context or API)
const initialCart = [
  { id: 1, name: "Arabian Chicken", price: 199, qty: 2 },
  { id: 2, name: "Lemon Pepper Fish", price: 299, qty: 1 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const [subtotal, setSubtotal] = useState(0);
  const deliveryFee = 30;
  const [paymentMsg, setPaymentMsg] = useState("");

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    setSubtotal(total);
  }, [cartItems]);

  const handleQtyChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const handleCheckout = () => {
    setPaymentMsg("Processing payment...");
    setTimeout(() => {
      setPaymentMsg("Payment successful! Your order has been placed.");
      setCartItems([]);
    }, 1500);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center py-6">Your cart is empty.</p>
        ) : (
          <div className="grid gap-4">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-4 flex justify-between items-center shadow-md"
              >
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-700">₹{item.price} x {item.qty}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQtyChange(item.id, -1)}
                    className="w-8 h-8 bg-white border-2 border-red-500 rounded-md font-bold text-red-500 hover:bg-red-100 transition"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => handleQtyChange(item.id, 1)}
                    className="w-8 h-8 bg-white border-2 border-red-500 rounded-md font-bold text-red-500 hover:bg-red-100 transition"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 mt-6 shadow-md">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="font-bold">₹{subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>₹{deliveryFee}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>₹{subtotal + deliveryFee}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full py-3 bg-red-500 text-white font-bold rounded-xl shadow-md hover:translate-y-1 transition"
            disabled={cartItems.length === 0}
          >
            Pay & Place Order
          </button>
          {paymentMsg && <p className="mt-3 text-green-700">{paymentMsg}</p>}
        </div>
      </div>
    </section>
  );
};

export default Cart;

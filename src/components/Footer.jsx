export default function Footer() {
  return (
    <footer className="mt-12 border-t-4 border-red-500 bg-gradient-to-t from-orange-50 to-white py-8 text-gray-600">
      <div className="container mx-auto grid gap-6 md:grid-cols-3 px-6">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 font-bold">
            <img src="/aibaiklogo.png" alt="AIBAIK" className="h-12 w-12 rounded-full" />
            <span>AIBAIK</span>
          </div>
          <p className="mt-3">Tasty. Fast. Friendly.</p>
          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="px-3 py-1 border-2 border-yellow-400 rounded-full font-bold">Online Order</span>
            <span className="px-3 py-1 border-2 border-yellow-400 rounded-full font-bold">Reservation</span>
            <span className="px-3 py-1 border-2 border-yellow-400 rounded-full font-bold">Healthy Food</span>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-bold mb-2">Explore</h4>
          <p>Plot No:193, Bus stop</p>
          <p>Police Station Road, Parasakthi Colony</p>
          <p>Sivakasi - 626123</p>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-bold mb-2">Help</h4>
          <p>Time: 11.00 AM - 10.00 PM</p>
          <p>Contact: <a href="tel:08940076767" className="hover:text-red-500">08940076767</a></p>
          <p>Mail ID: <a href="mailto:aibaik@sivaksi" className="hover:text-red-500">aibaik@sivaksi</a></p>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-500">
        © AIBAIK Restaurant.
      </div>
    </footer>
  );
}

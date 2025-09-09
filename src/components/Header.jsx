import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-yellow-300 via-white to-red-400 border-b-4 border-red-500 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 font-extrabold tracking-wide">
          <img src="/aibaiklogo.png" alt="AIBAIK" className="h-12 w-12 rounded-full" />
          <span className="text-xl">AIBAIK</span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-4 flex-wrap font-semibold">
          <Link to="/" className="px-4 py-2 rounded-full bg-red-500 text-white">Home</Link>
          <Link to="/explore-menu" className="px-4 py-2 rounded-full hover:bg-yellow-300">Explore Menu</Link>
          <Link to="/reservation" className="px-4 py-2 rounded-full hover:bg-yellow-300">Table Reservation</Link>
          <Link to="/masterchef" className="px-4 py-2 rounded-full hover:bg-yellow-300">Master Chef</Link>
          <Link to="/about" className="px-4 py-2 rounded-full hover:bg-yellow-300">About Us</Link>
          <Link to="/cart" className="px-4 py-2 border-2 border-dashed border-yellow-400 bg-yellow-100 rounded-full">Cart</Link>
          <Link to="/dashboard" className="px-4 py-2" title="Profile">👤</Link>
        </nav>
      </div>
    </header>
  );
}
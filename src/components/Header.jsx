import { useState , useContext } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

import { AuthContext } from "../context/AuthContext";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-yellow-300 via-white to-red-400 border-b-4 border-red-500 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Brand */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-extrabold tracking-wide"
        >
          <img
            src="/aibaiklogo.png"
            alt="AIBAIK"
            className="h-12 w-12 rounded-full"
          />
          <span className="text-xl">AIBAIK</span>
        </NavLink >

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-4 flex-wrap font-semibold">
          <NavLink to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "hover:bg-yellow-300"
              }`
            }>
            Home
          </NavLink >
          <NavLink
            to="/explore-menu"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "hover:bg-yellow-300"
              }`
            }>
            Explore Menu
          </NavLink >
          <NavLink
            to="/reservation"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "hover:bg-yellow-300"
              }`
            }>
            Table Reservation
          </NavLink >
          <NavLink
            to="/masterchef"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "hover:bg-yellow-300"
              }`
            }>
            Master Chef
          </NavLink >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "hover:bg-yellow-300"
              }`
            }>
            About Us
          </NavLink >
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `px-4 py-2 border-2 border-dashed border-yellow-400 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "bg-yellow-100 hover:bg-yellow-200"
              }`} >
            Cart
          </NavLink >
          <NavLink to="/dashboard" className={({ isActive }) =>
            `px-4 py-2 rounded-full text-center transition ${isActive ? "bg-white text-white" : "hover:bg-yellow-300"
            }`
          } title="Profile">
            👤
          </NavLink >
             {/* Logout button - only for logged-in users */}
          {user && (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg bg-red-500 text-white z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>


      </div>

      {/* Mobile Nav Overlay */}
      {
        isOpen && (
          <div className="fixed inset-0 z-40">
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              onClick={() => setIsOpen(false)}
            ></div>
            {/* Side Menu */}
            <div className="absolute right-0 top-0 h-full w-full max-w-xs pt-6 flex flex-col gap-6 font-semibold transform transition-transform duration-300 ease-in-out">


              {/* Navigation NavLink s */}
              <nav className="flex flex-col gap-3 mt-15 bg-gradient-to-r from-yellow-300 via-white to-red-400 p-10 ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "hover:bg-yellow-300"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink >
                <NavLink
                  to="/explore-menu"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "hover:bg-yellow-300"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Explore Menu
                </NavLink >
                <NavLink
                  to="/reservation"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "hover:bg-yellow-300"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Table Reservation
                </NavLink >
                <NavLink
                  to="/masterchef"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "hover:bg-yellow-300"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Master Chef
                </NavLink >
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "hover:bg-yellow-300"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </NavLink >
                <NavLink
                  to="/cart"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 border-2 border-dashed border-yellow-400 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "bg-yellow-100 hover:bg-yellow-200"
                    }`} >
                  Cart
                </NavLink >
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-center transition ${isActive ? "bg-red-500 text-white" : "hover:bg-yellow-300"
                    }`
                  }
                  title="Profile"
                  onClick={() => setIsOpen(false)}
                >
                  👤 Profile
                </NavLink >
                     {/* Logout button - only for logged-in users */}
              {user && (
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
                >
                  Logout
                </button>
              )}
              </nav>
            </div>
          </div>
        )
      }

    </header >
  );
}

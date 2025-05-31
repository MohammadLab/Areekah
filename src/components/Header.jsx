import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState, useRef } from "react";

export default function Header() {
  const { totalItems } = useCart();
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMenu(false);
    }, 100);
  };

  return (
    <header className="bg-white shadow relative z-50 font-arabic">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-copper hover:text-amber-800 transition">
          Areekah
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
          <Link to="/" className="hover:text-copper transition">Home</Link>
          <Link to="/about" className="hover:text-copper transition">About</Link>
          <Link to="/contact" className="hover:text-copper transition">Contact</Link>
          <Link to="/terms" className="hover:text-copper transition">Terms</Link>
        </nav>

        {/* Explore / Mega Menu */}
        <div
          className="relative hidden md:block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-full text-sm hover:bg-orange-500 hover:text-white transition">
            Explore
          </button>
          {showMenu && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white border border-gray-200 rounded shadow-lg p-6 grid grid-cols-3 gap-4 z-50">
              {/* Mega Menu items */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Seating</h4>
                <ul className="space-y-1">
                  <li><Link to="/category/sofas" className="hover:text-copper transition" onClick={() => setShowMenu(false)}>Sofas</Link></li>
                  <li><Link to="/category/seats" className="hover:text-copper transition" onClick={() => setShowMenu(false)}>Seats</Link></li>
                  <li><Link to="/category/sets" className="hover:text-copper transition" onClick={() => setShowMenu(false)}>Sets</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Tables & Screens</h4>
                <ul className="space-y-1">
                  <li><Link to="/category/tables" className="hover:text-copper transition" onClick={() => setShowMenu(false)}>Tables</Link></li>
                  <li><Link to="/category/changing_screen" className="hover:text-copper transition" onClick={() => setShowMenu(false)}>Changing Screens</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">More</h4>
                <ul className="space-y-1">
                  <li><Link to="/about" className="hover:text-copper transition" onClick={() => setShowMenu(false)}>About Us</Link></li>
                  <li><Link to="/contact" className="hover:text-copper transition" onClick={() => setShowMenu(false)}>Contact</Link></li>
                  <li><Link to="/terms" className="hover:text-copper transition" onClick={() => setShowMenu(false)}>Terms & Privacy</Link></li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Cart and Mobile Menu */}
        <div className="flex items-center gap-4 md:hidden">
          <Link to="/cart" className="relative text-xl">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="text-gray-700 text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow border-t border-gray-200 p-4 flex flex-col gap-2 text-sm text-gray-700 font-medium">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link to="/terms" onClick={() => setMobileMenuOpen(false)}>Terms</Link>
        </div>
      )}
    </header>
  );
}

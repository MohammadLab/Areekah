import { Link } from "react-router-dom";
import { useState } from "react";

const categories = [
  { name: "Sofas", slug: "sofas" },
  { name: "Seats", slug: "seats" },
  { name: "Sets", slug: "sets" },
  { name: "Tables", slug: "tables" },
  { name: "Changing Screen", slug: "changing_screen" },
];

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white shadow relative z-50 font-arabic">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-copper hover:text-amber-800 transition"
        >
          Areekah
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-full text-sm hover:bg-orange-500 hover:text-white transition">
            Categories
          </button>

          {showMenu && (
            <div className="absolute left-0 mt-2 w-[600px] bg-white border border-gray-200 rounded shadow-lg p-6 grid grid-cols-2 gap-4 z-50">
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  to={`/category/${cat.slug}`}
                  className="text-gray-800 hover:text-copper font-medium transition"
                  onClick={() => setShowMenu(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

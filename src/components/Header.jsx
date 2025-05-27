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
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="bg-white shadow p-4 flex justify-center items-center gap-8 font-arabic">
            {/* Site name */}
            <Link
                to="/"
                className="text-2xl font-bold text-copper hover:text-amber-800 transition"
            >
                Areekah
            </Link>

            {/* Categories dropdown */}
            <div className="relative">
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="px-4 py-1 border border-orange-500 text-orange-500 rounded-full text-sm hover:bg-orange-500 hover:text-white transition"
                >
                    Categories
                </button>

                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow">
                        {categories.map((cat, i) => (
                            <Link
                                key={i}
                                to={`/category/${cat.slug}`}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                                onClick={() => setDropdownOpen(false)}
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

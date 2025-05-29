import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getProducts from "../utils/getProducts";

const categories = [
  { name: "Sofas", slug: "sofas", image: "/images/category-sofas.jpg" },
  { name: "Seats", slug: "seats", image: "/images/category-seats.jpg" },
  { name: "Sets", slug: "sets", image: "/images/category-sets.jpg" },
  { name: "Tables", slug: "tables", image: "/images/category-tables.jpg" },
  { name: "Changing Screens", slug: "changing_screen", image: "/images/category-screens.jpg" },
];

export default function Home() {
  const allProducts = getProducts().slice(0, 4); // Highlight 4 featured products

  return (
    <div className="font-arabic text-gray-800">
      {/* Hero section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="/images/slider/slide1.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-5xl font-bold mb-4">Discover Syrian Craftsmanship</h1>
          <p className="max-w-2xl">
            Explore our range of authentic, hand-crafted furniture that brings the warmth and beauty of Syria to your home.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto my-12 px-4 space-y-8">
        <h2 className="text-3xl font-bold text-center">Explore Our Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <Link
              key={i}
              to={`/category/${category.slug}`}
              className="relative group overflow-hidden rounded shadow"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center text-white font-semibold text-xl">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto my-12 px-4 space-y-8">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {allProducts.map((product, i) => (
            <Link
              key={i}
              to={`/product/${product.slug}`}
              className="group border rounded overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-2">
                <h3 className="text-lg font-semibold group-hover:text-orange-500 transition">
                  {product.title}
                </h3>
                {product.price && (
                  <p className="text-sm text-gray-600">${product.price}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Showroom Invitation */}
      <div className="bg-orange-500 text-white text-center p-12">
        <h2 className="text-3xl font-bold mb-2">Visit Our Showroom</h2>
        <p>Experience the timeless beauty of our Syrian-inspired furniture in person.</p>
        <Link
          to="/contact"
          className="inline-block mt-4 px-6 py-2 bg-white text-orange-500 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

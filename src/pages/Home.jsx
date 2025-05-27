import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getProducts from "../utils/getProducts";

const categories = [
  { name: "Sofas", slug: "sofas", description: "Discover our range of handcrafted Syrian-style sofas, blending tradition and luxury." },
  { name: "Seats", slug: "seats", description: "Elegant and comfortable seating options, meticulously crafted to elevate your space." },
  { name: "Sets", slug: "sets", description: "Complete sets for your living space, offering cohesive style and functionality." },
  { name: "Tables", slug: "tables", description: "Unique Syrian-inspired tables to enrich your home decor." },
  { name: "Changing Screen", slug: "changing_screen", description: "Traditional wooden screens with intricate Syrian designs, perfect for partitioning or decorating." },
];

const slides = [
  "/images/slider/slide1.jpg",
  "/images/slider/slide2.jpg",
  "/images/slider/slide3.jpg",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const allProducts = getProducts();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-arabic">
      {/* Slideshow */}
      <div className="relative h-96 overflow-hidden">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide}
            alt={`Slide ${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      {/* Small description */}
      <div className="text-center my-8 max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Areekah Furniture</h1>
        <p className="text-gray-700">Experience the essence of Syrian craftsmanship with our authentic and stylish furniture collection, blending tradition and modern design.</p>
      </div>

      {/* All Products button */}
      <div className="text-center mb-8">
        <Link
          to="/all-products"
          className="inline-block px-4 py-1 border border-orange-500 text-orange-500 rounded-full text-sm hover:bg-orange-500 hover:text-white transition"
        >
          View All Products
        </Link>
      </div>

      {/* Categories */}
      <div className="p-6 space-y-8 max-w-4xl mx-auto">
        {categories.map((category, i) => {
          const firstProduct = allProducts.find((p) => p.category === category.slug);
          const thumbnail = firstProduct?.images?.[0] || "/images/placeholder.jpg";

          return (
            <div key={i} className="card flex flex-col md:flex-row items-center gap-4 bg-white rounded shadow p-4">
              <img src={thumbnail} alt={category.name} className="w-40 h-40 object-cover rounded-md" />
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-semibold capitalize mb-1">{category.name}</h2>
                <p className="text-sm text-gray-700 mb-2">{category.description}</p>
                <Link
                  to={`/category/${category.slug}`}
                  className="inline-block mt-2 px-4 py-2 bg-copper text-white rounded-full text-sm hover:bg-amber-800 transition"
                >
                  View {category.name}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

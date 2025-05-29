import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  "/images/slider/slide1.jpg",
  "/images/slider/slide2.jpg",
  "/images/slider/slide3.jpg",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-arabic">
      {/* Hero Slideshow */}
      <div className="relative h-96 overflow-hidden">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide}
            alt={`Slide ${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Introduction */}
      <div className="text-center my-8 max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Areekah Furniture</h1>
        <p className="text-gray-700">
          Experience the essence of Syrian craftsmanship with our authentic and stylish furniture collection, blending tradition and modern design.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-8">
        <Link
          to="/contact"
          className="inline-block px-4 py-1 border border-orange-500 text-orange-500 rounded-full text-sm hover:bg-orange-500 hover:text-white transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

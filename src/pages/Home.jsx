import getProducts from "../utils/getProducts";
import { Link } from "react-router-dom";

export default function Home() {
  const products = getProducts();

  return (
    <div className="font-arabic">
      <div className="hero-pattern py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Areekah Furniture</h1>
        <p className="text-lg max-w-xl mx-auto">Handcrafted Syrian-style pieces blending tradition and elegance.</p>
      </div>

      <div className="p-6 space-y-8 max-w-4xl mx-auto">
        {products.map((item, i) => (
          <div key={i} className="card flex flex-col md:flex-row items-center gap-4">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-40 h-40 object-cover rounded-md"
            />
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-semibold mb-1">{item.title}</h2>
              <p className="text-sm text-gray-700 mb-2">{item.description}</p>
              <p className="text-xs text-copper uppercase mt-1">{item.category}</p>
              <Link
                to={`/category/${item.category}`}
                className="inline-block mt-2 px-4 py-2 bg-copper text-white rounded-full text-sm hover:bg-amber-800 transition"
              >
                View {item.category}
              </Link>
            </div>
          </div>
        ))}

        <Link
          to="/all-products"
          className="block text-center mt-8 py-3 px-4 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}

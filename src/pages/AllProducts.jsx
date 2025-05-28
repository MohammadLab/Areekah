import { useState, useEffect } from "react";
import FilterSidebar from "../components/FilterSidebar";
import getProducts from "../utils/getProducts";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    const realProducts = getProducts();
    setProducts(realProducts);
    setFilteredProducts(realProducts);
  }, []);

  const handleFilterChange = ({ category, price }) => {
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter((p) => (p.category || "").toLowerCase() === category.toLowerCase());
    }

    if (price) {
      const [min, max] = price.includes("+")
        ? [500, Infinity]
        : price.split("-").map(Number);
      filtered = filtered.filter((p) => p.price >= min && p.price <= max);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-4">
      <FilterSidebar onFilterChange={handleFilterChange} />

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products match the selected filters.</p>
        ) : (
          filteredProducts.map((item, index) => (
            <div key={index} className="border rounded shadow relative hover:shadow-lg transition">
              <Link to={`/product/${item.slug}`} className="block p-4">
                {item.images.length > 0 && (
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-48 object-cover mb-2 rounded"
                  />
                )}
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.price && <p className="text-sm text-gray-600">${item.price}</p>}
              </Link>
              <button
                onClick={() => setQuickViewProduct(item)}
                className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs hover:bg-orange-600 transition"
              >
                Quick View
              </button>
            </div>
          ))
        )}
      </div>

      {quickViewProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="bg-white p-8 rounded shadow-lg max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <div className="flex overflow-x-auto space-x-2 mb-4">
              {quickViewProduct.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="h-[36rem] object-contain rounded"
                  alt={quickViewProduct.title}
                />
              ))}
            </div>
            <h3 className="text-3xl font-bold mb-2">{quickViewProduct.title}</h3>
            <p className="text-lg text-gray-700">{quickViewProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

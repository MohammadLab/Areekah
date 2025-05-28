import { useState, useEffect } from "react";
import FilterSidebar from "../components/FilterSidebar";
import getProducts from "../utils/getProducts";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const realProducts = getProducts();
    setProducts(realProducts);
    setFilteredProducts(realProducts);
  }, []);

  const handleFilterChange = ({ category, price }) => {
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
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
            <div key={index} className="border rounded p-4 shadow">
              {item.images.length > 0 && (
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-2 rounded"
                />
              )}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.price && <p className="text-sm text-gray-600">${item.price}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

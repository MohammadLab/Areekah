import { useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import { products } from "../data/products";

export default function AllProducts() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Flatten all products into one array for simplicity
  const allProducts = Object.values(products).flat();

  const handleFilterChange = ({ category, price }) => {
    let filtered = [...allProducts];

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (price) {
      const [min, max] = price.includes("+")
        ? [500, Infinity]
        : price.split("-").map(Number);
      filtered = filtered.filter(
        (p) => p.price >= min && p.price <= max
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-4">
      <FilterSidebar onFilterChange={handleFilterChange} />

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {(filteredProducts.length > 0 ? filteredProducts : allProducts).map((item, index) => (
          <div key={index} className="border rounded p-4 shadow">
            <img
              src={`/images/${item.folder}/1.jpg`}
              alt={item.name}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            {item.price && <p className="text-sm text-gray-600">${item.price}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

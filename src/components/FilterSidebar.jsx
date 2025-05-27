// src/components/FilterSidebar.jsx
import { useState } from "react";

export default function FilterSidebar({ onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange({ category: e.target.value, price: selectedPrice });
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    onFilterChange({ category: selectedCategory, price: e.target.value });
  };

  return (
    <aside className="w-64 p-4 bg-white border rounded shadow space-y-4">
      <h3 className="text-xl font-semibold">Filter Products</h3>

      <div>
        <h4 className="text-sm font-semibold mb-1">Category</h4>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="">All</option>
          <option value="sofas">Sofas</option>
          <option value="seats">Seats</option>
          <option value="tables">Tables</option>
          <option value="sets">Sets</option>
          <option value="changing_screen">Changing Screens</option>
        </select>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-1">Price</h4>
        <select
          value={selectedPrice}
          onChange={handlePriceChange}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="">All</option>
          <option value="0-100">$0 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-500">$200 - $500</option>
          <option value="500+">$500+</option>
        </select>
      </div>
    </aside>
  );
}

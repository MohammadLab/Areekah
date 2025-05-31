
export default function ProductActions() {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
      <input
        type="number"
        defaultValue={1}
        min={1}
        className="w-16 border rounded p-1"
      />

      <button className="ml-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
        Add to Cart
      </button>
    </div>
  );
}

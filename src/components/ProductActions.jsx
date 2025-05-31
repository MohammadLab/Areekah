export default function ProductActions({ price, discount }) {
  const hasDiscount = discount && discount > 0;
  const discountedPrice = hasDiscount ? price - price * (discount / 100) : price;

  return (
    <div className="flex flex-col gap-2">
      <div className="text-2xl font-semibold text-red-600">
        {hasDiscount && (
          <span className="text-gray-400 line-through mr-2">${price}</span>
        )}
        ${discountedPrice.toFixed(2)}
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="quantity" className="text-sm">Quantity:</label>
        <input
          type="number"
          id="quantity"
          defaultValue={1}
          min={1}
          className="w-16 border border-gray-300 rounded px-2 py-1 text-sm"
        />
        <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

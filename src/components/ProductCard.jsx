export default function ProductCard({ product }) {
  if (!product) return null; // Guard against undefined product

  const discount = product.discount || 0;
  const price = product.price || 0;

  const hasDiscount = discount > 0;
  const discountedPrice = hasDiscount
    ? price - price * (discount / 100)
    : price;

  return (
    <a
      href={`/product/${product.id}`}
      className="relative border rounded shadow hover:shadow-lg transition p-2 bg-white w-full block"
    >
      {/* Top Value badge */}
      {product.topValue && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">
          TOP VALUE
        </div>
      )}

      {/* Discount badge */}
      {hasDiscount && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
          {discount}% OFF
        </div>
      )}

      {/* Product Image */}
      <img
        src={product.images?.[0] || "/images/placeholder.jpg"}
        alt={product.title || "Product"}
        className="w-full h-48 object-cover mb-2 rounded"
      />

      {/* Product Details */}
      <div className="px-2">
        <h3 className="text-lg font-bold uppercase">{product.title || "Untitled"}</h3>
        <p className="text-sm text-gray-600 mb-1">{product.description || "No description available."}</p>

        {/* Pricing */}
        <div className="flex items-center space-x-2 mb-1">
          {hasDiscount && (
            <span className="text-sm text-gray-400 line-through">${price.toFixed(2)}</span>
          )}

          <span className="text-red-500 font-semibold">${discountedPrice.toFixed(2)}</span>
        </div>

        {/* Stock and Shipping */}
        <p className="text-green-600 text-xs font-semibold">IN STOCK</p>
        <p className="text-gray-500 text-xs">FREE Shipping</p>
      </div>

      {/* Wishlist Icon */}
      <button className="absolute bottom-2 right-2 text-gray-400 hover:text-red-500 transition">
        ♥
      </button>
    </a>
  );
}

export default function ProductCard({ product }) {
  const hasDiscount = product.discount && product.discount > 0;
  const discountedPrice = hasDiscount
    ? product.price - product.price * (product.discount / 100)
    : product.price;

  return (
    <div className="relative border rounded shadow hover:shadow-lg transition p-2 bg-white w-full">
      {/* Top Value badge */}
      {product.topValue && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">
          TOP VALUE
        </div>
      )}

      {/* Discount badge */}
      {hasDiscount && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
          {product.discount}% OFF
        </div>
      )}

      {/* Product Image */}
      <a href={`/product/${product.id}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-cover mb-2 rounded"
        />
      </a>

      {/* Product Details */}
      <div className="px-2">
        <h3 className="text-lg font-bold uppercase">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-1">{product.description}</p>

        {/* Pricing */}
        <div className="flex items-center space-x-2 mb-1">
          {hasDiscount && (
            <span className="text-sm text-gray-400 line-through">${product.price}</span>
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
    </div>
  );
}

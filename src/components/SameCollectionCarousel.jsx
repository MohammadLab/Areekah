// src/components/SameCollectionCarousel.jsx
import { Link } from "react-router-dom";

export default function SameCollectionCarousel({ currentProductId, category, allProducts }) {
  // Filter products in the same category, excluding the current product
  const relatedProducts = allProducts.filter(
    (p) => p.category === category && p.id !== currentProductId
  );

  if (relatedProducts.length === 0) {
    return null; // Nothing to show
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Same Collection</h2>
      <div className="flex overflow-x-auto space-x-4">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="min-w-[200px] flex-shrink-0 border rounded shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={product.images?.[0] || "/images/placeholder.jpg"}
              alt={product.title}
              className="w-full h-40 object-cover rounded-t"
            />
            <div className="p-2 text-sm">
              <h3 className="font-semibold truncate">{product.title}</h3>
              <p className="text-gray-500">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

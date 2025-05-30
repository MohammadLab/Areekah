import { useParams } from "react-router-dom";
import getProducts from "../utils/getProducts";

export default function Product() {
  const { id } = useParams();

  // Get all products
  const allProducts = getProducts();

  // Find the real product by ID
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 font-arabic text-gray-800">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <a href="/" className="hover:underline">Home</a>
        <span className="mx-2">/</span>
        <a href={`/category/${product.category}`} className="hover:underline capitalize">
          {product.category}
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-semibold">{product.title}</span>
      </nav>

      <h1 className="text-3xl font-bold">{product.title}</h1>

      {/* Image gallery */}
      <div className="flex overflow-x-auto space-x-2 rounded">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={product.title}
            className="h-64 object-cover rounded shadow"
          />
        ))}
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700">{product.description}</p>

      {/* Price */}
      <p className="text-2xl font-semibold text-red-600">${product.price}</p>

      {/* Future: Add to Cart button */}
      <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
        Add to Cart
      </button>
    </div>
  );
}

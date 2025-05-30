import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  // Placeholder product data
  const product = {
    id: id,
    title: "Elegant Sofa",
    description: "A luxurious Syrian-style sofa with exquisite craftsmanship.",
    price: 2499,
    images: [
      "/images/category-sofas.jpg",
      "/images/category-sofas.jpg",
      "/images/category-sofas.jpg",
    ],
  };

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 font-arabic text-gray-800">
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

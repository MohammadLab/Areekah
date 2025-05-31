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

  const hasDiscount = product.discount && product.discount > 0;
  const discountedPrice = hasDiscount
    ? product.price - product.price * (product.discount / 100)
    : product.price;

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6 font-arabic text-gray-800">
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

      {/* Product Title */}
      <h1 className="text-3xl font-bold">{product.title}</h1>

      {/* Image gallery */}
      <div className="flex overflow-x-auto gap-4">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={product.title}
            className="h-64 rounded shadow object-cover"
          />
        ))}
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700">{product.description}</p>

      {/* Pricing */}
      <div className="text-2xl font-bold text-red-600">
        {hasDiscount && (
          <span className="text-gray-400 line-through mr-2">${product.price}</span>
        )}
        ${discountedPrice.toFixed(2)}
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex items-center gap-4 mt-2">
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

      {/* Tabs (placeholder) */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Product Details</h3>
        <p className="text-gray-600 text-sm">Here we’ll add tabs or collapsible sections for specifications, dimensions, shipping & care, etc.</p>
      </div>

      {/* Related Products (placeholder) */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Related Products</h3>
        <p className="text-gray-600 text-sm">A carousel or grid of related items will go here.</p>
      </div>
    </div>
  );
}

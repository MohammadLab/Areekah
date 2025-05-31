import { useParams } from "react-router-dom";
import { useState } from "react";
import getProducts from "../utils/getProducts";
import SameCollectionCarousel from "../components/SameCollectionCarousel";
import { useCart } from "../context/CartContext"; // ✅ Import Cart Context

export default function Product() {
  const { id } = useParams();
  const allProducts = getProducts();
  const product = allProducts.find((p) => p.id === id);

  const { addToCart } = useCart(); // ✅ Use Cart Context
  const [zoomedImage, setZoomedImage] = useState(null);
  const [quantity, setQuantity] = useState(1); // ✅ Track quantity

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  const discount = product.discount || 0;
  const hasDiscount = discount > 0;
  const discountedPrice = hasDiscount
    ? product.price - product.price * (discount / 100)
    : product.price;

  const handleAddToCart = () => {
    addToCart(product, Number(quantity)); // ✅ Add to Cart with quantity
  };

  return (
    <div className="max-w-6xl mx-auto p-4 font-arabic text-gray-800">
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

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Image Gallery */}
        <div className="flex-1 flex flex-col gap-2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full max-h-[500px] object-contain rounded shadow cursor-pointer"
            onClick={() => setZoomedImage(product.images[0])}
          />

          {/* Thumbnail gallery */}
          <div className="flex gap-2 overflow-x-auto mt-2">
            {product.images.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={product.title}
                className="h-24 object-cover rounded cursor-pointer hover:opacity-80 transition"
                onClick={() => setZoomedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>

          <div className="flex items-center space-x-2">
            {hasDiscount && (
              <span className="text-lg text-gray-400 line-through">${product.price}</span>
            )}
            <span className="text-2xl text-red-600 font-bold">${discountedPrice.toFixed(2)}</span>
          </div>

          <div className="flex items-center space-x-2">
            <label htmlFor="quantity" className="text-sm">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              className="w-16 border rounded px-2 py-1"
            />
            <button
              onClick={handleAddToCart} // ✅ Add to Cart logic
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
              Add to Cart
            </button>
          </div>

          {/* Details Tabs */}
          <div>
            <h2 className="text-lg font-semibold mt-4">Product Details</h2>
            <p className="text-sm text-gray-600">Here we’ll add tabs or collapsible sections for specifications, dimensions, shipping & care, etc.</p>
          </div>
        </div>
      </div>

      {/* Related Products Carousel */}
      <SameCollectionCarousel
        currentProductId={id}
        category={product.category}
        allProducts={allProducts}
      />

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            alt="Zoomed"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow"
          />
        </div>
      )}
    </div>
  );
}

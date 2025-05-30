import { useParams } from "react-router-dom";
import getProducts from "../utils/getProducts";
import ProductCard from "../components/ProductCard";

export default function ProductCategory() {
  const { type } = useParams();

  // Load all products using the getProducts() function
  const allProducts = getProducts();

  // Filter products based on the category in the URL
  const filteredProducts = allProducts.filter(
    (product) => product.category === type
  );

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4 font-arabic text-gray-800">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <a href="/" className="hover:underline">Home</a>
        <span className="mx-2">/</span>
        <span className="capitalize text-gray-800 font-semibold">{type}</span>
      </nav>

      {/* Category title */}
      <h1 className="text-3xl font-bold capitalize mb-4">{type}</h1>

      {/* Product grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products available in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

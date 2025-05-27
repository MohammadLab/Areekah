import getProducts from "../utils/getProducts";
import ProductCard from "../components/ProductCard"; // ✅ import the ProductCard!

export default function AllProducts() {
  const products = getProducts();

  return (
    <div className="p-6 font-arabic max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4">All Products</h2>
      <div className="space-y-8"> {/* Use vertical spacing instead of grid for alternating layout */}
        {products.map((item, i) => (
          <ProductCard key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

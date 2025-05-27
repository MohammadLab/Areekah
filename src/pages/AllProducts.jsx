import getProducts from "../utils/getProducts";
import ProductCard from "../components/ProductCard"; // ✅ import the ProductCard!

export default function AllProducts() {
  const products = getProducts();

  return (
    <div className="p-6 font-arabic max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* 2-column layout on medium screens and up */}
        {products.map((item, i) => (
          <ProductCard key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

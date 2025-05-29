import { useParams, Link } from "react-router-dom";
import getProducts from "../utils/getProducts";
import ProductCard from "../components/ProductCard";

export default function ProductCategory() {
  const { type } = useParams();
  const allProducts = getProducts();
  const items = allProducts.filter(
    (item) => (item.category || "").toLowerCase() === type.toLowerCase()
  );

  return (
    <div className="p-6 font-arabic max-w-4xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-600 mb-4">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="capitalize text-gray-800 font-semibold">{type}</span>
      </nav>

      <h2 className="text-2xl mb-4 capitalize">{type}</h2>
      <div className="space-y-8">
        {items.map((item, i) => (
          <ProductCard key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

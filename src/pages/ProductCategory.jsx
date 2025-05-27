import { useParams } from "react-router-dom";
import getProducts from "../utils/getProducts";
import ProductCard from "../components/ProductCard";

export default function ProductCategory() {
  const { type } = useParams();
  const allProducts = getProducts();
  const items = allProducts.filter((item) => item.category === type);

  return (
    <div className="p-6 font-arabic max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4 capitalize">{type}</h2>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
          <ProductCard key={i} item={item} category={type} />
        ))}
      </div>
    </div>
  );
}

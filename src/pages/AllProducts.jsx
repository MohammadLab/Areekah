import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
export default function AllProducts() {
  const allItems = Object.entries(products).flatMap(([type, items]) =>
    items.map(item => ({ ...item, type }))
  );
  return (
    <div className="p-6 font-arabic max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4">All Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {allItems.map((item, i) => (
          <ProductCard key={i} item={item} category={item.type} />
        ))}
      </div>
    </div>
  );
}
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function ProductCategory() {
  const { type } = useParams();

  // Placeholder product data
  const products = [
    {
      id: "0001",
      title: "Elegant Sofa",
      description: "A luxurious Syrian-style sofa.",
      price: 2499,
      discount: 15,
      topValue: true,
      images: ["/images/category-sofas.jpg"],
    },
    {
      id: "0002",
      title: "Cozy Armchair",
      description: "A comfortable Syrian-style armchair.",
      price: 1499,
      discount: 10,
      topValue: false,
      images: ["/images/category-seats.jpg"],
    },
    {
      id: "0003",
      title: "Wooden Table",
      description: "A beautiful wooden table with Syrian carvings.",
      price: 1999,
      discount: 5,
      topValue: false,
      images: ["/images/category-tables.jpg"],
    },
    {
      id: "0004",
      title: "Decorative Screen",
      description: "Hand-carved Syrian wooden screen.",
      price: 999,
      discount: 0,
      topValue: false,
      images: ["/images/category-screens.jpg"],
    },
  ];

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

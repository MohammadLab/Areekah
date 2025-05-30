import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: "0001",
    title: "Elegant Sofa",
    description: "Handcrafted Syrian-style sofa with intricate woodwork.",
    price: 2499,
    discount: 15,
    topValue: true,
    images: ["/images/category-sofas.jpg"]
  },
  {
    id: "0002",
    title: "Cozy Armchair",
    description: "Luxurious Syrian-style armchair with plush comfort.",
    price: 1499,
    discount: 10,
    topValue: false,
    images: ["/images/category-seats.jpg"]
  },
  {
    id: "0003",
    title: "Wooden Table",
    description: "Beautiful wooden table with detailed Syrian carvings.",
    price: 1999,
    discount: 5,
    topValue: false,
    images: ["/images/category-tables.jpg"]
  },
  {
    id: "0004",
    title: "Decorative Screen",
    description: "Syrian hand-carved wooden screen, a stunning room divider.",
    price: 999,
    discount: 0,
    topValue: false,
    images: ["/images/category-screens.jpg"]
  },
];

export default function FeaturedProducts() {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4 space-y-8">
      <h2 className="text-3xl font-bold text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {featuredProducts.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
}

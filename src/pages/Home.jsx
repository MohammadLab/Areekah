import HeroSection from "../components/HeroSection";
import CategoryHighlights from "../components/CategoryHighlights";
import ShowroomSection from "../components/ShowroomSection";
import getProducts from "../utils/getProducts";
import ProductCard from "../components/ProductCard";

export default function Home() {
  // Load all products
  const allProducts = getProducts();

  // Filter only featured products
  const featuredProducts = allProducts.filter((product) => product.featured);

  return (
    <div className="font-arabic text-gray-800">
      <HeroSection />
      <CategoryHighlights />

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <div className="max-w-6xl mx-auto my-12 px-4 space-y-8">
          <h2 className="text-3xl font-bold text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      <ShowroomSection />
    </div>
  );
}

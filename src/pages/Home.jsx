import HeroSection from "../components/HeroSection";
import CategoryHighlights from "../components/CategoryHighlights";
//import FeaturedProducts from "../components/FeaturedProducts";
import ShowroomSection from "../components/ShowroomSection";

export default function Home() {
  return (
    <div className="font-arabic text-gray-800">
      <HeroSection />
      <CategoryHighlights />
      {/* <FeaturedProducts /> */}
      <ShowroomSection />
    </div>
  );
}

import { useParams } from "react-router-dom";
import getProducts from "../utils/getProducts";
import ProductGallery from "../components/ProductGallery";
import ProductDetails from "../components/ProductDetails";
import ProductActions from "../components/ProductActions";
import ProductTabs from "../components/ProductTabs";
import RelatedProducts from "../components/RelatedProducts";

export default function Product() {
  const { id } = useParams();
  const allProducts = getProducts();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 font-arabic text-gray-800">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <a href="/" className="hover:underline">Home</a>
        <span className="mx-2">/</span>
        <a href={`/category/${product.category}`} className="hover:underline capitalize">
          {product.category}
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-semibold">{product.title}</span>
      </nav>

      {/* Modular Components */}
      <ProductGallery images={product.images} />
      <ProductDetails
        title={product.title}
        description={product.description}
        price={product.price}
        discount={product.discount}
      />
      <ProductActions />
      <ProductTabs />
      <RelatedProducts />
    </div>
  );
}

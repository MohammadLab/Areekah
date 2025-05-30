import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function ProductCategory() {
    const { type } = useParams();

    // Placeholder product data
    const products = [];

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

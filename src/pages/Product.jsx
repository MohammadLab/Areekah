import { useParams } from "react-router-dom";
import getProducts from "../utils/getProducts";

export default function Product() {
  const { id } = useParams();
  const product = getProducts().find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-4xl font-bold">{product.title}</h1>
      {product.images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={product.title}
              className="h-64 object-contain rounded shadow"
            />
          ))}
        </div>
      )}
      <p className="text-lg text-gray-700">{product.description}</p>
      {product.price && <p className="text-xl font-semibold">${product.price}</p>}
    </div>
  );
}

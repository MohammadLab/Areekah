import { useParams, Link } from "react-router-dom";
import getProducts from "../utils/getProducts";

export default function ProductCategory() {
  const { type } = useParams();
  const allProducts = getProducts();
  const items = allProducts.filter(
    (item) => (item.category || "").toLowerCase() === type.toLowerCase()
  );

  return (
    <div className="p-6 font-arabic max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4 capitalize">{type}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <Link
            key={i}
            to={`/product/${item.slug}`}
            className="border rounded p-4 shadow hover:shadow-lg transition block"
          >
            {item.images.length > 0 && (
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-48 object-cover mb-2 rounded"
              />
            )}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item.price && <p className="text-sm text-gray-600">${item.price}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}

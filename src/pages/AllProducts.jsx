import getProducts from "../utils/getProducts";

export default function AllProducts() {
  const products = getProducts();

  return (
    <div className="p-6 font-arabic max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4">All Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((item, i) => (
          <div key={i} className="card p-2">
            <img src={item.images[0]} alt={item.title} className="w-full h-32 object-cover rounded" />
            <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
            <p className="text-xs text-gray-600">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

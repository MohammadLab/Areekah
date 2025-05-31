export default function ProductDetails({ product }) {
  if (!product) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-lg text-gray-700">{product.description}</p>
    </div>
  );
}

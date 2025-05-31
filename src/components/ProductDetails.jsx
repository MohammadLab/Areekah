
export default function ProductDetails({ title, description, price, discount }) {
  const hasDiscount = discount > 0;
  const discountedPrice = hasDiscount
    ? price - price * (discount / 100)
    : price;

  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-700 my-2">{description}</p>

      <div className="flex items-center gap-2">
        {hasDiscount && (
          <span className="text-sm text-gray-400 line-through">${price}</span>
        )}
        <span className="text-2xl font-bold text-red-600">${discountedPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}

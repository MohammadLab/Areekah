import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 font-arabic text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={clearCart}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Clear Cart
      </button>
    </div>
  );
}

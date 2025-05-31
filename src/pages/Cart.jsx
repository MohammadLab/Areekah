import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-4 font-arabic text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-4 font-arabic text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {/* Cart Items */}
      <div className="space-y-4 border-b pb-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded shadow-sm bg-white"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.images?.[0] || "/images/placeholder.jpg"}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  ${item.price} x {item.quantity}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold text-red-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="mt-6 flex justify-between items-center">
        <div>
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Clear Cart
          </button>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-bold">Order Summary</h2>
          <p className="text-xl font-bold text-red-600">
            Total: ${total.toFixed(2)}
          </p>
          {/* Checkout button placeholder */}
          <button className="mt-2 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

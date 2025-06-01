import { useCart } from "../context/CartContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext"; // ✅ Import Currency Context

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const { convert, currency } = useCurrency(); // ✅ Use Currency Context

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (window.paypal && cartItems.length > 0) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: { value: total.toFixed(2) },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
            clearCart();
          });
        },
      }).render("#paypal-button-container");
    }
  }, [cartItems, total, clearCart]);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-4 font-arabic text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

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
                <Link
                  to={`/product/${item.id}`}
                  className="font-semibold text-lg hover:underline"
                >
                  {item.title}
                </Link>
                <p className="text-sm text-gray-500">
                  {convert(item.price)} {currency}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold text-red-600">
                {convert(item.price * item.quantity)} {currency}
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
            Total: {convert(total)} {currency}
          </p>
        </div>
      </div>

      {/* PayPal Button */}
      <div id="paypal-button-container" className="mt-4"></div>
    </div>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import ProductCategory from "./pages/ProductCategory";
import Product from "./pages/Product";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import { CurrencyProvider } from "./context/CurrencyContext";

export default function App() {
  return (
    <CurrencyProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/category/:category" element={<ProductCategory />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </CurrencyProvider>
  );
}

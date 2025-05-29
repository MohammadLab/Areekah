import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductCategory from "./pages/ProductCategory";
import AllProducts from "./pages/AllProducts";
import About from "./pages/About";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Product from "./pages/Product";


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<ProductCategory />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/about" element={<About />} /> {/* New About page route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}
s
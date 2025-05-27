import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductCategory from "./pages/ProductCategory";
import AllProducts from "./pages/AllProducts";
import About from "./pages/About";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<ProductCategory />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/about" element={<About />} /> {/* New About page route */}
      </Routes>
    </Router>
  );
}

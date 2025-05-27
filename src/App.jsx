import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductCategory from "./pages/ProductCategory";
import AllProducts from "./pages/AllProducts";
import Header from "./components/Header"; // ✅ Import the Header

export default function App() {
  return (
    <Router>
      <Header /> {/* ✅ Add the header above the routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<ProductCategory />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
    </Router>
  );
}

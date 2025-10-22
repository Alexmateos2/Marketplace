import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/layout/HomeLayout";
import ProductsPage from "./pages/Products/layout/ProductsLayout";
import AboutUsPage from "./pages/About us/layout/AboutUsLayout";
import ProductPage from "./pages/Home/layout/ProductLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;

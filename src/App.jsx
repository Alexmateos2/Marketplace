import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/layout/HomeLayout";
import ProductsPage from "./pages/Products/layout/ProductsLayout";
import AboutUsPage from "./pages/About us/layout/AboutUsLayout";
import ProductPage from "./pages/Home/layout/ProductLayout";
import CarritoPage from "./pages/Cart/layout/layoutCarrito";
import NotFound from "./shared/notFound";
import LoginPage from "./pages/Login/layout/loginLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path ="login" element= {<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path = "/cart" element= {<CarritoPage />} />
        <Route path = "*" element= {<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

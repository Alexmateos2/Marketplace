import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/layout/HomeLayout";
import ProductsPage from "./pages/Products/layout/ProductsLayout";
import AboutUsPage from "./pages/About us/layout/AboutUsLayout";
import ProductPage from "./pages/Product/layout/ProductLayout";
import CarritoPage from "./pages/Cart/layout/layoutCarrito";
import NotFound from "./shared/NotFound.jsx";
import LoginPage from "./pages/Login/layout/LoginLayout.jsx";
import NewPage from "./pages/New/layout/NewLayout.jsx";
import CategoryPage from "./pages/Categories/layout/categoryLayout";
import ScrollToTop from "./shared/utils/ScrollToTop.jsx";
import AddProduct from "./pages/Add-Product/layout/addProduct.jsx";
import AllCategoriesPage from "./pages/Categories/layout/allCategoriesLayout.jsx";
import ProfilePage from "./pages/Profile/layout/profileLayout.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark dark:text-white transition-colors">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CarritoPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/products/:category?" element={<CategoryPage />} />
          <Route path="/categories" element={<AllCategoriesPage />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

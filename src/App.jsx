import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/layout/HomeLayout";
import ProductsPage from "./pages/Products/layout/ProductsLayout";
import AboutUsPage from "./pages/About us/layout/AboutUsLayout";
import ProductPage from "./pages/Product/layout/ProductLayout";
import CarritoPage from "./pages/Cart/layout/layoutCarrito";
import NotFound from "./shared/utils/NotFound.jsx";
import LoginPage from "./pages/Login/layout/LoginLayout.jsx";
import NewPage from "./pages/New/layout/NewLayout.jsx";
import CategoryPage from "./pages/Categories/layout/categoryLayout";
import ScrollToTop from "./shared/utils/ScrollToTop.jsx";
import AddProduct from "./pages/Add-Product/layout/addProduct.jsx";
import AllCategoriesPage from "./pages/Categories/layout/allCategoriesLayout.jsx";
import ProfilePage from "./pages/Profile/layout/profileLayout.jsx";
import { CartProvider } from "./shared/hooks/CartProvider.jsx";
import BusquedaPage from "./pages/Busqueda/layout/BusquedaLayout.jsx";
import HistoryOrdersPage from "./pages/HistoryOrders/layout/HistoryOrdersLayout.jsx";
import OrderDetailsPage from "./pages/OrderDetails/layout/OrderDetailsLayout.jsx";
import SignUpLayout from "./pages/SignUp/SignUpLayout.jsx";
import AdminLayout from "./pages/Admin/components/AdminLayout.jsx";
import AdminProductsLayout from "./pages/Admin/layout/AdminProductsLayout.jsx";
import AdminUsersLayout from "./pages/Admin/layout/AdminUsersLayout.jsx";
import AdminProductEditLayout from "./pages/Admin/layout/AdminProductEditLayout.jsx";
import AdminDashboardLayout from "./pages/Admin/layout/AdminDashboardLayout.jsx";
import AdminOrdersLayout from "./pages/Admin/layout/AdminOrdersLayout.jsx";
import ProtectedRoute from "./shared/utils/ProtectedRoute.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark dark:text-white transition-colors">
      <CartProvider>
       
        <Router>
           <ToastContainer />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CarritoPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/products/:category?" element={<CategoryPage />} />
            <Route path="/search/:search?" element={<BusquedaPage />} />
            <Route path="/categories" element={<AllCategoriesPage />} />
            <Route
              path="/add"
              element={
                <ProtectedRoute role="admin">
                  <AddProduct />
                </ProtectedRoute>
              }
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/pedidos/historial/:id?"
              element={<HistoryOrdersPage />}
            />
            <Route
              path="/pedidos/historial/details/:id_usuario?/:id"
              element={<OrderDetailsPage />}
            />
            <Route path="/signup" element={<SignUpLayout />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminLayout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <ProtectedRoute role="admin">
                  <AdminProductsLayout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <ProtectedRoute role="admin">
                  <AdminOrdersLayout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute role="admin">
                  <AdminUsersLayout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/products/edit/:id"
              element={
                <ProtectedRoute role="admin">
                  <AdminProductEditLayout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboardLayout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;

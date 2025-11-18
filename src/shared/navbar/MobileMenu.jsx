import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  FileText,
  LogOut,
  ShoppingCart,
  LayoutGrid,
  Sparkles,
  Package,
  Info,
  LayoutDashboard,
  Users,
  UserStar,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/CartContext";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};
const admin = JSON.parse(localStorage.getItem("rol")) === "admin";
const MobileMenu = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("rol");
    navigate("/login");
  };

  const isProfilePage =
    location.pathname.startsWith("/pedidos/historial") ||
    location.pathname.startsWith("/profile");
  const isAdminPage = location.pathname.startsWith("/admin");

  let menuItems = [];

  if (isProfilePage) {
    menuItems = [
      {
        icon: <User className="w-5 h-5" />,
        label: "Información Personal",
        to: "/profile",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        label: "Historial de Pedidos",
        to: "/pedidos/historial",
      },
      ...(admin
        ? [
            {
              icon: <UserStar className="w-5 h-5" />,
              label: "Admin",
              to: "/admin/dashboard",
            },
          ]
        : []),
      {
        icon: <LogOut className="w-5 h-5" />,
        label: "Cerrar Sesión",
        onClick: handleLogout,
      },
    ];
  } else if (isAdminPage) {
    menuItems = [
      {
        icon: <LayoutDashboard className="w-5 h-5" />,
        label: "Panel de Control",
        to: "/admin/dashboard",
      },
      {
        icon: <Package className="w-5 h-5" />,
        label: "Productos",
        to: "/admin/products",
      },
      {
        icon: <Users className="w-5 h-5" />,
        label: "Usuarios",
        to: "/admin/users",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        label: "Pedidos",
        to: "/admin/orders",
      },
      {
        icon: <Settings className="w-5 h-5" />,
        label: "Configuración",
        disabled: true,
      },
      {
        icon: <LogOut className="w-5 h-5" />,
        label: "Cerrar Sesión",
        onClick: handleLogout,
      },
    ];
  } else {
    menuItems = [
      {
        icon: <LayoutGrid className="w-5 h-5" />,
        label: "Categorías",
        to: "/categories",
      },
      {
        icon: <Sparkles className="w-5 h-5" />,
        label: "Novedades",
        to: "/new",
      },
      {
        icon: <Package className="w-5 h-5" />,
        label: "Productos",
        to: "/products",
      },
      {
        icon: <Info className="w-5 h-5" />,
        label: "Sobre Nosotros",
        to: "/about",
      },
      {
        icon: <ShoppingCart className="w-5 h-5" />,
        label: "Carrito",
        to: "/cart",
        totalItems,
      },
    ];
  }

  return (
    <div className="fixed top-2 left-1 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.2 }}
            className="absolute top-37 left-0 w-64 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg shadow-lg z-20 mt-2"
          >
            <nav className="flex flex-col gap-2 p-4">
              {menuItems.map(
                ({ to, label, icon, onClick, totalItems, disabled }) => {
                  if (disabled) {
                    return (
                      <button
                        key={label}
                        disabled
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 cursor-not-allowed bg-slate-50 dark:bg-background-dark/30"
                      >
                        {icon && <span>{icon}</span>}
                        <span className="text-sm font-medium">{label}</span>
                      </button>
                    );
                  }

                  if (label === "Cerrar Sesión") {
                    return (
                      <button
                        key={label}
                        onClick={() => {
                          setIsOpen(false);
                          if (onClick) onClick();
                        }}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-red-500 dark:hover:bg-red-200 text-content-light dark:text-content-dark"
                      >
                        {icon && <span>{icon}</span>}
                        <span>{label}</span>
                      </button>
                    );
                  }

                  return (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                            : "hover:bg-red-500 dark:hover:bg-red-200 text-content-light dark:text-content-dark"
                        }`
                      }
                    >
                      {icon && <span>{icon}</span>}
                      <span>{label}</span>

                      {totalItems > 0 && label === "Carrito" && (
                        <span className="bg-red-500 text-white rounded-full text-sm w-6 h-6 flex items-center justify-center">
                          {totalItems > 9 ? "9+" : totalItems}
                        </span>
                      )}
                    </NavLink>
                  );
                }
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;

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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/CartContext";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  const isProfilePage = location.pathname.startsWith("/profile");

  const menuItems = isProfilePage
    ? [
        {
          icon: <User className="w-5 h-5" />,
          label: "Personal Information",
          to: "/profile",
        },
        {
          icon: <FileText className="w-5 h-5" />,
          label: "Order History",
          to: "/pedidos/historial",
        },
        {
          icon: <LogOut className="w-5 h-5" />,
          label: "Logout",
          onClick: handleLogout,
        },
      ]
    : [
        {
          icon: <LayoutGrid className="w-5 h-5" />,
          label: "Categorías",
          to: "/categories",
        },
        { icon: <Sparkles className="w-5 h-5" />, label: "Nuevo", to: "/new" },
        {
          icon: <Package className="w-5 h-5" />,
          label: "Productos",
          to: "/products",
        },
        { icon: <Info className="w-5 h-5" />, label: "About us", to: "/about" },
        {
          icon: <ShoppingCart className="w-5 h-5" />,
          label: "Cart",
          to: "/cart",
          totalItems,
        },
      ];

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
              {menuItems.map(({ to, label, icon, onClick, totalItems }) => {
                // Si es Logout, usamos un botón en vez de NavLink
                if (label === "Logout") {
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

                    {totalItems > 0 && label === "Cart" && (
                      <span className="bg-red-500 text-white rounded-full text-sm w-6 h-6 flex items-center justify-center">
                        {totalItems > 9 ? "9+" : totalItems}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;

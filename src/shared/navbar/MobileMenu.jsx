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
  Mail,
  Database,
  Search,
  Share2,
  Shield,
  Cookie,
  History,
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
  } else if (location.pathname === "/terms") {
    menuItems = [
      {
        label: "Introducción",
        to: "#introduction",
        icon: <Info className="w-5 h-5" />,
      },
      { label: "1. Cuenta y Responsabilidades", to: "#section1" },
      { label: "2. Uso del Marketplace", to: "#section2" },
      { label: "3. Propiedad Intelectual", to: "#section3" },
      { label: "4. Pagos y Transacciones", to: "#section4" },
      { label: "5. Actividades Prohibidas", to: "#section5" },
      { label: "6. Limitación de Responsabilidad", to: "#section6" },
      { label: "7. Terminación del Servicio", to: "#section7" },
      { label: "8. Ley Aplicable", to: "#section8" },
      { label: "Contacto", to: "#contact", icon: <Mail className="w-5 h-5" /> },
    ];
  } else if (location.pathname === "/privacy") {
    menuItems = [
      {
        label: "Introducción",
        to: "#introduction",
        icon: <Info className="w-5 h-5" />,
      },
      {
        label: "Información que recopilamos",
        to: "#info-collect",
        icon: <Database className="w-5 h-5" />,
      },
      {
        label: "Cómo usamos tu información",
        to: "#info-use",
        icon: <Search className="w-5 h-5" />,
      },
      {
        label: "Compartir datos",
        to: "#data-sharing",
        icon: <Share2 className="w-5 h-5" />,
      },
      {
        label: "Seguridad de los datos",
        to: "#data-security",
        icon: <Shield className="w-5 h-5" />,
      },
      {
        label: "Tus derechos",
        to: "#your-rights",
        icon: <Settings className="w-5 h-5" />,
      },
      {
        label: "Cookies",
        to: "#cookies",
        icon: <Cookie className="w-5 h-5" />,
      },
      {
        label: "Cambios en la política",
        to: "#policy-changes",
        icon: <History className="w-5 h-5" />,
      },
      {
        label: "Contáctanos",
        to: "#contact",
        icon: <Mail className="w-5 h-5" />,
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

                  if (
                    location.pathname === "/terms" ||
                    location.pathname === "/privacy"
                  ) {
                    return (
                      <a
                        key={label}
                        href={to}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-primary/10 dark:hover:bg-primary/20 text-content-light dark:text-content-dark"
                      >
                        {icon && <span>{icon}</span>}
                        <span>{label}</span>
                      </a>
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
                            : "hover:bg-primary/10 dark:hover:bg-primary/20 text-content-light dark:text-content-dark"
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

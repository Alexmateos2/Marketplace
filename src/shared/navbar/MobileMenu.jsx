import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { MdPerson, MdReceiptLong, MdLogout, MdClose } from "react-icons/md";
import { useCart } from "../hooks/CartContext";
const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const isProfilePage = location.pathname.startsWith("/profile");

 const menuItems = isProfilePage
  ? [
      {
        icon: <MdPerson className="w-5 h-5 flex-shrink-0" />,
        label: "Personal Information",
        to: "/profile",
      },
      {
        icon: <MdReceiptLong className="w-5 h-5 flex-shrink-0" />,
        label: "Order History",
        to: "/profile/orders",
      },
      {
        icon: <MdLogout className="w-5 h-5 flex-shrink-0 translate-x-[3px]" />,
        label: "Logout",
        to: "/logout",
      },
    ]
  : [
      { label: "Categorías", to: "/categories" },
      { label: "Nuevo", to: "/new" },
      { label: "Productos", to: "/products" },
      { label: "About us", to: "/about" },
      { label: "Cart", to: "/cart", totalItems: { totalItems } },
    ];

  return (
    <div className="fixed top-5 left-1 z-40">
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
              {menuItems.map(({ to, label, icon }) => (
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
                  <span>{icon}</span>
                  <span>{label}</span>

                  {totalItems > 0 && label === "Cart" ? (
                    <span className=" bg-red-500  text-white rounded-full text-sm w-6 h-6 flex items-center justify-center">
                      {totalItems > 9 ? "9+" : totalItems}
                    </span>
                  ) : (
                    ""
                  )}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;

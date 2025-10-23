import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdPerson, MdReceiptLong, MdLogout, MdClose } from "react-icons/md";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

 
  const isProfilePage = location.pathname.startsWith("/profile");


  const menuItems = isProfilePage
    ? [
        { icon: <MdPerson />, label: "Personal Information", to: "/profile/info" },
        { icon: <MdReceiptLong />, label: "Order History", to: "/profile/orders" },
      ]
    : [
        { label: "Categorías", to: "/categories" },
        { label: "Nuevo", to: "/new" },
        { label: "Productos", to: "/products" },
        { label: "About us", to: "/about" },
        { label: "Cart", to: "/cart" },
      ];

  return (
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
                      : "hover:bg-slate-100 dark:hover:bg-slate text-content-light dark:text-content-dark"
                  }`
                }
              >
                {icon && icon}
                <span>{label}</span>
              </NavLink>
            ))}

           
          </nav>

          {/* Mostrar Logout solo si está en /profile */}
          {isProfilePage && (
            <div className="p-4 border-t border-border-light dark:border-border-dark">
              <button className="w-full h-10 px-4 rounded-lg bg-slate-100 dark:bg-surface-dark text-content-light dark:text-content-dark text-sm font-medium flex items-center justify-center">
                <MdLogout className="mr-2" />
                Logout
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

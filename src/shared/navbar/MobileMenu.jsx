import React from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ duration: 0.2 }}
          className="absolute  top-35 left-0 w-64 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg shadow-lg z-20 mt-2"
        >
          {[
            { to: "/categories", label: "Categorías" },
            { to: "/new", label: "Nuevo" },
            { to: "/products", label: "Productos" },
            { to: "/about", label: "About us" },
            { to: "/cart", label: "Cart" }
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="block px-4 py-3 text-base font-medium text-content-light dark:text-content-dark hover:bg-primary/20 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full text-left px-4 py-3 bg-primary/40 dark:bg-primary/30 dark:text-content-dark text-content-light hover:bg-primary/90 rounded-b-lg font-semibold"
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

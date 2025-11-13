import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const categorias = [
  { nombre: "Todas las categorías", ruta: "/categories" },
  { nombre: "Teclados", ruta: "/products/Teclados" },
  { nombre: "Ratones", ruta: "/products/Ratones" },
  { nombre: "Audio", ruta: "/products/Audio" },
  { nombre: "Laptops", ruta: "/products/Laptops" },
];

const CategoriesNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsOpen(false), 200);
    setCloseTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);

  const clasesLink = (isActive) =>
    `block px-4 py-4 text-sm border border-border-light dark:border-border-dark rounded transition-colors ${
      isActive
        ? "text-primary bg-primary/10 dark:bg-primary/20"
        : "text-content-light dark:text-content-dark hover:bg-primary/10 dark:hover:bg-primary/20"
    }`;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 text-sm font-medium text-content-light dark:text-content-dark hover:text-primary transition-colors"
      >
        Categorías
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute mt-2 top-full -left-20 w-60 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg shadow-lg overflow-hidden z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {categorias.map((cat) => (
            <NavLink key={cat.ruta} to={cat.ruta} className={({ isActive }) => clasesLink(isActive)}>
              {cat.nombre}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesNavbar;

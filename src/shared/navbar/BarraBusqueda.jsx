import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import ProductsItemList from "../utils/ProductsItemList";

const BarraBusqueda = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const visibleResults = results.slice(0, 4);
  const products = ProductsItemList;

  useEffect(() => {
    if (inputValue.trim() === "") {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const handler = setTimeout(() => {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    }, 300);

    return () => clearTimeout(handler);
  }, [inputValue, products]);

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-subtle-light dark:text-content-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full h-12 rounded-lg border border-subtle-light bg-background-light dark:border-gray-700 dark:bg-background-dark pl-10 pr-4 py-2 text-sm placeholder-subtle-light dark:placeholder-content-dark focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
      />

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 z-50  overflow-y-auto">
          {(results.length >= 4 ? results.slice(0, 4) : results).map(
            (product, index) => (
              <div key={product.id}>
                <NavLink
                  to={`/product/${product.id}`}
                  className="flex items-center gap-3 p-2 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 aspect-square object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm text-content-light dark:text-content-dark">
                      {product.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ${product.price}
                    </span>
                  </div>
                </NavLink>
                {(index < visibleResults.length - 1 ||
                  (results.length >= 5 &&
                    index === visibleResults.length - 1)) && (
                  <div className="h-px w-full bg-content-light/30 dark:bg-content-dark/20 my-2"></div>
                )}
              </div>
            )
          )}

          {results.length >= 5 && (
            <NavLink
              to={`/search?query=${encodeURIComponent(inputValue)}`}
              className="block text-center mt-2 p-2 text-sm text-primary hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Ver más resultados...
            </NavLink>
          )}
          {results.length === 0 && <div className="p-4">No hay resultados</div>}
        </div>
      )}
    </div>
  );
};

export default BarraBusqueda;

import React from "react";
import ProductsItemList from "../../../shared/utils/ProductsItemList.jsx";
const Pagination = ({ category, currentPage, itemsPerPage, onPageChange }) => {
  const products = ProductsItemList;
const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center mt-8 ">
      <nav aria-label="Pagination" className="flex items-center gap-2">
        {/* Prev */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-500 dark:text-gray-400 disabled:opacity-50"
        >
          {"<"}
        </button>

        {/* Números de página */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium ${
              page === currentPage
                ? "bg-primary text-white font-bold"
                : "hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-subtle-dark"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-500 dark:text-gray-400 disabled:opacity-50"
        >
          {">"}
        </button>
      </nav>
    </div>
  );
};
export default Pagination

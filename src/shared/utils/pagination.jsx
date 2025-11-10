import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  currentPage,
  itemsPerPage,
  onPageChange,
  totalItems, 
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (selectedItem) => {
    onPageChange(selectedItem.selected + 1); // react-paginate usa índice 0
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (currentPage < pageCount) onPageChange(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (pageCount === 0) return null; // No mostrar si no hay páginas

  return (
    <div className="flex justify-center  items-center gap-2">
      {/* Flecha anterior */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-500 dark:text-gray-400 disabled:opacity-50"
      >
        {"<"}
      </button>

      <ReactPaginate
        pageCount={pageCount}
        forcePage={currentPage - 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="flex items-center gap-2"
        pageClassName="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors"
        pageLinkClassName="w-full h-full flex items-center justify-center"
        breakClassName="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-subtle-dark"
        activeClassName="bg-primary text-white font-display"
        previousLabel={null}
        nextLabel={null}
      />

      {/* Flecha siguiente */}
      <button
        onClick={handleNext}
        disabled={currentPage === pageCount}
        className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-500 dark:text-gray-400 disabled:opacity-50"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;

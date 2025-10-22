import React from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/footer";
import Pagination from "../components/pagination";
import Products from "../components/products";
import Filtros from "../components/filtros";
import PaginationTop from "../components/paginationTop";

const ProductsPage = () => {
  return (
    <div className="dark:bg-background-dark dark:text-content-dark">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        <div className="flex items-center justify-between mb-8">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              All Products
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Discover items curated by our community of experts.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-end">
           <PaginationTop />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
         <Filtros />

          <div className="flex-1">
            <Products />
            <Pagination />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;

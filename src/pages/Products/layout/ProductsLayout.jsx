import React from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/Footer";
import Pagination from "../components/pagination";
import Products from "../components/products";
import Filtros from "../components/filtros";
import ProductsHero from "../components/productsHero";

const ProductsPage = ({category}) => {
  return (
    <div className="dark:bg-background-dark bg-background-light dark:text-content-dark font-display transition-colors ">
      <Navbar />
      <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
    <ProductsHero name ={category} />
        <div className="flex flex-col lg:flex-row gap-8">
         <Filtros />

          <div className="flex-1">
            <Products category={category}/>
            <Pagination />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;

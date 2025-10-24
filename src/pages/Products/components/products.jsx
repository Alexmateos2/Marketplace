import React from "react";
import { NavLink } from "react-router-dom";
import ProductsItemList from "../../../shared/utils/ProductsItemList.jsx";
const products = ProductsItemList
const Products = ({ category }) => {
  const filteredProducts = category
    ? products.filter(
        (product) => product.category === category
      )
    : products;

  return (
    <div className="grid grid-cols-1 w-5/6 mt-4 md:w-auto md:mt-0 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 font-display">
      {filteredProducts.map((product) => (
        <NavLink
          key={product.id}
          to={`/product/${product.id}`}
          className="group relative flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl"
        >
          <img
            className="relative w-full  h-70 md:h-full aspect-square object-cover   transition-transform duration-300 group-hover:scale-105"
            src={product.image ? product.image : "../unnamed(6).png"}
            alt={product.name}
          />
          <div className="px-4 h-30 md:h-full py-5 flex-grow flex flex-col">
            <h4 className="font-bold text-md lg:text-lg text-gray-800 dark:text-gray-100 flex-grow">
              {product.name}
            </h4>
            <p className="text-gray-700 dark:text-subtle-dark font-bold text-sm lg:text-lg mt-1">
              ${product.price}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Products;

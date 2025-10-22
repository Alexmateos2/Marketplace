import React from "react";
import { NavLink } from "react-router-dom";
import productsItemList from "../../../shared/utils/productsItemLIst.jsx";
const products = productsItemList
const Products = ({ category }) => {
  const filteredProducts = category
    ? products.filter(
        (product) => product.category === category
      )
    : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 font-display">
      {filteredProducts.map((product) => (
        <NavLink
          key={product.id}
          to={`/product`}
          className="group relative flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl"
        >
          <div
            className="relative w-full aspect-square bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>
          <div className="px-4 py-5 flex-grow flex flex-col">
            <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex-grow">
              {product.name}
            </h4>
            <p className="text-gray-700 dark:text-subtle-dark font-bold text-lg mt-1">
              ${product.price}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Products;

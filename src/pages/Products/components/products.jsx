import React from "react";
import { NavLink } from "react-router-dom";
import ProductsItemList from "../../../shared/utils/ProductsItemList.jsx";

const products = ProductsItemList;

const Products = ({ category }) => {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="grid grid-cols-1 w-5/6 mt-4 md:w-auto md:mt-0 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 font-display">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="h-full flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl"
        >
          {/* Imagen y nombre (enlace) */}
          <NavLink
            to={`/product/${product.id}`}
            className="flex flex-col flex-grow"
          >
            <img
              className="w-full aspect-square object-cover transition-transform duration-300 hover:scale-105"
              src={product.image ? product.image : "../unnamed(6).png"}
              alt={product.name}
              loading="lazy"
            />
            <div className="px-4 py-5 flex flex-col flex-grow">
              <h4 className="font-bold text-md lg:text-lg text-gray-800 dark:text-gray-100 flex-grow">
                {product.name}
              </h4>
            </div>
          </NavLink>

          {/* Precio y botón */}
          <div className="px-4 pb-4 flex items-center justify-between mt-auto">
            <p className="text-gray-700 dark:text-subtle-dark font-bold text-sm lg:text-lg mt-1 truncate max-w-[100px]">
              ${product.price.toLocaleString()}
            </p>
            <button className="font-bold hover:scale-105 cursor-pointer bg-primary p-2 rounded-full text-white hover:bg-primary/90 transition-all shrink-0">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

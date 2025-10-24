import React from "react";
import ProductsItemList from "../../../shared/utils/ProductsItemList.jsx";
import { NavLink } from "react-router-dom";
function ProductosExpertos() {
  const products = ProductsItemList
  const items = products.slice(products.length - 4, products.length)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1  px-8 sm:px-0 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <NavLink 
          to={`product/${item.id}`}
          >
          <div
            key={item.name}
            className="group overflow-hidden rounded-lg bg-surface-light shadow-sm transition-shadow hover:shadow-md dark:bg-surface-dark"
          >
            <img
              alt={item.name}
              className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105 "
              src={item.image}
            />
            <div className="px-4 py-6">
              <h3 className="font-bold">{item.name}</h3>
              <p className="mt-1 text-sm text-subtle-light dark:text-subtle-dark">
                {item.shortDesc}
              </p>
            </div>
           
          </div>
        </NavLink>
        ))}
      </div>
    </div>
  );
}
export default ProductosExpertos;
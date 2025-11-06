import React from "react";
import ProductsItemList from "../../../shared/utils/ProductsItemList"
import { NavLink } from "react-router-dom";
const newProducts = ProductsItemList.slice(-12).toReversed();

const NewCards = () => {
  return newProducts.map((product) => (
      <NavLink
        key={product.id}
        to={`/product/${product.id}`}
        className="group block border border-border-light dark:border-border-dark rounded-xl overflow-hidden bg-card-light dark:bg-card-dark shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="relative overflow-hidden rounded-lg">
          <img
            alt={product.name}
            className="h-56 w-full object-cover"
            src={product.image}
          />
          <div className="absolute top-3 left-3 rounded-full bg-primary/80 dark:bg-primary px-3 py-1 text-md font-medium text-content-light dark:text-content-dark transition-colors">
            Nuevo
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-foreground-light dark:text-foreground-dark">
            {product.name}
          </h3>
          <p className="text-subtle-light dark:text-subtle-dark font-bold">${product.price.toFixed(2)}</p>
        </div>
      </NavLink>
  ));
};

export default NewCards;
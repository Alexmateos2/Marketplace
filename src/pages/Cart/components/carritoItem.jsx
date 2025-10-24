import React from "react";
import { useCart } from "../../../shared/hooks/CartContext";
import { NavLink } from "react-router-dom";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart, updateQuantity } = useCart();

  if (!item) return null; // Evita error si item no está definido

  const handleIncrease = () => {
    addToCart(item);
  };

  const handleDecrease = () => {
    if (item.quantity === 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex items-center flex-col xxs:flex-row xxs:gap-2  gap-6 space-x-4 p-4 border-b border-gray-200">
      {item.image && (
        <NavLink to={`/product/${item.id}`}>
          <img
            src={item.image}
            alt={item.name}
            className="w-1/2 h-1/2 mx-auto xxs:w-30 xxs:h-30 object-cover rounded"
          />
        </NavLink>
      )}
      <div className="flex-1">
        <NavLink to={`/product/${item.id}`}>
          <h3 className=" font-semibold ">{item.name}</h3>
        </NavLink>
        <p className="text-sm flex mt-1 xxs:block justify-center text-content-light dark:text-subtle-dark">
          ${item.price} x {item.quantity}
        </p>
        <div className="flex items-center justify-center xxs:justify-start space-x-2 mt-4">
          <button
            onClick={handleDecrease}
            className="w-6 h-6 ml-3 flex items-center justify-center border dark:border-border-dark dark:bg-surface-dark rounded-full hover:bg-gray-200"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={handleIncrease}
            className="w-6 h-6  flex items-center justify-center border dark:border-border-dark dark:bg-surface-dark rounded-full hover:bg-gray-200"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="text-red-500  hover:text-red-700   font-bold"
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;

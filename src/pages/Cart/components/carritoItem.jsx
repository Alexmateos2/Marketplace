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
    <div
    className="flex items-center space-x-4 p-4 border-b border-gray-200">
      {item.image && (
        <NavLink
        to={`/product/${item.id}`}
        >
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        </NavLink>
      )}
      <div className="flex-1">
         <NavLink
        to={`/product/${item.id}`}
        >
        <h3 className="font-semibold">{item.name}</h3>
        </NavLink>
        <p className="text-sm text-gray-600">${item.price} x {item.quantity}</p>
        <div className="flex items-center space-x-2 mt-4">
          <button
            onClick={handleDecrease}
            className="px-2 py-1 border font-medium  dark:border-border-dark dark:bg-surface-dark rounded hover:bg-gray-200"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={handleIncrease}
            className="px-2 py-1 border font-medium dark:border-border-dark dark:bg-surface-dark  rounded hover:bg-gray-200"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;

import React, { useState, useEffect, useRef } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const toastTimeoutsRef = useRef(new Map());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        if (existing.quantity >= 10) {
          // Si ya hay un toast pendiente para este producto, no mostrar otro
          if (!toastTimeoutsRef.current.has(product.id)) {
            toast.error(`Cantidad máxima alcanzada para ${existing.name} (10)`);

            // Crear timeout de 2 segundos para evitar toasts duplicados
            const timeout = setTimeout(() => {
              toastTimeoutsRef.current.delete(product.id);
            }, 2000);

            toastTimeoutsRef.current.set(product.id, timeout);
          }
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Elimina producto por id
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Actualiza cantidad, elimina si es menor que 1
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Limpia el carrito
  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

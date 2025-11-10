import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../../shared/hooks/CartContext.jsx";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

const Products = ({ loading, error, currentProducts }) => {
  const { cart, addToCart } = useCart();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-600 dark:text-red-400 text-lg">Error: {error}</p>
      </div>
    );
  }

  if (currentProducts.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          No hay productos disponibles
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 font-display mx-auto mt-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
      {currentProducts.map((product) => {
        const productInCart = cart.find(
          (item) => item.id === product.id_producto
        );

        const handleAddToCart = () => {
          addToCart({
            id: product.id_producto,
            name: product.nombre,
            price: product.precio,
            image: product.imagen,
            quantity: 1,
          });
        };

        return (
          <div
            key={product.id_producto}
            className="h-full flex flex-col bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <NavLink to={`/product/${product.id_producto}`} className="flex flex-col flex-grow">
              <AdvancedImage
                cldImg={cld
                  .image(product.imagen)
                  .resize(fill().width(400).height(400).gravity("auto"))
                  .quality("auto")
                  .format("auto")}
                alt={product.nombre}
                fetchPriority="high"
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300 border-b border-border-light dark:border-border-dark rounded"
                loading="lazy"
              />
              <div className="px-4 py-5 flex flex-col flex-grow">
                <h4 className="font-bold text-md lg:text-lg text-gray-800 dark:text-gray-100 text-center sm:text-start flex-grow">
                  {product.nombre}
                </h4>
              </div>
            </NavLink>

            <div className="px-4 pb-4 flex flex-col sm:flex-row items-center justify-between gap-2 mt-auto relative">
              <p className="text-gray-700 dark:text-subtle-dark font-bold text-sm lg:text-lg mt-1 truncate">
                ${product.precio.toLocaleString("es-ES", { minimumFractionDigits: 2 })}
              </p>
              <div className="relative">
                <button
                  onClick={handleAddToCart}
                  className="bg-primary text-white rounded-full px-4 py-2 text-xs sm:text-md w-full sm:w-auto hover:bg-primary/90 transition-all font-bold cursor-pointer hover:scale-105"
                >
                  Add to cart
                </button>
                {productInCart && (
                  <span className="absolute -bottom-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {productInCart.quantity > 9 ? "9+" : productInCart.quantity}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

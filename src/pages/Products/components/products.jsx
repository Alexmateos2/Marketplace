import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../../shared/hooks/CartContext.jsx";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage, placeholder } from "@cloudinary/react";

const SkeletonLoader = () => (
  <div className="h-full flex flex-col bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-md animate-pulse">
    {/* Imagen skeleton */}
    <div className="w-full aspect-square bg-gray-300 dark:bg-gray-600" />
    
    {/* Contenido skeleton */}
    <div className="px-4 py-5 flex flex-col flex-grow gap-3">
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
      <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
    </div>

    {/* Footer skeleton */}
    <div className="px-4 pb-4 flex items-center justify-between gap-2 mt-auto">
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-20" />
      <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded-full w-24" />
    </div>
  </div>
);

const Products = ({ loading, currentProducts }) => {
  const { cart, addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id_producto,
      name: product.nombre,
      price: product.precio,
      image: product.imagen,
      quantity: 1,
    });
  };

  if (currentProducts.length === 0 && !loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          No hay productos disponibles
        </p>
      </div>
    );
  }

  // Mostrar skeletons mientras carga o productos reales
  const displayProducts = loading
    ? Array(8).fill(null) 
    : currentProducts;

  return (
    <div className="grid grid-cols-2 gap-6 font-display mx-auto mt-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
      {displayProducts.map((product, idx) => {
        // Si está cargando, muestra skeleton
        if (loading) {
          return <SkeletonLoader key={`skeleton-${idx}`} />;
        }

        const productInCart = cart.find(
          (item) => item.id === product.id_producto
        );

        return (
          <div
            key={product.id_producto}
            className="h-full flex flex-col bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <NavLink
              to={`/product/${product.id_producto}`}
              className="flex flex-col flex-grow"
            >
              <AdvancedImage
                cldImg={cld
                  .image(product.imagen)
                  .quality("auto")
                  .format("auto")
                  .resize(fill().width(512).height(512).gravity("auto"))}
                plugins={[placeholder({ mode: "blur" })]}
                alt={product.nombre}
                fetchPriority={idx <= 8 ? "high" : "auto"}
                loading={idx <= 8 ? "eager" : "lazy"}
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300 border-b border-border-light dark:border-border-dark rounded"
              />
              <div className="px-4 py-5 flex flex-col flex-grow">
                <h4 className="font-bold text-md lg:text-lg text-gray-800 dark:text-gray-100 text-center sm:text-start flex-grow">
                  {product.nombre}
                </h4>
              </div>
            </NavLink>

            <div className="px-4 pb-4 flex flex-col sm:flex-row items-center justify-between gap-2 mt-auto relative">
              <p className="text-gray-700 dark:text-subtle-dark font-bold text-sm lg:text-lg mt-1 truncate">
                $
                {product.precio.toLocaleString("es-ES", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <div className="relative">
                <button
                  onClick={() => handleAddToCart(product)}
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
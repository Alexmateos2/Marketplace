import { React, useMemo } from "react";
import { NavLink } from "react-router-dom";
import ProductsItemList from "../../../shared/utils/ProductsItemList.jsx";
import { useCart } from "../../../shared/hooks/CartContext.jsx";

const Products = ({ category, search, currentPage, itemsPerPage, filters }) => {
  const products = ProductsItemList.toReversed();
  const { cart, addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filtrar por categoría
    if (category) {
      result = result.filter((p) => p.category === category);
    }

    // Filtrar por búsqueda
    if (search) {
      const query = search.toLowerCase().trim();
      result = result.filter((p) => p.name.toLowerCase().includes(query));
    }

    // Filtrar por precio
    if (filters?.price) {
      if (filters.price === "0-100")
        result = result.filter((p) => p.price <= 100);
      else if (filters.price === "100-500")
        result = result.filter((p) => p.price > 100 && p.price <= 500);
      else if (filters.price === "500+")
        result = result.filter((p) => p.price > 500);
    }

    // Ordenar
    if (filters?.sortBy) {
      if (filters.sortBy === "low-high")
        result.sort((a, b) => a.price - b.price);
      else if (filters.sortBy === "high-low")
        result.sort((a, b) => b.price - a.price);
      else if (filters.sortBy === "newest") result.sort((a, b) => b.id - a.id);
      else if (filters.sortBy === "oldest") result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [products, category, search, filters]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="grid grid-cols-2 gap-6 font-display mx-auto mt-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
      {currentProducts.map((product) => {
        const productInCart = cart.find((item) => item.id === product.id);

        const handleAddToCart = () => {
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
          });
        };

        return (
          <div
            key={product.id}
            className="h-full flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <NavLink
              to={`/product/${product.id}`}
              className="flex flex-col flex-grow"
            >
              <img
                src={product.image || "../unnamed(6).png"}
                alt={product.name}
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="px-4 py-5 flex flex-col flex-grow">
                <h4 className="font-bold text-md lg:text-lg text-gray-800 dark:text-gray-100 text-center sm:text-start flex-grow">
                  {product.name}
                </h4>
              </div>
            </NavLink>
            <div className="px-4 pb-4 flex flex-col sm:flex-row items-center justify-between gap-2 mt-auto relative">
              <p className="text-gray-700 dark:text-subtle-dark font-bold text-sm lg:text-lg mt-1 truncate">
                $
                {product.price.toLocaleString("es-ES", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <div className="relative">
                <button
                  onClick={handleAddToCart}
                  className="bg-primary text-white rounded-full px-4 py-2 text-xs sm:text-md w-full sm:w-auto hover:bg-primary/90 transition-all font-bold cursor-pointer hover:scale-105"
                  style={{ minWidth: 0 }}
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

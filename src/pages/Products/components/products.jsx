import {React }from "react";
import { NavLink } from "react-router-dom";
import ProductsItemList from "../../../shared/utils/ProductsItemList.jsx";
import { useCart } from "../../../shared/hooks/CartContext.jsx";

const Products = ({ category,search, currentPage, itemsPerPage }) => {
  const products = ProductsItemList;
  const { cart, addToCart } = useCart();
const filteredProducts = products.filter((product) => {
  const matchesCategory = category ? product.category === category : true;
  const matchesSearch = search
    ? product.name.toLowerCase().includes(search.toLowerCase())
    : true;
  return matchesCategory && matchesSearch;
});


  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="grid grid-cols-2 gap-6 font-display mx-auto mt-4
      sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
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
            className="h-full flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <NavLink to={`/product/${product.id}`} className="flex flex-col flex-grow">
              <img
                className="w-full aspect-square object-cover transition-transform duration-300 hover:scale-105"
                src={product.image ? product.image : "../unnamed(6).png"}
                alt={product.name}
                loading="lazy"
              />
              <div className="px-4 py-5 flex flex-col flex-grow">
                <h4 className="font-bold text-center sm:text-start text-md lg:text-lg text-gray-800 dark:text-gray-100 flex-grow">
                  {product.name}
                </h4>
              </div>
            </NavLink>
           <div className="px-4 pb-4 flex flex-col sm:flex-row items-center justify-between gap-2 mt-auto relative">
  <p className="text-gray-700 dark:text-subtle-dark font-bold text-sm lg:text-lg mt-1 truncate">
    ${product.price.toLocaleString("es-ES", { minimumFractionDigits: 2 })}
  </p>
  <div className="relative">
    <button
      onClick={handleAddToCart}
      className="font-bold hover:scale-105 text-xs  sm:text-md cursor-pointer bg-primary px-4 py-2 rounded-full text-white hover:bg-primary/90 transition-all text-center w-full sm:w-auto"
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

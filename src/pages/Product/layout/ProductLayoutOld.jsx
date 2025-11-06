import React from "react";
import Navbar from "../../../shared/navbar/navbar.jsx";
import Footer from "../../../shared/utils/Footer.jsx";
import ProductsItemList from "../../../shared/utils/ProductsItemList.jsx";
import { NavLink, useParams } from "react-router-dom";
import { useCart } from "../../../shared/hooks/CartContext.jsx";
 import { Navigate } from "react-router-dom";
const products = ProductsItemList;

const ProductPage = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart();
 

  const product = products.find((p) => String(p.id) === id);

  if (!product) return <Navigate to="/noProduct" replace />;

  // Busca el producto en el carrito
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
    <div className="flex flex-col min-h-screen dark:bg-background-dark dark:text-content-dark bg-background-light text-content-light font-display transition-colors">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-40 py-8">
        <div className="mx-auto max-w-5xl">
          {/* Navegación breadcrumb */}
          <div className="mb-6">
            <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <NavLink to="/products" className="hover:text-primary">
                Tech
              </NavLink>
              <span className="mx-2">/</span>
              <NavLink
                to={`/products/${product.category}`}
                className="text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                {product.category}
              </NavLink>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Producto */}
            <div className="flex flex-col order-1 lg:order-2">
              <div className="rounded-xl px-6 mb-8 lg:mb-0 ">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 ">
                  {product.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {product.desc}
                </p>
                <div className="flex items-baseline gap-2 mb-6 ">
                  <span
                    className="text-4xl font-black text-gray-900 dark:text-white md:ml-0 ml-3"
                    content="299"
                    itemProp="price"
                  >
                    ${product.price}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="cursor-pointer sm:w-full md:w-2/3 lg:w-full flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all"
                  >
                    Add to Cart
                  </button>
                  {/* Cambia el botón según si el producto está en carrito */}
                  <div className="min-h-[28px] ">
                    <span
                      className={`text-xl px-2 font-semibold transition-opacity duration-300 ${
                        productInCart ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Quantity: {productInCart?.quantity ?? ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="flex flex-col max-h-[350px] order-2 lg:order-1">
              <div className="w-full max-w-[600px] mx-auto relative overflow-hidden rounded-xl aspect-[4/3]">
                <img
                  src={product.image}
                  alt="Producto"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Especificaciones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Specifications
              </h2>
              <div className="divide-y divide-subtle-light/60 dark:divide-border-black border-t border-b border-subtle-light/60 dark:border-border-dark p-6">
                <div className="py-4 grid grid-cols-3 gap-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Connectivity
                  </p>
                  <p className="text-sm col-span-2 text-gray-800 dark:text-gray-200">
                    Bluetooth 5.0
                  </p>
                </div>
                <div className="py-4 grid grid-cols-3 gap-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Battery Life
                  </p>
                  <p className="text-sm col-span-2 text-gray-800 dark:text-gray-200">
                    Up to 30 hours
                  </p>
                </div>
                <div className="py-4 grid grid-cols-3 gap-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Noise Cancellation
                  </p>
                  <p className="text-sm col-span-2 text-gray-800 dark:text-gray-200">
                    Active Noise Cancellation
                  </p>
                </div>
                <div className="py-4 grid grid-cols-3 gap-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Weight
                  </p>
                  <p className="text-sm col-span-2 text-gray-800 dark:text-gray-200">
                    250g
                  </p>
                </div>
                <div className="py-4 grid grid-cols-3 gap-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Color
                  </p>
                  <p className="text-sm col-span-2 text-gray-800 dark:text-gray-200">
                    Midnight Black
                  </p>
                </div>
              </div>
            </div>

            {/* Review */}
            <div className="flex flex-col">
              <div className="bg-background-light dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Expert Review
                </h2>
                <div className="flex items-start gap-4">
                  <img
                    alt="Ethan Carter"
                    className="w-12 h-12 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnPDzJcMZziYykcoTL8J0llTXjQhuVgoFS5kaRslcUxTveESdKSoIeOWOZkXuY0Tz-MTgebtvZ7QCNLiHPFUq9GtchxXFaj9vudR_T10GJdBqrkYLFBjrFk6o9RZr0ewMDdQuOhT3-Ycr7AHSQs5sEa8HO_1FkaD9bKZO_S82ZQQdeNdwmD6exVcr4YhNUOyVKTc8WRSo_3ezwYk3iE4znU53VV29a2ikgoVrbKeK6Vwe1ShJCMb5nbKClDiQMGADJGhvG8QtlA8s"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          Ethan Carter
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Audio Specialist
                        </p>
                      </div>
                      <div className="text-subtle-light dark:text-subtle-dark text-lg font-bold">
                        8/10
                      </div>
                    </div>
                    <blockquote className="text-base text-gray-600 dark:text-gray-300 italic">
                      "These headphones are a game-changer! The sound quality is
                      superb, with rich bass and clear highs. The
                      noise-canceling feature works wonders, and they're
                      incredibly comfortable to wear for extended periods. A
                      top-tier choice for any audiophile."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;

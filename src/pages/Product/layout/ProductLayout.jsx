import React, { useEffect, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer.jsx";
import ProductsItemList from "../../../shared/utils/ProductsItemList.jsx";
import { NavLink, useParams, Navigate } from "react-router-dom";
import { useCart } from "../../../shared/hooks/CartContext.jsx";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";

const ProductPages = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  const products = ProductsItemList;
  const localProduct = products.find((p) => String(p.id) === id);

  // 🔹 Cargar producto desde backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/productos/${id}`);
        if (!res.ok) throw new Error("Producto no encontrado");
        const data = await res.json();
        console.log(data);
        setProducto(data);
      } catch (err) {
        console.error("Error cargando producto:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // 🔹 Si el producto no existe ni en la API ni localmente
  if (!localProduct && !producto && !loading)
    return <Navigate to="/noProduct" replace />;

  const product = producto || localProduct;
  const productInCart = cart.find((item) => item.id === product?.id);

  const handleAddToCart = () => {
    addToCart({
      id: product.id_producto,
      name: product.nombre,
      price: product.precio,
      image: product.imagen,
      quantity: 1,
    });
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 dark:text-gray-300">Loading product...</p>
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen dark:bg-background-dark dark:text-content-dark bg-background-light text-content-light font-display transition-colors">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-40 py-8">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <NavLink to="/products" className="hover:text-primary">
                Tech
              </NavLink>
              <span className="mx-2">/</span>
              <NavLink
                to={`/products/${product.categoria}`}
                className="text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                {product.id_categoria === 1 ? "Audio" : ""}
              </NavLink>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 ">
            {/* Producto */}
            <div className="flex flex-col order-1 lg:order-2">
              <div className="rounded-xl px-6 mb-8 lg:mb-0">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {product.nombre}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {product.desc
                    ? product.desc
                    : " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam repellat consequuntur beatae excepturi labore expedita vitae tempora a eum consectetur molestiae provident ipsa ipsum eius, blanditiis veritatis eligendi qui. Necessitatibus?"}
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black text-gray-900 dark:text-white">
                    ${product.precio}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="cursor-pointer sm:w-full md:w-2/3 lg:w-full flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all"
                  >
                    Add to Cart
                  </button>
                  <div className="min-h-[28px]">
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
            <div className="flex flex-col order-2 lg:order-1">
              <div className="w-full max-w-[400px] mx-auto relative overflow-hidden rounded-xl aspect-square">
                {product?.imagen ? (
                  <AdvancedImage
                    cldImg={cld
                      .image(product.imagen)
                      .resize(fill().width(400).height(400).gravity("auto"))
                      .quality("auto")
                      .format("auto")}
                    alt={product.nombre}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={product.imagen}
                    alt={product.nombre}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Especificaciones + Review Grid 2x2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Especificaciones */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Especificaciones
              </h2>
              <div className="divide-y divide-subtle-light/60 dark:divide-border-black border-t border-b border-subtle-light/60 dark:border-border-dark p-6">
                {product?.especificaciones &&
                product.especificaciones.length > 0 ? (
                  product.especificaciones.map((spec, index) => (
                    <div key={index} className="py-4 grid grid-cols-3 gap-4">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {spec.nombre}
                      </p>
                      <p className="text-sm col-span-2 text-gray-800 dark:text-gray-200">
                        {spec.descripcion}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400 py-4">
                    No hay especificaciones disponibles
                  </p>
                )}
              </div>
            </div>

            {/* Review */}
            <div className="flex flex-col">
              <div className="bg-background-light dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm h-full">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Expert Review
                </h2>
                {product?.resenas && product.resenas.length > 0 ? (
                  <div className="flex items-start gap-4">
                    <img
                      alt="Reviewer"
                      className="w-12 h-12 rounded-full flex-shrink-0"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnPDzJcMZziYykcoTL8J0llTXjQhuVgoFS5kaRslcUxTveESdKSoIeOWOZkXuY0Tz-MTgebtvZ7QCNLiHPFUq9GtchxXFaj9vudR_T10GJdBqrkYLFBjrFk6o9RZr0ewMDdQuOhT3-Ycr7AHSQs5sEa8HO_1FkaD9bKZO_S82ZQQdeNdwmD6exVcr4YhNUOyVKTc8WRSo_3ezwYk3iE4znU53VV29a2ikgoVrbKeK6Vwe1ShJCMb5nbKClDiQMGADJGhvG8QtlA8s"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">
                            {product.resenas[0].autor || "Ethan Carter"}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {product.resenas[0].cargo || "Audio Specialist"}
                          </p>
                        </div>
                        <div className="text-subtle-light dark:text-subtle-dark text-lg font-bold">
                          {product.resenas[0].valoracion}/10
                        </div>
                      </div>
                      <blockquote className="text-base text-gray-600 dark:text-gray-300 italic">
                        "{product.resenas[0].descripcion}"
                      </blockquote>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    No hay reseñas disponibles
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPages;

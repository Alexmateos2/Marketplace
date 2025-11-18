import React, { useEffect, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer.jsx";
import { NavLink, useParams, Navigate } from "react-router-dom";
import { useCart } from "../../../shared/hooks/CartContext.jsx";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { toast } from "react-toastify";
import RelatedProducts from "../components/RelatedProducts.jsx";
const ProductPages = () => {
  const { id } = useParams();
  const { cart, addToCart, updateQuantity } = useCart();
  const rol = JSON.parse(localStorage.getItem("rol")) 
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

 console.log(rol)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/productos/${id}`);
        if (!res.ok) throw new Error("Producto no encontrado");
        const data = await res.json();
       console.log(data)
        setProducto(data);
      } catch (err) {
        toast.error(`Error cargando producto: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  //  Si el producto no existe 
  if ( !producto && !loading)
    return <Navigate to="/noProduct" replace />;

  const product = producto ;
  const productInCart = cart.find(
    (item) => item.id === (product?.id_producto || product?.id)
  );

 const handleAddToCart = () => {
    const currentQuantity = productInCart?.quantity || 0;
    
    if (product.stock > currentQuantity) {
      addToCart({
        id: product.id_producto || product.id,
        name: product.nombre,
        price: product.precio,
        image: product.imagen,
        quantity: 1,
      });
    } else {
      toast.error(`No hay suficiente stock para ${product.nombre}`);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 dark:text-gray-300">Cargando producto...</p>
      </div>
    );

  return (
 
    <div className="flex flex-col min-h-screen  bg-background-light dark:bg-background-dark dark:text-content-dark text-content-light font-display transition-colors">
      {product.activo === 0  && rol !=="admin" ? (
        <div className="px-40">
        <div className=" dark:bg-yellow-600 bg-yellow-100 w-full border-l-4 border-yellow-500 flex flex-col mt-100 mx-auto text-center dark:text-white text-yellow-700 p-4" role="alert">
          <p className="font-bold">Producto Deshabilitado:</p>
          <p>Este producto no está disponible para la venta.</p>
          <NavLink to="/" className="mt-4 w-40 mx-auto inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
            Volver al Inicio
          </NavLink>
        </div>
        </div>
      ) :  
      <>
      
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-40 py-8">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <NavLink to="/products" className="hover:text-primary">
                Tecnología
              </NavLink>
              <span className="mx-2">/</span>
              <NavLink
                to={`/products/${product.categoria}`}
                className="text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                {product.categoria}
              </NavLink>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
            {/* Información del Producto */}
            <div className="flex flex-col order-1 lg:order-2">
              <div className="rounded-xl px-6 mb-8 lg:mb-0">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {product.nombre}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {product.descripcion
                    ? product.descripcion
                    : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam repellat consequuntur beatae excepturi labore expedita vitae tempora a eum consectetur."}
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black text-gray-900 dark:text-white">
                    ${product.precio}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  {product.stock > 0 ? (
                      <>
                      <button
                    onClick={handleAddToCart}
                    className="cursor-pointer sm:w-full md:w-2/3 lg:w-full flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all"
                  >
                    Añadir al carrito
                  </button>
                  <div className="min-h-[48px] flex items-center gap-3 mt-2">
                    {productInCart ? (
                      <div className="flex items-center rounded-lg px-4 py-2 transition-all">
                        <button
                          onClick={() =>
                            updateQuantity(
                              product.id_producto || product.id,
                              productInCart.quantity - 1
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center rounded-md bg-primary text-white text-lg font-bold hover:bg-primary/90 transition-colors"
                        >
                          −
                        </button>

                        <span className="text-lg font-semibold text-subtle-light dark:text-subtle-dark px-4">
                          Cantidad: {productInCart.quantity}
                        </span>
                      </div>
                    ) : (
                      <span className="text-subtle-light dark:text-subtle-dark font-semibold">
                        No añadido al carrito
                      </span>
                    )}
                  </div>
                  </>
                  ):(
                    <span className="text-red-600 font-semibold">Producto agotado</span>
                  )}
                
                </div>
              </div>
            </div>

            {/* Imagen del Producto */}
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
                    fecthPriority="high"
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

          {/* Especificaciones + Reseña */}
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

            {/* Reseña */}
            <div className="flex flex-col h-fit">
              <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm h-fit">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Reseña de Experto
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
                            Especialista en {product.categoria}
                          </p>
                        </div>
                        <div className="text-subtle-light dark:text-subtle-dark text-lg font-bold">
                          {product.resenas[0].valoracion}/10
                        </div>
                      </div>
                      <blockquote className="text-base text-content-light dark:text-content-dark">
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
         <RelatedProducts category={product.id_categoria} id={product.id_producto} />
        </div>
        
      </main>
    
      <Footer />
      </>}
     
    </div>
  );
};

export default ProductPages;

import { useState, useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { toast } from "react-toastify";
import { AdvancedImage, placeholder } from "@cloudinary/react";

const RelatedProducts = ({ category, id }) => {
  const [relatedProductsData, setRelatedProductsData] = useState([]);
  useEffect(() => {
    const fecthRelatedProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/productos/categoria/${category}`
        );
        const data = await response.json();
        const filtered = data.filter(
          (product) => product.id_producto !== id && product.activo === 1
        );
        console.log(id);
        // Mezclar y tomar 3 aleatorios
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        console.log(shuffled);
        setRelatedProductsData(shuffled.slice(0, 3));
      } catch (err) {
        toast.error("Failed to load related products." + err.message);
      }
    };

    fecthRelatedProducts();
  }, [category, id]);
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-content-light dark:text-content-dark mb-6 text-center">
        Productos Relacionados
      </h2>
      <div className={`mt-16 flex flex-wrap justify-center gap-6`}>
        {relatedProductsData.length === 0 ? (
          <p className="text-center text-subtle-light dark:text-subtle-dark w-full">
            No hay productos relacionados.
          </p>
        ) : (
          relatedProductsData.map((product, idx) => (
            <NavLink
              to={`/product/${product.id_producto}`}
              key={idx}
              className="group relative overflow-hidden rounded-xl w-80 " 
            >
              <AdvancedImage
                cldImg={cld
                  .image(product.imagen)
                  .resize(fill().width(512).height(512).gravity("auto"))
                  .quality("auto")
                  .format("auto")}
                plugins={[placeholder({ mode: "blur" })]}
                alt={product.nombre}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-semibold text-base text-white truncate">
                  {product.nombre}
                </h3>
                <div className="opacity-0 max-h-0 group-hover:opacity-100  group-hover:max-h-40 transition-all duration-500 mt-1">
                  <p className="font-bold text-lg text-white">
                    ${product.precio}
                  </p>
                </div>
              </div>
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";
import { toast } from "react-toastify";
const NewCards = () => {
  const [newProductos, setNewProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNewProductos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/productos/nuevos");

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setNewProductos(Array.isArray(data) ? data : []);
      } catch (err) {
        toast.error("Error: " + err.message);

        setNewProductos([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewProductos();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (newProductos.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          No hay productos nuevos
        </p>
      </div>
    );
  }

  return newProductos.map((product) => (
    <div
      key={product.id_producto}
      className="h-full flex flex-col bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-colors"
    >
      <NavLink
        to={`/product/${product.id_producto}`}
        className="flex flex-col flex-grow"
      >
        <div className="relative">
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
          <div className="absolute top-3 left-3 rounded-full bg-primary/80 dark:bg-primary px-3 py-1 text-sm md:text-md font-medium text-content-light dark:text-content-dark">
            Nuevo
          </div>
        </div>
        <div className="px-4 py-3 flex flex-col flex-grow min-h-8">
          <h4 className="font-bold text-sm sm:text-md lg:text-lg text-content-light dark:text-content-dark text-center sm:text-start line-clamp-2">
            {product.nombre}
          </h4>
        </div>
      </NavLink>
      <div className="px-4 pb-4 flex items-start justify-center sm:justify-start mt-auto">
        <p className="text-subtle-light dark:text-subtle-dark font-bold text-sm lg:text-lg">
          ${product.precio}
        </p>
      </div>
    </div>
  ));
};

export default NewCards;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { cld } from "../../../shared/utils/cloudinary.js";

import { AdvancedImage } from "@cloudinary/react";
import { OutlineMode } from "@cloudinary/url-gen/qualifiers";
import { toast } from "react-toastify";

function ProductosExpertos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/productos/mejores");
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setItems(data); 
      } catch (err) {
        toast.error(err.message);
        setItems([]);
      }
    };

    fetchBestProducts();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 px-8 sm:px-0 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <NavLink to={`/product/${item.id_producto}`} key={item.id_producto}>
            <div className="group overflow-hidden rounded-lg bg-surface-light shadow-sm transition-shadow hover:shadow-md dark:bg-surface-dark">
              <AdvancedImage
                cldImg={cld
                  .image(item.imagen)
                
                  .quality("auto")
                  .format("auto")}
                alt={item.nombre}
                fetchPriority="high"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              
              />
              <div className="px-4 py-6 border-t border-border-light dark:border-border-dark">
                <h3 className="font-bold">{item.nombre}</h3>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default ProductosExpertos;

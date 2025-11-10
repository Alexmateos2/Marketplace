import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout.jsx";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

const AdminProductsLayout = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/productos");

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setProductos(data || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching productos:", err);
        setError(err.message);
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(productos);
  return (
    <AdminLayout
      title="Manage Products"
      data={productos}
      columns={[
        { key: "id_producto", label: "ID" },
        {
          key: "nombre",
          label: "Product",
          render: (p) => (
            <div className="flex items-center gap-4 ">
              {p.imagen && (
                <AdvancedImage
                  cldImg={cld
                    .image(p.imagen)
                    .resize(fill().width(50).height(50).gravity("auto"))
                    .quality("auto")
                    .format("auto")}
                  alt={p.nombre}
                  className="w-12 h-12 object-cover rounded-lg border border-border-light"
                  loading="lazy"
                />
              )}
              <span>{p.nombre}</span>
            </div>
          ),
        },
        { key: "precio", label: "Price" },
        { key: "stock", label: "Stock" },
        {
          key: "status",
          label: "Status",
          render: (p) => {
            let bgClass = "";
            let dotClass = "";
            let statusText = "";

            if (p.stock > 10) {
              bgClass = "bg-green-100 text-green-800";
              dotClass = "bg-green-500";
              statusText = "Decent stock";
            } else if (p.stock > 0) {
              bgClass = "bg-yellow-100 text-yellow-800";
              dotClass = "bg-yellow-500";
              statusText = "Low stock";
            } else {
              bgClass = "bg-red-100 text-red-800";
              dotClass = "bg-red-500";
              statusText = "Out of stock";
            }

            return (
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${bgClass}`}
              >
                <span className={`w-2 h-2 rounded-full ${dotClass}`}></span>
                {statusText}
              </span>
            );
          },
        },
      ]}
    />
  );
};

export default AdminProductsLayout;

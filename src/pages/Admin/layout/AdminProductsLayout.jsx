import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout.jsx";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

const AdminProductsLayout = () => {
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const itemsPerPage = 10;

  const fetchProductos = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/productos");

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      const sortedData = (data || []).sort((a, b) => a.id_producto - b.id_producto);

      setProductos(sortedData);
      setFilteredProductos(sortedData);
      setError(null);
    } catch (err) {
      console.error("Error al obtener productos:", err);
      setError(err.message);
      setProductos([]);
      setFilteredProductos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  // 🔹 Ordenar columnas
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...filteredProductos].sort((a, b) => {
      let aVal = a[key] ?? "";
      let bVal = b[key] ?? "";

      // Convertimos "precio" y "stock" a número
      if (key === "precio" || key === "stock") {
        aVal = parseFloat(aVal) || 0;
        bVal = parseFloat(bVal) || 0;
      }

      // Strings
      if (typeof aVal === "string" && typeof bVal === "string") {
        return direction === "asc"
          ? aVal.toLowerCase().localeCompare(bVal.toLowerCase())
          : bVal.toLowerCase().localeCompare(aVal.toLowerCase());
      }

      // Números
      if (typeof aVal === "number" && typeof bVal === "number") {
        return direction === "asc" ? aVal - bVal : bVal - aVal;
      }

      return 0;
    });

    setFilteredProductos(sorted);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productosActuales = filteredProductos.slice(startIndex, endIndex);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p className="text-center mt-8">Cargando productos...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">Error: {error}</p>;

  return (
    <AdminLayout
      title="Administrar Productos"
      data={productosActuales}
      originalData={productos}
      idKey="id_producto"
      onDeleteSuccess={fetchProductos}
      onSort={handleSort}
      sortConfig={sortConfig}
      columns={[
        { key: "id_producto", label: "ID", sortable: true },
        {
          key: "nombre",
          label: "Producto",
          sortable: true,
          render: (p) => (
            <div className="flex items-center lg:justify-start justify-center gap-2">
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
        { key: "precio", label: "Precio", sortable: true },
        { key: "stock", label: "Stock", sortable: true },
        {
          key: "status",
          label: "Estado",
          render: (p) => {
            let bgClass = "";
            let dotClass = "";
            let statusText = "";

            if (p.stock > 10) {
              bgClass =
                "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
              dotClass = "bg-green-500";
              statusText = "Stock suficiente";
            } else if (p.stock > 0) {
              bgClass =
                "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
              dotClass = "bg-yellow-500";
              statusText = "Stock bajo";
            } else {
              bgClass =
                "bg-red-100 text-red-800 dark:bg-red-600/30 dark:text-red-400";
              dotClass = "bg-red-500";
              statusText = "Agotado";
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
      pagination={{
        currentPage,
        itemsPerPage,
        onPageChange: handlePageChange,
        totalItems: filteredProductos.length,
      }}
      onFilterChange={(results) => {
        setFilteredProductos(results);
        setCurrentPage(1);
      }}
    />
  );
};

export default AdminProductsLayout;

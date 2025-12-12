import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout.jsx";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const AdminProductsLayout = () => {
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const itemsPerPage = 10;
  const getStatusValue = (p) => {
    if (p.activo === 0) return 0;
    if (p.stock === 0) return 1;
    if (p.stock <= 10) return 2;
    return 3;
  };
  const fetchProductos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_KEY}productos`);

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();

      const sortedData = (data || []).sort(
        (a, b) => a.id_producto - b.id_producto
      );

      setProductos(sortedData);
      setFilteredProductos(sortedData);
    } catch (err) {
      toast.error(err.message);

      setProductos([]);
      setFilteredProductos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...filteredProductos].sort((a, b) => {
      let aVal, bVal;

      if (key === "status") {
        aVal = getStatusValue(a);
        bVal = getStatusValue(b);
      } else {
        aVal = a[key] ?? "";
        bVal = b[key] ?? "";

        if (key === "precio" || key === "stock") {
          aVal = parseFloat(aVal) || 0;
          bVal = parseFloat(bVal) || 0;
        }
      }

      if (typeof aVal === "string" && typeof bVal === "string") {
        return direction === "asc"
          ? aVal.toLowerCase().localeCompare(bVal.toLowerCase())
          : bVal.toLowerCase().localeCompare(aVal.toLowerCase());
      }

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
            <NavLink
              to={`/product/${p.id_producto}`}
              className="flex items-center w-full lg:justify-start justify-center gap-2"
            >
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
            </NavLink>
          ),
        },
        { key: "precio", label: "Precio", sortable: true },
        {
          key: "stock",
          label: "Stock",
          render: (p) => <span className="lg:ml-4">{p.stock}</span>,
          sortable: true,
        },
        {
          key: "status",
          label: "Estado",
          sortable: true,
          render: (p) => {
            const statusVal = getStatusValue(p); 
            let bgClass = "";
            let dotClass = "";
            let statusText = "";

            if (statusVal === 0) {
              bgClass =
                "bg-gray-100 text-gray-800 dark:bg-gray-600/30 dark:text-gray-400";
              dotClass = "bg-gray-500";
              statusText = "Producto deshabilitado";
            } else if (statusVal === 3) {
              bgClass =
                "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
              dotClass = "bg-green-500";
              statusText = "Stock suficiente";
            } else if (statusVal === 2) {
              bgClass =
                "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
              dotClass = "bg-yellow-500";
              statusText = "Stock bajo";
            } else if (statusVal === 1) {
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

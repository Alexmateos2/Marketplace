import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout.jsx";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

const AdminOrdersLayout = () => {
  const [pedidos, setPedidos] = useState([]);
  const [filteredPedidos, setFilteredPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const itemsPerPage = 10;

  const fetchPedidos = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/pedidos");
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      const sortedData = (data || []).sort((a, b) => a.id_pedido - b.id_pedido);

      setPedidos(sortedData);
      setFilteredPedidos(sortedData);
      setError(null);
    } catch (err) {
      console.error("Error al obtener los pedidos:", err);
      setError(err.message);
      setPedidos([]);
      setFilteredPedidos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  // 🔹 Búsqueda
  const handleFilterChange = (results) => {
    setFilteredPedidos(results);
    setCurrentPage(1);
  };

  // Ordenamiento
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...filteredPedidos].sort((a, b) => {
      let aVal = a[key] ?? "";
      let bVal = b[key] ?? "";

      if (key === "total") {
        aVal = parseFloat(aVal) || 0;
        bVal = parseFloat(bVal) || 0;
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

    setFilteredPedidos(sorted);
  };

  // Paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pedidosActuales = filteredPedidos.slice(startIndex, endIndex);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p className="text-center mt-8">Cargando pedidos...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">Error: {error}</p>;

  return (
    <AdminLayout
      title="Administrar Pedidos"
      data={pedidosActuales}
      originalData={pedidos}
      onFilterChange={handleFilterChange}
      idKey="id_pedido"
      onDeleteSuccess={fetchPedidos}
      onSort={handleSort}
      sortConfig={sortConfig}
      columns={[
        {
          key: "id_pedido",
          label: "ID",
          sortable: true,
          render: (p) => <span>#TEK00{p.id_pedido}</span>,
        },
        {
          key: "nombre",
          label: "Nombre",
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
                  alt={p.nombre || "Invitado"}
                  className="w-12 h-12 object-cover rounded-lg border border-border-light"
                  loading="lazy"
                />
              )}
              <span>{p.nombre || "Invitado"}</span>
            </div>
          ),
        },
        { key: "total", label: "Total", sortable: true },
        {
          key: "fecha",
          label: "Fecha",
          sortable: true,
          render: (p) => {
            const fecha = new Date(p.fecha);
            return fecha.toLocaleDateString("es-ES", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });
          },
        },
      ]}
      pagination={{
        currentPage,
        itemsPerPage,
        onPageChange: handlePageChange,
        totalItems: filteredPedidos.length,
      }}
    />
  );
};

export default AdminOrdersLayout;

import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout.jsx";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

const AdminOrdersLayout = () => {
  const [pedidos, setpedidos] = useState([]);
  const [filteredpedidos, setFilteredpedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchpedidos = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/pedidos");
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      const sortedData = (data || []).sort(
        (a, b) => a.id_producto - b.id_producto
      );

      setpedidos(sortedData);
      setFilteredpedidos(sortedData); // 👈 Inicialmente todos
      setError(null);
    } catch (err) {
      console.error("Error fetching pedidos:", err);
      setError(err.message);
      setpedidos([]);
      setFilteredpedidos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchpedidos();
  }, []);

  const handleFilterChange = (filteredData) => {
    setFilteredpedidos(filteredData);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pedidosActuales = filteredpedidos.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p className="text-center mt-8">Cargando pedidos...</p>;
  if (error)
    return <p className="text-center mt-8 text-red-500">Error: {error}</p>;

  return (
    <AdminLayout
      title="Manage Products"
      data={pedidosActuales}
      originalData={pedidos}
      onFilterChange={handleFilterChange}
      idKey="id_producto"
      onDeleteSuccess={fetchpedidos}
      columns={[
        { key: "id_pedido", label: "ID" },
        {
          key: "nombre_usuario",

          label: "Nombre",
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
              <span>{p.nombre_usuario || "Invitado"}</span>
            </div>
          ),
        },
        { key: "total", label: "Total" },
        {
          key: "fecha",
          label: "Fecha",
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
        totalItems: filteredpedidos.length,
      }}
    />
  );
};

export default AdminOrdersLayout;

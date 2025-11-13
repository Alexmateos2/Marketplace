import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminUsersLayout = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); // 🔍 estado para búsqueda
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/usuarios");

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data || []);
      setFilteredUsers(data || []); // 👈 inicializar también los filtrados
      setError(null);
    } catch (err) {
      console.error("Error al obtener usuarios:", err);
      setError(err.message);
      setUsers([]);
      setFilteredUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Calcular usuarios para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usuariosActuales = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p className="text-center mt-8">Cargando usuarios...</p>;
  if (error)
    return <p className="text-center mt-8 text-red-500">Error: {error}</p>;

  return (
    <AdminLayout
      title="Administrar Usuarios"
      data={usuariosActuales}
      originalData={users} // 🔹 por si necesitas la lista completa en la búsqueda
      idKey="id_usuario"
      onDeleteSuccess={fetchUsers}
      columns={[
        { key: "nombre", label: "Nombre" },
        { key: "email", label: "Correo electrónico" },
        { key: "rol", label: "Rol" },
      ]}
      pagination={{
        currentPage,
        itemsPerPage,
        onPageChange: handlePageChange,
        totalItems: filteredUsers.length,
      }}
      onFilterChange={(results) => {
        setFilteredUsers(results);
        setCurrentPage(1);
      }}
    />
  );
};

export default AdminUsersLayout;

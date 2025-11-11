import React, { useEffect, useState } from 'react';
import AdminLayout from '../components/AdminLayout';

const AdminUsersLayout = () => {
  const [users, setUsers] = useState([]);
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
      setError(null);
    } catch (err) {
      console.error("Error fetching usuarios:", err);
      setError(err.message);
      setUsers([]);
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
  const usuariosActuales = users.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p className="text-center mt-8">Cargando usuarios...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">Error: {error}</p>;

  return (
    <AdminLayout
      title="Manage Users"
      data={usuariosActuales}
      idKey="id_usuario"
      onDeleteSuccess={fetchUsers} // ✅ callback para refrescar la lista
      columns={[
        { key: "nombre", label: "Name" },
        { key: "email", label: "Email" },
        { key: "rol", label: "Role" },
      ]}
      pagination={{
        currentPage,
        itemsPerPage,
        onPageChange: handlePageChange,
        totalItems: users.length,
      }}
    />
  );
};

export default AdminUsersLayout;

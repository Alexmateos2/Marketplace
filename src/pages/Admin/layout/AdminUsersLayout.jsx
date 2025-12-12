import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { toast } from "react-toastify";
const AdminUsersLayout = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_KEY}usuarios`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data || []);
      setFilteredUsers(data || []);
    } catch (err) {
      toast.error(err.message);

      setUsers([]);
      setFilteredUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
 const handleSort = (key) => {
  let direction = "asc";
  if (sortConfig.key === key && sortConfig.direction === "asc") {
    direction = "desc";
  }
  setSortConfig({ key, direction });

  const sorted = [...users].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];


    if (typeof aVal === "string" && typeof bVal === "string") {
      console.log("Sorting strings:", aVal, bVal);
      return direction === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

   

    return 0;
  });

  setFilteredUsers(sorted);
};

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usuariosActuales = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p className="text-center mt-8">Cargando usuarios...</p>;

  return (
    <AdminLayout
      title="Administrar Usuarios"
      data={usuariosActuales}
      originalData={users}
      onSort={handleSort}
      sortConfig={sortConfig}
      idKey="id_usuario"
      onDeleteSuccess={fetchUsers}
      columns={[
        { key: "nombre", label: "Nombre",sortable: true },
        { key: "email", label: "Correo electrónico",sortable: true },
        { key: "rol", label: "Rol", sortable: true },
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

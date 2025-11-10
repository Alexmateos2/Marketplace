import { Users } from 'lucide-react';
import React from 'react'
import { useEffect,useState } from 'react';
import AdminLayout from '../components/AdminLayout';
const AdminUsersLayout = () => {
      const [users, setUsers] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      useEffect(() => {
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
            console.error("Error fetching productos:", err);
            setError(err.message);
            setUsers([]);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUsers();
      }, []);
    
      if (loading) return <p>Cargando productos...</p>;
      if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <AdminLayout
  title="Manage Users"
  data={users}
  columns={[
    { key: "nombre", label: "Name" },
    { key: "email", label: "Email" },
    { key: "rol", label: "Role" },
  ]}
/>

    </div>
  )
}

export default AdminUsersLayout

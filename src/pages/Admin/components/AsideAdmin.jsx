import React from "react";
import {
  LayoutDashboard,
  Users,
  Package,
  User,
  LogOut,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

//Nav lateral administrador

const AsideAdmin = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-80 py-6 px-6 bg-surface-light dark:bg-background-dark/50 hidden lg:flex flex-col justify-between border-r border-border-light dark:border-border-dark  z-30 ">
      <div>
        <div className="flex items-center gap-3 mb-10"></div>
        <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-content-light-600 dark:text-content-dark"
              }`
            }
          >
            <LayoutDashboard size={20} className="flex-shrink-0" />
            <span className="text-sm font-medium">Panel</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-content-light-600 dark:text-content-dark"
              }`
            }
            to="/admin/products"
          >
            <Package size={20} className="flex-shrink-0" />
            <span className="text-sm font-medium">Productos</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-content-light-600 dark:text-content-dark"
              }`
            }
            to="/admin/users"
          >
            <Users size={20} className="flex-shrink-0" />
            <span className="text-sm font-medium">Usuarios</span>
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-content-light-600 dark:text-content-dark"
              }`
            }
          >
            <FileText size={20} className="flex-shrink-0" />
            <span className="text-sm font-medium">Pedidos</span>
          </NavLink>

         
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-content-light-600 dark:text-content-dark"
              }`
            }
          >
            <User size={20} className="flex-shrink-0" />
            <span className="text-sm font-medium">Información personal</span>
          </NavLink>

        </nav>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("usuario");
          localStorage.removeItem("rol");
          localStorage.removeItem("avatar");
          navigate("/login");
        }}
        className="mt-auto flex items-center justify-center w-full h-10 px-4 rounded-lg bg-slate-100 dark:bg-background-dark text-content-light-600 dark:text-content-dark text-sm font-medium cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
      >
        <LogOut size={18} className="mr-2 flex-shrink-0" />
        Cerrar sesión
      </button>
    </aside>
  );
};

export default AsideAdmin;

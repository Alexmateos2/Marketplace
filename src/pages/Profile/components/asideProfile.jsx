import React from "react";
import { User, FileText, LogOut, UserStar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AVATARS from "../../../shared/utils/avatars.js";
const AsideProfile = ({ usuario: propUsuario }) => {
  const usuario = propUsuario || { 
    nombre: "", 
    email: "", 

  };

  const { nombre, email } = usuario;
  const rol = JSON.parse(localStorage.getItem("rol"));
  const navigate = useNavigate();
  const avatar = parseInt(localStorage.getItem("avatar")) || 2;
  const avatarUrl = AVATARS.find((av) => av.value === avatar)?.url;


  return (
    <aside className="w-80 py-6 px-6 bg-surface-light dark:bg-background-dark/50 hidden lg:flex flex-col justify-between border-r border-border-light dark:border-border-dark fixed left-0 top-20 bottom-0 z-30 overflow-y-auto">
      <div>
        <div className="flex items-center gap-3 mb-10">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-12 h-12 flex-shrink-0"
            data-alt="Avatar del usuario"
              style={{
              backgroundImage: `url(${avatarUrl})`,
            }}
          ></div>
          <div className="min-w-0">
            <h1 className="text-base font-bold text-content-light dark:text-content-dark truncate">
              {nombre}
            </h1>
            <p className="text-xs text-content-light-500 dark:text-content-dark-400 truncate">
              {email}
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-content-light-600 dark:text-content-dark"
              }`
            }
            to="/profile"
          >
            <User size={20} className="flex-shrink-0" />
            <span className="text-sm font-medium">Información personal</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-content-light-600 dark:text-content-dark"
              }`
            }
            to="/pedidos/historial"
          >
            <FileText size={20} className="flex-shrink-0" />
            <span className="text-sm font-medium">Historial de pedidos</span>
          </NavLink>

          {rol === "admin" ? (
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800 text-content-light-600 dark:text-content-dark"
                }`
              }
              to="/admin/dashboard"
            >
              <UserStar size={20} className="flex-shrink-0" />
              <span className="text-sm font-medium">Admin</span>
            </NavLink>
          ) : null}
        </nav>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("usuario");
          localStorage.removeItem("rol");
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

export default AsideProfile;

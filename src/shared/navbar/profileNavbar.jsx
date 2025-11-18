import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, User, UserStar, LogIn, LogOut } from "lucide-react";
import AVATARS from "../utils/avatars.js";

const ProfileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(AVATARS[0].url);
  const [user, setUser] = useState(null);
  const [rol, setRol] = useState(null);

  const navigate = useNavigate();

  // Función para actualizar datos del localStorage
  const updateFromStorage = () => {
    const storedUser = JSON.parse(localStorage.getItem("usuario"));
    const storedRol = JSON.parse(localStorage.getItem("rol"));
    const storedAvatar = parseInt(localStorage.getItem("avatar")) || 0;

    setUser(storedUser);
    setRol(storedRol);
    setAvatarUrl(
      AVATARS.find((av) => av.value === storedAvatar)?.url || AVATARS[0].url
    );
  };

  // Cargar al montar y escuchar cambios en localStorage
  useEffect(() => {
    updateFromStorage();

    // Escuchar cambios en localStorage (desde otras pestañas/componentes)
    window.addEventListener("storage", updateFromStorage);

    return () => window.removeEventListener("storage", updateFromStorage);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsOpen(false), 200);
    setCloseTimeout(timeout);
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("rol");
    localStorage.removeItem("avatar");
    updateFromStorage();
    navigate("/login");
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Avatar */}
      <div
        className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src={avatarUrl}
          alt="Avatar del usuario"
          className="object-cover rounded-full w-10 h-10 border-2 border-primary/50"
        />
        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div
          className="absolute top-full -translate-x-12 md:-translate-x-20 mt-4
           w-30 md:w-60 max-w-xs bg-background-light dark:bg-background-dark
          border border-border-light dark:border-border-dark
          rounded-lg shadow-lg overflow-hidden z-50"
        >
          <NavLink
            to={user ? "/profile" : "/login"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-base border-b border-border-light dark:border-border-dark transition-colors 
               ${isActive
                 ? "text-primary bg-primary/10 dark:bg-primary/20"
                 : "text-content-light dark:text-content-dark hover:bg-primary/10 dark:hover:bg-primary/20"}`
            }
            onClick={() => setIsOpen(false)}
          >
            <User size={18} />
            Perfil
          </NavLink>

          {!user ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-base border-b border-border-light dark:border-border-dark transition-colors 
                 ${isActive
                   ? "text-primary bg-primary/10 dark:bg-primary/20"
                   : "text-content-light dark:text-content-dark hover:bg-primary/10 dark:hover:bg-primary/20"}`
              }
              onClick={() => setIsOpen(false)}
            >
              <LogIn size={18} />
              Iniciar Sesión
            </NavLink>
          ) : (
            <div>
              {rol === "admin" && (
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 text-base border-b border-border-light dark:border-border-dark transition-colors 
                     ${isActive
                       ? "text-primary bg-primary/10 dark:bg-primary/20"
                       : "text-content-light dark:text-content-dark hover:bg-primary/10 dark:hover:bg-primary/20"}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <UserStar size={18} />
                  Admin
                </NavLink>
              )}

              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full text-left px-4 py-3 text-base text-content-light dark:text-content-dark 
                hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
              >
                <LogOut size={18} />
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileNavbar;
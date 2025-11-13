import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, User, UserStar, LogIn, LogOut } from "lucide-react";

const ProfileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const user = localStorage.getItem("usuario");
  const rol = JSON.parse(localStorage.getItem("rol"));
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setIsOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("rol");
    navigate("/login");
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsOpen(false), 200);
    setCloseTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Avatar */}
      <div
        className="flex items-center gap-1 cursor-pointer hover:text-primary"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnPDzJcMZziYykcoTL8J0llTXjQhuVgoFS5kaRslcUxTveESdKSoIeOWOZkXuY0Tz-MTgebtvZ7QCNLiHPFUq9GtchxXFaj9vudR_T10GJdBqrkYLFBjrFk6o9RZr0ewMDdQuOhT3-Ycr7AHSQs5sEa8HO_1FkaD9bKZO_S82ZQQdeNdwmD6exVcr4YhNUOyVKTc8WRSo_3ezwYk3iE4znU53VV29a2ikgoVrbKeK6Vwe1ShJCMb5nbKClDiQMGADJGhvG8QtlA8s"
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
           w-30  md:w-60 max-w-xs bg-background-light dark:bg-background-dark 
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

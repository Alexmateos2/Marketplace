import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border-light bg-surface-light dark:border-border-dark dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-subtle-light dark:text-subtle-dark">
          © 2025 Tekia. Todos los derechos reservados.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-subtle-light dark:text-subtle-dark hover:text-primary"
              }`
            }
          >
            Política de privacidad
          </NavLink>
          <NavLink
            to="/terms"
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-subtle-light dark:text-subtle-dark hover:text-primary"
              }`
            }
          >
            Términos de servicio
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
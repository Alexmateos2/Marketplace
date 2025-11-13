import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border-light bg-surface-light dark:border-border-dark dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-subtle-light dark:text-subtle-dark">
          © 2025 Tekia. Todos los derechos reservados.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a
            href="#"
            className="text-sm text-subtle-light dark:text-subtle-dark hover:text-primary transition-colors"
          >
            Política de privacidad
          </a>
          <a
            href="#"
            className="text-sm text-subtle-light dark:text-subtle-dark hover:text-primary transition-colors"
          >
            Términos de servicio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

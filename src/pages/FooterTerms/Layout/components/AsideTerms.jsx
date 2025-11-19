import React from "react";
import { Mail, Info } from "lucide-react";
const AsideTerms = () => {
  return (
    <aside className="w-full lg:w-64 lg:sticky lg:top-32 self-start hidden lg:block">
      <div className="flex flex-col gap-4">
        <h3 className="text-content-light dark:text-content-dark text-base font-semibold leading-normal px-3">
          En esta página
        </h3>

        <div className="flex flex-col gap-1">
          <a
            href="#introduction"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Info className="w-5 h-5 text-content-light dark:text-content-dark" />
            <p className="text-sm font-medium text-content-light dark:text-content-dark">
              Introducción
            </p>
          </a>

          <a
            href="#section1"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <p className="text-sm font-medium text-content-light dark:text-content-dark">
              1. Cuenta y Responsabilidades
            </p>
          </a>

          <a
            href="#section2"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <p className="text-sm font-medium text-content-light dark:text-content-dark">
              2. Uso del Marketplace
            </p>
          </a>

          <a
            href="#section3"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <p className="text-sm font-medium text-content-light dark:text-content-dark">
              3. Propiedad Intelectual
            </p>
          </a>

          <a
            href="#section4"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <p className="text-sm font-medium text-content-light dark:text-content-dark">
              4. Pagos y Transacciones
            </p>
          </a>

          <a
            href="#section5"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <p className="text-sm font-medium text-content-light dark:text-content-dark">
              5. Actividades Prohibidas
            </p>
          </a>

          <a
            href="#section6"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <p className="text-sm font-medium text-content-light dark:text-content-dark">
              6. Limitación de Responsabilidad
            </p>
          </a>

          <a
            href="#section7"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <p className="text-sm font-medium text-content-light dark:text-content-dark">
              7. Terminación del Servicio
            </p>
          </a>

          <a
            href="#section8"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <p className="text-sm font-medium text-content-light dark:text-content-dark">
              8. Ley Aplicable
            </p>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Mail className="w-5 h-5 text-content-light dark:text-content-dark" />
            <p className="text-sm font-medium text-content-light dark:text-content-dark">
              Contacto
            </p>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default AsideTerms;

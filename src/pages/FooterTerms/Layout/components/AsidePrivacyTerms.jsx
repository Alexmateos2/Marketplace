import React from 'react'
import {
  Info,
  Database,
  Search,
  Share2,
  Shield,
  Settings,
  Cookie,
  History,
  Mail,
} from "lucide-react";
const AsidePrivacyTerms = () => {
  return (
       <aside className="w-full lg:w-64 lg:sticky lg:top-32 self-start hidden lg:block">
            <div className="flex flex-col gap-4">
              <h3 className="text-content-light dark:text-content-dark text-base font-semibold leading-normal px-3">
                En esta página
              </h3>
              <div className="flex flex-col gap-1">
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                  href="#introduction"
                >
                  <Info className="text-content-light dark:text-content-dark w-5 h-5" />
                  <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal">
                    Introducción
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                  href="#info-collect"
                >
                  <Database className="text-content-light dark:text-content-dark w-5 h-5" />
                  <p className="text-content-light dark:text-content-dark text-sm  font-medium leading-normal">
                    Información que recopilamos
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                  href="#info-use"
                >
                  <Search className="text-content-light dark:text-content-dark w-5 h-5" />
                  <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal">
                    Cómo usamos tu información
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                  href="#data-sharing"
                >
                  <Share2 className="text-content-light dark:text-content-dark w-5 h-5" />
                  <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal">
                    Compartir datos
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                  href="#data-security"
                >
                  <Shield className="text-content-light dark:text-content-dark w-5 h-5" />
                  <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal">
                    Seguridad de los datos
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                  href="#your-rights"
                >
                  <Settings className="text-content-light dark:text-content-dark w-5 h-5" />
                  <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal">
                    Tus derechos
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                  href="#cookies"
                >
                  <Cookie className="text-content-light dark:text-content-dark w-5 h-5" />
                  <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal">
                    Cookies
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                  href="#policy-changes"
                >
                  <History className="text-content-light dark:text-content-dark w-5 h-5" />
                  <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal">
                    Cambios en la política
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                  href="#contact"
                >
                  <Mail className="text-content-light dark:text-content-dark w-5 h-5" />
                  <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal">
                    Contáctanos
                  </p>
                </a>
              </div>
            </div>
          </aside>
  )
}

export default AsidePrivacyTerms

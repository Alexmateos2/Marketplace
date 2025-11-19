import React from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import { NavLink } from "react-router-dom";

import AsideTerms from "./components/AsideTerms";

const Terms = () => {
  return (
    <div className="dark:bg-background-dark dark:text-white bg-background-light min-h-screen font-display transition-colors">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
  
         <AsideTerms />


          <div className="flex-1 min-w-0 ">
            <div className="prose prose-slate max-w-none dark:text-content-dark">
        
              <div className="flex flex-wrap gap-2 pb-6">
                <NavLink
                  to={"/"}
                  className="text-text-light-body hover:text-primary text-sm font-medium leading-normal"
                >
                  Inicio
                </NavLink>
                <span className="text-text-light-body/60 text-sm font-medium leading-normal">
                  /
                </span>
                <span className="text-text-light-heading text-sm font-medium leading-normal text-primary dark:text-primary/90">
                  Términos del Servicio
                </span>
              </div>

              <div className="border-b border-gray-300 dark:border-border-dark pb-6 mb-8">
                <h1 className="text-3xl font-bold" id="page-title">
                  Términos del Servicio
                </h1>
                <p className="text-content-light dark:text-content-dark text-sm font-normal leading-normal mt-2">
                  Última actualización: 19 de noviembre de 2025
                </p>
              </div>

            <div className="bg-white dark:bg-surface-dark px-8 py-6 rounded-lg shadow-sm">
              <section className="space-y-4 scroll-mt-24" id="introduction">
                <h2 className="font-bold text-lg">Introducción</h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Bienvenido a Tekia. Estos Términos del Servicio regulan el uso
                  de nuestro marketplace y servicios. Al acceder o utilizar
                  Tekia, aceptas quedar sujeto a estos términos. Por favor,
                  léelos con atención.
                </p>
              </section>

              <section className="space-y-4 scroll-mt-24 pt-12" id="section1">
                <h2 className="font-bold text-lg">
                  1. Cuenta y Responsabilidades del Usuario
                </h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Debes tener al menos 18 años para crear una cuenta. Eres
                  responsable de mantener la confidencialidad de tu información,
                  incluyendo la contraseña, y de todas las actividades
                  realizadas desde tu cuenta. Debes notificarnos de inmediato
                  cualquier uso no autorizado.
                </p>
              </section>

              <section className="space-y-4 scroll-mt-24 pt-12" id="section2">
                <h2 className="font-bold text-lg">2. Uso del Marketplace</h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Tekia te otorga una licencia limitada, no exclusiva y
                  revocable para usar nuestros servicios con fines personales y
                  no comerciales. Todas las transacciones se realizan entre
                  comprador y vendedor; Tekia no es parte de dichas
                  transacciones.
                </p>
              </section>

              <section className="space-y-4 scroll-mt-24 pt-12" id="section3">
                <h2 className="font-bold text-lg">
                  3. Contenido y Propiedad Intelectual
                </h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Todo el contenido del sitio (textos, logos, gráficos,
                  software) es propiedad de Tekia o de sus proveedores y está
                  protegido por leyes internacionales. Los usuarios no deben
                  publicar contenido ilegal, obsceno o difamatorio.
                </p>
              </section>

            
              <section className="space-y-4 scroll-mt-24 pt-12" id="section4">
                <h2 className="font-bold text-lg">4. Pagos y Transacciones</h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Los pagos se procesan mediante terceros autorizados. Al
                  realizar un pago, aceptas los términos de dichos procesadores.
                  Tekia no es responsable de errores derivados del proceso de
                  pago.
                </p>
              </section>


              <section className="space-y-4 scroll-mt-24 pt-12" id="section5">
                <h2 className="font-bold text-lg">5. Actividades Prohibidas</h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Está prohibido interferir con el funcionamiento del
                  marketplace, usar sistemas automatizados sin permiso o
                  recopilar información personal sin autorización.
                </p>
              </section>


              <section className="space-y-4 scroll-mt-24 pt-12" id="section6">
                <h2 className="font-bold text-lg">
                  6. Descargos y Limitación de Responsabilidad
                </h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Los servicios de Tekia se proporcionan “tal cual”. No
                  garantizamos funcionamiento ininterrumpido. En la máxima
                  medida permitida por la ley, Tekia no es responsable de daños
                  indirectos o consecuentes.
                </p>
              </section>

              
              <section className="space-y-4 scroll-mt-24 pt-12" id="section7">
                <h2 className="font-bold text-lg">
                  7. Terminación del Servicio
                </h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Podemos suspender o cancelar tu cuenta en cualquier momento si
                  incumples estos términos. Tras la terminación, tu acceso al
                  servicio cesará inmediatamente.
                </p>
              </section>

      
              <section className="space-y-4 scroll-mt-24 pt-12" id="section8">
                <h2 className="font-bold text-lg">8. Ley Aplicable</h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Estos términos se rigen por las leyes del país donde Tekia
                  tiene sede. Toda disputa será resuelta en los tribunales de
                  dicha jurisdicción.
                </p>
              </section>
                    </div>
              <section
                className="mt-12 p-6 rounded-xl bg-primary/20 dark:bg-primary/10"
                id="contact"
              >
                <h3 className="text-lg font-bold text-text-light-heading">
                  ¿Tienes dudas sobre nuestros Términos?
                </h3>
                <p className="mt-2 text-base text-text-light-body">
                  Si tienes preguntas sobre estos Términos del Servicio, no
                  dudes en contactarnos. Estamos aquí para ayudarte y aclarar
                  cualquier punto para que tengas una comprensión completa de
                  nuestras políticas.
                </p>
                <a
                  className="inline-block mt-4 text-sm font-bold text-primary hover:underline"
                  href="#"
                >
                  Contactar Soporte
                </a>
              </section>
            </div>
            
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;

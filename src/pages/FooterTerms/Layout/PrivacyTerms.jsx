import React from "react";
import Navbar from "../../../shared/navbar/navbar";
import PrivacyTermsAside from "./components/AsideTerms";
import Footer from "../../../shared/utils/Footer";
import { NavLink } from "react-router-dom";
const PrivacyTerms = () => {
  return (
    <div className="dark:bg-background-dark dark:text-white bg-background-light min-h-screen font-display transition-colors">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
         <PrivacyTermsAside />
          <div className="flex-1 min-w-0 ">
            <div className="prose prose-slate max-w-none prose-h1:text-4xl prose-h1:font-black prose-h2:text-2xl prose-h2:font-bold prose-p:leading-relaxed prose-p:text-slate-600 prose-a:text-content-light dark:text-content-dark hover:prose-a:underline prose-li:text-slate-600 prose-h2:text-slate-900 prose-h1:text-slate-900">
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
                  Política de Privacidad
                </span>
              </div>
              <div className="border-b border-gray-300 dark:border-border-dark pb-6 mb-8">
                <h1 className="text-3xl font-bold" id="page-title">
                  Política de Privacidad
                </h1>
                <p className="text-content-light/80 dark:text-content-dark/80 text-sm font-normal leading-normal mt-2">
                  Última actualización: 19 de noviembre de 2025
                </p>
              </div>
              <div className="bg-white dark:bg-surface-dark px-8 py-6 rounded-lg shadow-sm">
              <section className="space-y-4 scroll-mt-24" id="introduction">
                <h2 className="font-bold text-subtle text-lg">Introducción</h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Bienvenido a Tekia. Estamos comprometidos con la protección de
                  su información personal y su derecho a la privacidad. Si tiene
                  alguna pregunta o inquietud sobre nuestra política o nuestras
                  prácticas con respecto a su información personal, por favor
                  contáctenos. Cuando visita nuestro sitio web y utiliza
                  nuestros servicios, confía en nosotros con su información
                  personal. Nos tomamos muy en serio su privacidad.
                </p>
              </section>
              <section
                className="space-y-4 scroll-mt-24 pt-12"
                id="info-collect"
              >
                <h2 className="font-bold text-lg">
                  Información que recopilamos
                </h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Recopilamos información personal que usted nos proporciona
                  voluntariamente cuando se registra en el marketplace, expresa
                  interés en obtener información sobre nosotros o nuestros
                  productos y servicios, participa en actividades en el
                  marketplace o nos contacta de cualquier otra manera.
                </p>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  La información personal que recopilamos depende del contexto
                  de sus interacciones con nosotros y el marketplace, las
                  elecciones que haga y los productos y funciones que utilice.
                  La información personal que recopilamos puede incluir
                  identificación personal, datos de cuenta, datos de uso y datos
                  de cookies.
                </p>
              </section>
              <section className="space-y-4 scroll-mt-24 pt-12" id="info-use">
                <h2 className="font-bold text-lg">
                  Cómo usamos su información
                </h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Utilizamos la información personal recopilada a través de
                  nuestro marketplace para diversos fines comerciales.
                  Procesamos su información personal para estos fines en base a
                  nuestros intereses comerciales legítimos, para cumplir
                  contratos con usted, con su consentimiento y/o para cumplir
                  con nuestras obligaciones legales.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>
                      Facilitar la creación de cuentas y el inicio de sesión.
                    </strong>
                  </li>
                  <li>
                    <strong>Publicar testimonios.</strong> Publicamos
                    testimonios en nuestro marketplace que pueden contener
                    información personal.
                  </li>
                  <li>
                    <strong>Gestionar cuentas de usuario.</strong> Podemos usar
                    su información para administrar su cuenta y mantenerla en
                    funcionamiento.
                  </li>
                  <li>
                    <strong>Enviar información administrativa.</strong>
                  </li>
                  <li>
                    <strong>Proteger nuestros servicios.</strong> Podemos usar
                    su información como parte de nuestros esfuerzos para
                    mantener nuestro marketplace seguro.
                  </li>
                </ul>
              </section>
              <section
                className="space-y-4 scroll-mt-24 pt-12"
                id="data-sharing"
              >
                <h2 className="font-bold text-lg">Compartir datos</h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Solo compartimos información con su consentimiento, para
                  cumplir con la ley, para brindarle servicios, para proteger
                  sus derechos o para cumplir con obligaciones comerciales.
                  Podemos compartir sus datos con proveedores externos,
                  contratistas o agentes que realizan servicios para nosotros y
                  que requieren acceso a dicha información para realizar su
                  trabajo.
                </p>
              </section>
              <section
                className="space-y-4 scroll-mt-24 pt-12"
                id="data-security"
              >
                <h2 className="font-bold text-lg">Seguridad de los datos</h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Hemos implementado medidas técnicas y organizativas apropiadas
                  para proteger la seguridad de cualquier información personal
                  que procesamos. Sin embargo, a pesar de nuestras salvaguardas
                  y esfuerzos para asegurar su información, ninguna transmisión
                  electrónica por Internet o almacenamiento de información puede
                  garantizarse al 100%.
                </p>
              </section>
              <section
                className="space-y-4 scroll-mt-24 pt-12"
                id="your-rights"
              >
                <h2 className="font-bold text-lg">Tus derechos</h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  En algunas regiones (como el Área Económica Europea), usted
                  tiene derechos que le permiten mayor acceso y control sobre su
                  información personal. Puede revisar, modificar o cerrar su
                  cuenta en cualquier momento. Estos derechos incluyen el
                  acceso, rectificación, eliminación y oposición al
                  procesamiento de datos.
                </p>
              </section>
              <section className="space-y-4 scroll-mt-24 pt-12" id="cookies">
                <h2 className="font-bold text-lg">
                  Cookies y tecnologías de seguimiento
                </h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Podemos usar cookies y tecnologías similares para acceder o
                  almacenar información. La información específica sobre cómo
                  usamos estas tecnologías y cómo puede rechazar ciertas cookies
                  se detalla en nuestra Política de Cookies.
                </p>
              </section>
              <section
                className="space-y-4 scroll-mt-24 pt-12"
                id="policy-changes"
              >
                <h2 className="font-bold text-lg">Cambios en la política</h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Podemos actualizar esta política de privacidad de vez en
                  cuando. La versión actualizada se indicará con una fecha de
                  “Última actualización” y será efectiva tan pronto como esté
                  accesible. Le recomendamos revisar esta política con
                  frecuencia para estar informado sobre cómo protegemos su
                  información.
                </p>
              </section>
              <section className="space-y-4 scroll-mt-24 pt-12" id="contact">
                <h2 className="font-bold text-lg">Contáctanos</h2>
                <p className="text-content-light/90 dark:text-content-dark/80">
                  Si tiene preguntas o comentarios sobre esta política, puede
                  enviarnos un correo electrónico a{" "}
                  <a href="mailto:privacy@tekia.com">privacy@tekia.com</a> o por
                  correo postal a:
                </p>
                <p className="text-content-light/90 dark:text-content-dark/80 font-semibold">
                  Tekia, Inc.
                  <br />
                  123 Tech Avenue
                  <br />
                  Gijón, TCH 45678
                  <br />
                  España
                </p>
              </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyTerms;

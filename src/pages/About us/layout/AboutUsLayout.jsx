import React from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import { BadgeCheck, ThumbsUp, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import GlareButton from "../../../shared/utils/GlareButton";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark dark:text-content-dark text-content-light font-display transition-colors">
      <Navbar />
      <main className="flex flex-col flex-1">
        <section className="w-full py-70 lg:py-40 text-center px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
              Tecnología, Perfeccionada.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-subtle-dark">
              Tekia no es solo un marketplace. Es una declaración. Creemos en el
              poder de la tecnología seleccionada por expertos para mejorar la
              vida, sin complicarla.
            </p>
          </div>
        </section>

        <section className="w-full max-w-6xl mx-auto rounded-md border border-border-light dark:border-border-dark py-12 md:py-24 bg-surface-light dark:bg-gray-800 px-3 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight leading-tight md:leading-snug">
                Selección Experta, Sin Compromisos.
              </h2>
              <p className="text-sm md:text-base leading-relaxed md:leading-loose text-gray-600 dark:text-subtle-dark">
                Olvídate del scroll infinito y la confusión de productos
                patrocinados. Cada artículo en Tekia es seleccionado a mano y
                probado rigurosamente por nuestro dedicado equipo de expertos en
                tecnología. Esta es nuestra promesa de calidad, rendimiento y
                verdadero valor.
              </p>
            </div>

            <div className="flex flex-col gap-5 md:gap-6">
              <div className="flex items-start gap-4">
                <BadgeCheck className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Calidad Sin Compromisos
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-subtle-dark">
                    Nuestro proceso de selección garantiza un estándar alto y
                    constante de calidad en el que puedes confiar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ThumbsUp className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Simplicidad Radical
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-subtle-dark">
                    Nos encargamos del trabajo duro de evaluar productos para
                    que tú disfrutes de una experiencia de compra simple y
                    segura.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Rocket className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Preparados para el Futuro
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-subtle-dark">
                    Seleccionamos productos innovadores que no solo son buenos
                    hoy, sino que están diseñados para durar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 text-center px-4 md:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Deja de buscar. Empieza a descubrir.
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-subtle-dark mb-8">
              Encuentra la tecnología que realmente necesitas. Explora productos
              seleccionados cuidadosamente para ofrecerte calidad y utilidad en
              tu día a día.
            </p>
            <Link to="/products">
              <GlareButton>Explorar Colecciones</GlareButton>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;

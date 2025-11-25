import React, { useState } from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import { NavLink } from "react-router-dom";
import { BadgeCheck, ThumbsUp, Rocket, Zap, Target, Users } from "lucide-react";

const AboutUsPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const features = [
    {
      icon: BadgeCheck,
      title: "Calidad Sin Compromisos",
      description:
        "Nuestro proceso de selección garantiza un estándar alto y constante de calidad en el que puedes confiar.",
    },
    {
      icon: ThumbsUp,
      title: "Simplicidad Radical",
      description:
        "Nos encargamos del trabajo duro de evaluar productos para que tú disfrutes de una experiencia de compra simple y segura.",
    },
    {
      icon: Rocket,
      title: "Preparados para el Futuro",
      description:
        "Seleccionamos productos innovadores que no solo son buenos hoy, sino que están diseñados para durar.",
    },
  ];

  const stats = [
    { number: "2k+", label: "Productos Evaluados", icon: Target },
    { number: "50k+", label: "Clientes Felices", icon: Users },
    { number: "99.9%", label: "Satisfacción", icon: Zap },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark dark:text-content-dark text-content-light font-display transition-colors">
      <Navbar />
      <main className="flex flex-col flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 lg:py-16 text-center px-4 md:px-10 lg:px-20 overflow-hidden">
       
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 dark:opacity-20" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 dark:opacity-20" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Tecnología,
              </span>
              <br />
              <span>perfeccionada.</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 dark:text-subtle-dark max-w-2xl mx-auto leading-relaxed">
              Tekia no es solo un marketplace. Es una declaración. Creemos en el
              poder de la tecnología seleccionada por expertos para mejorar la
              vida, sin complicarla.
            </p>

            <div className="inline-flex mt-4 items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/10 w-fit mx-auto">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Descubre nuestra historia
              </span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-6xl mx-auto rounded-2xl border border-border-light dark:border-border-dark py-16 md:py-24 bg-gradient-to-br from-surface-light to-background-light dark:from-gray-800/50 dark:to-gray-900 px-4 md:px-10 lg:px-20 my-8 mx-4 md:mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Selección experta, sin compromisos.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-subtle-dark max-w-2xl">
                Olvídate del scroll infinito y la confusión de productos
                patrocinados. Cada artículo en Tekia es seleccionado a mano y
                probado rigurosamente por nuestro dedicado equipo de expertos en
                tecnología.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                const isActive = activeCard === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveCard(idx)}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`group relative bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden
                      ${isActive ? "-translate-y-2 scale-105" : "translate-y-0 scale-100"}
                    `}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

                    <div className="relative space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-content-light dark:text-white">
                        {feature.title}
                      </h3>

                      <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-subtle-dark group-hover:text-gray-700 dark:group-hover:text-subtle-dark transition-colors duration-300">
                        {feature.description}
                      </p>

                      <div className="h-1 w-0 bg-gradient-to-r from-primary to-primary/60 rounded-full group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 px-4 md:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                const isActive = activeCard === `stat-${idx}`;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveCard(`stat-${idx}`)}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`group relative bg-surface-light dark:bg-gray-800 border border-border-light dark:border-border-dark rounded-2xl p-6 md:p-8 text-center transition-all duration-300 overflow-hidden cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
                      ${isActive ? "-translate-y-1" : "translate-y-0"}
                    `}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                    <div className="relative space-y-3">
                      <div className="flex justify-center">
                        <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                          {stat.number}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 dark:text-subtle-dark mt-1 font-medium">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-16 md:py-20 text-center px-4 md:px-10 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 dark:opacity-20" />
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Deja de buscar.
              </span>
              <br />
              <span>Empieza a descubrir.</span>
            </h2>

            <p className="text-base md:text-lg text-subtle-light dark:text-subtle-dark max-w-2xl mx-auto leading-relaxed">
              Encuentra la tecnología que realmente necesitas. Explora productos
              seleccionados cuidadosamente para ofrecerte calidad y utilidad en
              tu día a día.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <NavLink to='/products' className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors duration-300">
                Explorar Colecciones
              </NavLink>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2].map((dot) => (
                <div
                  key={dot}
                  className={`h-2 bg-primary/40 hover:bg-primary transition-all duration-300 rounded-full
                    ${dot === 1 ? "w-8" : "w-2"}
                  `}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
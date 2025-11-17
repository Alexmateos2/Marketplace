import React from "react";
import Hero from "../components/hero";
import Footer from "../../../shared/utils/Footer";
import CategoriaDestacada from "../components/categoriasDestacadas";
import ProductosExpertos from "../components/productosExpertos";
import Card from "../components/card";
import Navbar from "../../../shared/navbar/navbar";

export default function HomePage() {
  return (
    <div className="font-display bg-background-light text-content-light dark:bg-background-dark dark:text-content-dark min-h-screen transition-colors flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Why Choose Us */}
        <section className="py-12 sm:py-16 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              ¿Por qué elegirnos?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-subtle-light dark:text-subtle-dark">
              Vive la experiencia Tekia. Más que un marketplace, somos tu guía
              en tecnología de calidad.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 p-4 sm:p-2 ">
              <Card
                title="Selección de Expertos"
                text="Cada producto es cuidadosamente seleccionado y probado por especialistas."
                icon="M5 13l4 4L19 7"
              />
              <Card
                title="Calidad Garantizada"
                text="Respaldamos cada producto con nuestra promesa de satisfacción total."
                icon="M5 13l4 4L19 7"
              />
              <Card
                title="Compra sin Complicaciones"
                text="Disfruta de una experiencia de compra fluida con envío rápido y soporte confiable."
                icon="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </div>
          </div>
        </section>

        {/* Productos Expertos */}
        <section className="py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl sm:text-3xl font-bold tracking-tight">
            Selecciones de Nuestros Expertos
          </h2>
          <ProductosExpertos />
        </section>

        {/* Categorías Destacadas */}
        <section className="py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl sm:text-3xl font-bold tracking-tight">
            Categorías Destacadas
          </h2>
          <CategoriaDestacada />
        </section>

        {/* Stay Updated */}
        <section className="bg-surface-light dark:bg-surface-dark w-full xl:w-3/5 mx-auto rounded-lg py-12 sm:py-16 px-4 text-center mb-20 shadow-lg group border border-border-light dark:border-border-dark hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Mantente Conectado
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-subtle-light dark:text-subtle-dark">
              Suscríbete a nuestro boletín y no te pierdas las últimas novedades
              y lanzamientos.
            </p>

            <form className="mx-auto mt-8 flex flex-col sm:flex-row max-w-md gap-4 sm:gap-2">
              <input
                type="email"
                placeholder="Introduce tu correo electrónico"
                className="flex-1 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
              <button
                type="submit"
                className="group/btn relative rounded-lg bg-primary px-6 py-3 text-white font-bold text-sm transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary overflow-hidden"
              >
                <span className="relative">Suscribirse</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

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
      {/* Header */}
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        {/* Why Choose Us */}
        <section className="py-12 sm:py-16 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              ¿Por qué elegirnos?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-subtle-light dark:text-subtle-dark">
              Vive la experiencia Tekia. Más que un marketplace, somos tu guía en tecnología de calidad.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 p-10 md:p-2">
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

        {/* Expert Picks */}
        <section className="py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Selecciones de Nuestros Expertos
          </h2>
          <ProductosExpertos />
        </section>

        {/* Featured Categories */}
        <section className="py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Categorías Destacadas
          </h2>
          <CategoriaDestacada />
        </section>

        {/* Stay Updated */}
        <section className="bg-surface-light w-full  xl:w-3/5 mx-auto rounded-lg py-12 dark:bg-surface-dark sm:py-16 text-center mb-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Mantente Conectado
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-subtle-light dark:text-subtle-dark">
            Suscríbete a nuestro boletín y no te pierdas las últimas novedades y lanzamientos.
          </p>
          <form className="mx-auto mt-8 flex sm:flex-row flex-col max-w-md gap-4 sm:gap-2">
            <input
              className="flex-1 rounded-lg border-border-light bg-background-light px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-background-dark"
              placeholder="Introduce tu correo electrónico"
              type="email"
            />
            <button className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90">
              Suscribirse
            </button>
          </form>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

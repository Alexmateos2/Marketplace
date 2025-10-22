import React from "react";
import Hero from "../components/hero";
import Footer from "../../../shared/footer";
import CategoriaDestacada from "../components/categoriasDestacadas";
import ProductosExpertos from "../components/productosExpertos";
import Card from "../components/card";
import Navbar from "../../../shared/navbar/navbar";



export default function HomePage() {
  return (
    <div className="bg-background-light font-display text-content-light dark:bg-background-dark dark:text-content-dark min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        {/* Why Choose Us */}
        <section className="py-12 sm:py-16 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Why Choose Us?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-subtle-light dark:text-subtle-dark">
              Discover the Tekia difference. We're more than just a marketplace.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 p-10 md:p-2">
              <Card
                title="Expert Curation"
                text="Every product is handpicked and tested by experts."
                icon="M5 13l4 4L19 7"
              />
              <Card
                title="Quality Guaranteed"
                text="We stand behind our products with a satisfaction guarantee."
                icon="M5 13l4 4L19 7"
              />
              <Card
                title="Seamless Experience"
                text="Smooth shopping journey with fast shipping and support."
                icon="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </div>
          </div>
        </section>

        {/* Expert Picks */}
        <section className="py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Expert Picks
          </h2>
          <ProductosExpertos />
        </section>

        {/* Featured Categories */}
        <section className="py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Featured Categories
          </h2>
          <CategoriaDestacada />
        </section>

        {/* Stay Updated */}
        <section className="bg-surface-light  py-12 dark:bg-surface-dark sm:py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Stay Updated
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-subtle-light dark:text-subtle-dark">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="mx-auto mt-8 flex max-w-md gap-2">
            <input
              className="flex-1 rounded-lg border-border-light bg-background-light px-4 py-3 text-sm focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-background-dark"
              placeholder="Enter your email"
              type="email"
            />
            <button className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90">
              Subscribe
            </button>
          </form>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

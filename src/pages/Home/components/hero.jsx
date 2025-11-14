import React from "react";
import GlareButton from "../../../shared/utils/GlareButton";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[500px] overflow-hidden rounded-xl lg:my-0">
      {/* Imagen */}
      <img
        alt="Desk setup"
        className="absolute inset-0 h-full w-full object-cover brightness-105 contrast-105"
        loading="lazy"
        src="../unnamed(1).png"
      />

      {/* Overlay ajustado */}
      <div
        className="absolute inset-0
          bg-gradient-to-r 
          from-black/30 via-black/10 to-black/0
          dark:from-black/70 dark:via-black/40 dark:to-black/20
          backdrop-blur-sm"
      />

      {/* Contenido */}
      <div className="relative grid place-items-center h-full p-10 sm:p-25 lg:w-2/3 mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-2
          text-black dark:text-white/90
          drop-shadow-[0_0_10px_rgba(0,0,0,0.2)]
          animate-fade-in
          transition-all duration-700">
          Tecnología, perfeccionada.
        </h1>
        <p className="max-w-md mb-4 text-xl xs:text-lg text-content-light dark:text-content-dark drop-shadow-md">
          Tekia ofrece una selección curada de tecnología de primer nivel,
          revisada por expertos del sector.
        </p>

        <Link to="/products">
          <GlareButton>Explore Collections</GlareButton>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

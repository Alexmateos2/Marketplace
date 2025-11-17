import React from "react";
import GlareButton from "../../../shared/utils/GlareButton";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[500px] overflow-hidden rounded-xl lg:my-0">

      <img
        alt="Desk setup"
        className="absolute inset-0 h-full w-full object-cover brightness-105 contrast-105"
        loading="lazy"
        src="../unnamed(1).png"
      />

    
      <div
        className="absolute inset-0
          bg-gradient-to-r 
          from-black/10 via-black/25 to-black/15
          dark:from-black/50 dark:via-black/35 dark:to-black/20
          backdrop-blur-sm"
      />

      {/* Contenido */}
      <div className="relative grid place-items-center h-full p-10 sm:p-25 lg:w-2/3 mx-auto text-center">
        <div className="space-y-4 animate-fade-in">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter
            animate-fade-in
            transition-all duration-700">
            <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
              Tecnología,
            </span>
            <br />
            <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              perfeccionada.
            </span>
          </h1>

          {/* Descripción  */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] leading-relaxed">
            Tekia ofrece una selección curada de tecnología de primer nivel,
            revisada por expertos del sector.
          </p>

          {/* Botón */}
          <div className="pt-2">
            <Link to="/products">
              <GlareButton>Explorar Colecciones</GlareButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
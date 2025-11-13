import React, { useEffect } from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {

    document.documentElement.classList.remove("dark");
    return () => {
      document.documentElement.classList.add("dark");
    };
  }, []);

  return (
    <div className="bg-background-light text-text-light flex flex-col min-h-screen font-display">
      <div className="flex-grow flex flex-col justify-center text-center space-y-8 max-w-lg mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-tight">
          404 - Página no encontrada
        </h1>
        <p className="text-base text-text-light/80 max-w-md mx-auto">
          ¡Ups! Parece que te has desviado. La página que buscas puede que haya sido
          movida, eliminada, o que hayas escrito mal la URL.
        </p>
        <NavLink
          to="/"
          className="inline-block min-w-[84px] rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors"
        >
          Ir a la página principal
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

import React from "react";
import GlareButton from "../../../shared/utils/GlareButton";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[500px] overflow-hidden rounded-xl  lg:my-0">
      <img
        alt="Desk setup"
        className="absolute inset-0 h-full w-full object-cover brightness-100"
        loading="lazy"
        src="../unnamed(1).png"
      />
      <div
        className="absolute inset-0 bg-linear-to-r 
  from-background-light/90 via-background-light/80 to-transparent
  dark:from-background-dark dark:via-background-dark/50"
      ></div>
      <div className="relative grid place-items-center h-full p-10 sm:p-25 lg:w-2/3 mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-0 md:mb-2">
          Tecnología, perfeccionada.
        </h1>
        <p className="max-w-md mb-2 text-xl xs:text-lg text-content-light dark:text-content-dark drop-shadow-md ">
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

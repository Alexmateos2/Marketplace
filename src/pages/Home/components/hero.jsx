import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[500px] overflow-hidden rounded-xl md:my-12 lg:my-0">
      <img
        alt="Desk setup"
        className="absolute inset-0 h-full w-full object-cover brightness-65 md:brightness-100"
        loading="lazy"
        src="../public/unnamed(1).png"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background-light via-background-light/70 to-transparent dark:from-background-dark dark:via-background-dark/50"></div>
      <div className="relative grid place-items-center h-full p-10 sm:p-25 lg:w-2/3 mx-auto text-center">
        <h1 className="text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
          Tech, Perfected.
        </h1>
        <p className="max-w-md text-base text-xl xs:text-lg text-subtle-light dark:text-subtle-dark">
          Tekia ofrece una selección curada de tecnología de primer nivel,
          revisada por expertos del sector.
        </p>
        <a
          href="#"
          className=" rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90 sm:px-8 sm:py-4 sm:text-base"
        >
          Explore Collections
        </a>
      </div>
    </section>
  );
};

export default Hero;

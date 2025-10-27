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
      <div className="max-w-lg flex-grow flex flex-col justify-center text-center space-y-8 mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">
          404 - Page Not Found
        </h1>
        <p className="text-base font-normal leading-normal max-w-md text-text-light/80 mx-auto">
          Oops! It seems you've taken a wrong turn. The page you are looking for
          might have been moved, deleted, or you might have mistyped the URL.
        </p>
        <NavLink
          to="/"
          className="inline-block min-w-[84px] rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors"
        >
          Go to Homepage
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

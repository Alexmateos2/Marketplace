import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="dark:bg-background-dark dark:text-content-dark min-h-screen flex flex-col">
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center group/design-root overflow-x-hidden p-4">
      <div className="layout-container flex h-full grow flex-col items-center justify-center">
        <div className="px-4 py-5 w-full max-w-lg">
          <div className="layout-content-container flex flex-col items-center gap-8 text-center">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <h1 className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">
                  404 - Page Not Found
                </h1>
                <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal max-w-md">
                  Oops! It seems you've taken a wrong turn. The page you are
                  looking for might have been moved, deleted, or you might have
                  mistyped the URL.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm justify-center">
                <NavLink
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-semibold leading-normal tracking-wide shadow-sm hover:bg-primary/90 transition-colors"
                    to="/"
                >
                  <span className="truncate">Go to Homepage</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default NotFound;

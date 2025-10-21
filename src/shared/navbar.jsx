import React from "react";


const Navbar = () => {
  return (
   <header className="sticky top-0 z-20 w-full border-b border-border-light bg-background-light/80 py-4 backdrop-blur-sm dark:border-border-dark dark:bg-background-dark/80 sm:max-w-full">
        <div className="flex justify-between mx-auto max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <a className="flex items-center gap-3 text-xl font-bold" href="#">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                  fill="currentColor"
                />
              </svg>
              <span>Tekia</span>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              <a
                className="text-sm font-medium text-content-light hover:text-primary dark:text-content-dark dark:hover:text-primary transition-colors"
                href="#"
              >
                New
              </a>
              <a
                className="text-sm font-medium text-content-light hover:text-primary dark:text-content-dark dark:hover:text-primary transition-colors"
                href="#"
              >
                Featured
              </a>
              <a
                className="text-sm font-medium text-content-light hover:text-primary dark:text-content-dark dark:hover:text-primary transition-colors"
                href="#"
              >
                Categories
              </a>
              <a
                className="text-sm font-medium text-content-light hover:text-primary dark:text-content-dark dark:hover:text-primary transition-colors"
                href="#"
              >
                About
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-subtle-light dark:text-subtle-dark"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32Z"></path>
              </svg>
              <input
                className="w-full rounded-full border-border-light bg-surface-light py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-surface-dark"
                placeholder="Search products..."
                type="search"
              />
            </div>
            <button
              className="rounded-full p-2 hover:bg-primary/10 dark:hover:bg-primary/20 lg:hidden"
              aria-label="Buscar"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32Z"></path>
              </svg>
            </button>
            <button className="rounded-full p-2 hover:bg-primary/10 dark:hover:bg-primary/20">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,48H48a8,8,0,0,0,0,16h24v128a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V64h24a8,8,0,0,0,0-16ZM168,192H88V64H168Z" />
              </svg>
            </button>
            <button className="rounded-full p-2 hover:bg-primary/10 dark:hover:bg-primary/20">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M228,128a12,12,0,0,1-12,12,100.11,100.11,0,0,1-99.34-111.45,12,12,0,0,1,21.06,12.35A76.08,76.08,0,0,0,140,204a76,76,0,0,0,75.78-88.37,12,12,0,0,1,12.22-9.63Z" />
              </svg>
            </button>
            <button>
              <img
                alt="User avatar"
                className="h-10 w-10 rounded-full object-cover"
                src="../public/unnamed.png"
              />
            </button>
          </div>
        </div>
      </header>
  );
};

export default Navbar;

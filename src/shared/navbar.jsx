import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const [closeTimeout, setCloseTimeout] = useState(null);

const handleMouseEnter = () => {
  if (closeTimeout) clearTimeout(closeTimeout);
  setIsOpen(true);
};

const handleMouseLeave = () => {
  const timeout = setTimeout(() => setIsOpen(false), 200);
  setCloseTimeout(timeout);
};

  return (
    <header className="bg-background-light dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/20 dark:border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className="flex items-center gap-3 text-xl font-bold text-content-light dark:text-content-dark"
            >
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
            </NavLink>

            <nav className="hidden md:flex items-center gap-8">
             <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="flex items-center gap-1 text-sm font-medium text-content-light dark:text-content-dark hover:text-primary transition-colors"
                >
                  Categories
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    className="absolute mt-2 top-full -left-20 w-60 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg shadow-lg overflow-hidden z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href="#"
                      className="block px-4 py-4 text-sm text-content-light dark:text-content-dark  border  border-border-light dark:border-border-dark  hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                    >
                      Keyboards
                    </a>
                    <a
                      to="/category/mice"
                      className="block px-4 py-4 text-sm text-content-light dark:text-content-dark border border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                    >
                      Mice
                    </a>
                    <a
                      to="/category/headphones"
                      className="block px-4 py-4 text-sm text-content-light dark:text-content-dark hover:bg-primary/10 border border-border-light dark:border-border-dark  dark:hover:bg-primary/20 transition-colors"
                    >
                      Headphones
                    </a>
                  </div>
                )}
              </div>

              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                Productos
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                About us
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block md:w-40 lg:w-90">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-lg border border-border-light bg-background-light dark:border-gray-700 dark:bg-background-dark pl-10 pr-4 py-2 text-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>

            <button className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </button>

            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 border-2 border-primary/50"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaJQWwq-jK4D1RbaBIbPBmTQfSyc2r-NHG-6LlzI_0E7ZmY2UNusTS8R1qR1c0Q__QCXf8RNwK1oylIvdV0-1i39zj5SODSDDFy8cKBbSLpy4r1iI1R57WSaihtw3z5l-eoCLmyZUma0EJB8HtZmmM1xfH-DSZG65F3my8y57pwOBcGh1fuvX5YMdIXf7eSD4aVJjq0W9Qk8molGcFJ41CmHYcjmv3c4jvFjw6q-o4Yji420ufR2Pg5-PJBo5scemCEW0gW6Kkf7c")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

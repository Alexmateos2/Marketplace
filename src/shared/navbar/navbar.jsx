import { NavLink } from "react-router-dom";
import CategoriesNavbar from "./categoriesNavbar";
import ProfileNavbar from "./profileNavbar";

const Navbar = () => {
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
              <CategoriesNavbar />
              <NavLink
                to="/new"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors dark:text-white hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                Nuevo
              </NavLink>
              <NavLink
                to="/products"
                end
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors dark:text-white hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                Productos
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors  dark:text-white hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                About us
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="relative hidden md:block md:w-40 lg:w-90">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-subtle-light  dark:text-subtle-dark"
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

            <NavLink
              to="/cart"
              className="p-2 rounded-full hover:bg-primary/10 dark:text-white dark:hover:bg-primary/20 transition-colors"
            >
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
            </NavLink>

            <ProfileNavbar />

            <NavLink
              to="/add"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors dark:text-white hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              New Product
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

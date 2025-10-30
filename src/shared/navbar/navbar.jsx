import { NavLink } from "react-router-dom";
import CategoriesNavbar from "./categoriesNavbar";
import ProfileNavbar from "./profileNavbar";
import DarkMode from "./darkMode";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useCart } from "../hooks/CartContext";
import BarraBusqueda from "./BarraBusqueda";

const Navbar = () => {
  const isProfilePage = location.pathname.startsWith("/profile");
  const isLoginPage = location.pathname.startsWith("/login");
  const isAboutPage = location.pathname.startsWith("/about");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="flex items-center bg-background-light dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/20 dark:border-primary/10">
        {!isLoginPage ? (
          <div className="container mx-auto px-4  py-2">
            <div className="flex items-center justify-between h-16 w-full">
              <div className="flex items-center gap-2 lg:gap-8">
                <NavLink
                  to="/"
                  aria-label="Inicio Tekia"
                  className="flex  items-center gap-2 text-xl font-bold text-content-light dark:text-content-dark hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/logo2.svg"
                    alt="Tekia logo"
                    className="w-8  h-auto object-contain"
                  />
                  <span className="hidden xxs:block text-2xl font-display font-semibold tracking-tight">
                    Tekia
                  </span>
                </NavLink>

                {/* Nav principal */}
                <nav className="hidden lg:flex items-center gap-8">
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
                      `text-sm font-medium transition-colors dark:text-white hover:text-primary ${
                        isActive ? "text-primary" : ""
                      }`
                    }
                  >
                    About us
                  </NavLink>
                </nav>
              </div>

              <div className="flex items-center gap-4 ml-auto">
                <div className="relative hidden lg:block lg:w-55 xl:w-90">
                  <BarraBusqueda />
                </div>

                <NavLink
                  to="/cart"
                  className="lg:block relative p-2 rounded-full hover:bg-primary/10 dark:text-white dark:hover:bg-primary/20 transition-colors"
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
                    />
                  </svg>
                  {cart.length > 0 && (
                    <span className="absolute -bottom-1 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                      {totalItems > 9 ? "9+" : totalItems}
                    </span>
                  )}
                </NavLink>

                <DarkMode />
                <ProfileNavbar />
                <NavLink to="/add">Add product</NavLink>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2  transition-colors">
            <div className="flex items-center justify-between h-16 w-full">
              <div className="flex items-center gap-2 lg:gap-8">
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
              </div>
              <DarkMode />
            </div>
          </div>
        )}
      </header>

      {/* Menu móvil */}
      {!isLoginPage && (
        <>
          <div className="lg:hidden h-5" />

          <div className="lg:hidden relative">
            <button
              className={`fixed ${isProfilePage ? "top-[85px]" : "top-[100px]"} left-3 z-50 p-3 flex justify-center items-center bg-background-light border border-border-light text-primary rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary dark:border-border-dark dark:bg-surface-dark dark:text-primary transition-transform duration-300`}

              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {isMobileMenuOpen && (
              <MobileMenu
                isOpen={isMobileMenuOpen}
                setIsOpen={setMobileMenuOpen}
              />
            )}
          </div>

          {!isProfilePage && !isLoginPage && !isAboutPage && (
            <div className="lg:hidden mb-5 px-4 flex items-center justify-start sm:justify-center pl-20 sm:pl-0">
              <div className="w-full max-w-sm md:max-w-md">
                <BarraBusqueda />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;

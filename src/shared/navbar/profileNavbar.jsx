import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ProfileNavbar = () => {
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

  useEffect(() => {
    return () => {
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Avatar */}
      <div
        className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10 border-2 border-primary/50 cursor-pointer"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnPDzJcMZziYykcoTL8J0llTXjQhuVgoFS5kaRslcUxTveESdKSoIeOWOZkXuY0Tz-MTgebtvZ7QCNLiHPFUq9GtchxXFaj9vudR_T10GJdBqrkYLFBjrFk6o9RZr0ewMDdQuOhT3-Ycr7AHSQs5sEa8HO_1FkaD9bKZO_S82ZQQdeNdwmD6exVcr4YhNUOyVKTc8WRSo_3ezwYk3iE4znU53VV29a2ikgoVrbKeK6Vwe1ShJCMb5nbKClDiQMGADJGhvG8QtlA8s")',
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      ></div>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
          w-60 max-w-xs bg-background-light dark:bg-background-dark 
          border border-border-light dark:border-border-dark 
          rounded-lg shadow-lg overflow-hidden z-50"
        >
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              `block px-4 py-4 text-base border-b border-border-light dark:border-border-dark transition-colors 
               ${isActive
                ? "text-primary bg-primary/10 dark:bg-primary/20"
                : "text-content-light dark:text-content-dark hover:bg-primary/10 dark:hover:bg-primary/20"}`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              `block px-4 py-4 text-base  border-b border-border-light dark:border-border-dark transition-colors 
               ${isActive
                ? "text-primary bg-primary/10 dark:bg-primary/20"
                : "text-content-light dark:text-content-dark hover:bg-primary/10 dark:hover:bg-primary/20"}`
            }
          >
            Log in
          </NavLink>
          <button
            className="block w-full text-left px-4 py-4 text-base  text-content-light dark:text-content-dark 
            hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileNavbar;

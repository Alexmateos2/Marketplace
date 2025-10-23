import React from "react";
import { MdPerson, MdReceiptLong, MdLogout, MdClose } from "react-icons/md";
const MenuMobileProfile = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-fit-content  bg-white dark:bg-background-dark shadow-xl z-40 lg:hidden transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="fixed  top-20 left-0 w-64 h-auto bg-white dark:bg-background-dark p-6 flex flex-col justify-between shadow-xl">
        <div>
          <nav className="flex flex-col gap-2">
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
              href="#"
            >
              <MdPerson className="material-symbols-outlined" />
              <span className="text-sm font-medium">Personal Information</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate text-content-light-600 dark:text-content-dark"
              href="#"
            >
              <MdReceiptLong className="material-symbols-outlined" />
              <span className="text-sm font-medium">Order History</span>
            </a>
        
              
          </nav>
        </div>
        <button className="mt-10  flex items-center justify-center w-full h-10 px-4 rounded-lg bg-slate-100 dark:bg-surface-dark text-content-light dark:text-content-dark text-sm font-medium">
          <MdLogout className="material-symbols-outlined mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default MenuMobileProfile;

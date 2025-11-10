import React from "react";
import {
  LayoutDashboard,
  Users,
  Package,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AsideAdmin = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-80 py-6 px-6 bg-surface-light dark:bg-background-dark/50 hidden lg:flex flex-col justify-between border-r border-border-light dark:border-border-dark  z-30 ">
      <div>
        <div className="flex items-center gap-3 mb-10">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-12 h-12 flex-shrink-0"
            data-alt="Admin avatar"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnPDzJcMZziYykcoTL8J0llTXjQhuVgoFS5kaRslcUxTveESdKSoIeOWOZkXuY0Tz-MTgebtvZ7QCNLiHPFUq9GtchxXFaj9vudR_T10GJdBqrkYLFBjrFk6o9RZr0ewMDdQuOhT3-Ycr7AHSQs5sEa8HO_1FkaD9bKZO_S82ZQQdeNdwmD6exVcr4YhNUOyVKTc8WRSo_3ezwYk3iE4znU53VV29a2ikgoVrbKeK6Vwe1ShJCMb5nbKClDiQMGADJGhvG8QtlA8s")',
            }}
          ></div>
          <div className="min-w-0">
            <h1 className="text-base font-bold text-content-light dark:text-content-dark truncate">
              Admin User
            </h1>
            <p className="text-xs text-content-light-500 dark:text-content-dark-400 truncate">
              Administrator
            </p>
            <p className="text-xs text-content-light-500 dark:text-content-dark-400 truncate">
              admin@gmail.com
            </p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
           <button
            disabled
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-content-light-400 dark:text-content-dark-400 cursor-not-allowed bg-slate-50 dark:bg-background-dark/30"
          >
            <LayoutDashboard size={20} className="flex-shrink-0" />
            <span className="text-sm font-medium">Dashboard</span>
          </button>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-content-light-600 dark:text-content-dark"
              }`
            }
            to="/admin/products"
          >
            <Package size={20} className="flex-shrink-0" />
            <span className="text-sm font-medium">Products</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-content-light-600 dark:text-content-dark"
              }`
            }
            to="/admin/users"
          >
            <Users size={20} className="flex-shrink-0" />
            <span className="text-sm font-medium">Users</span>
          </NavLink>

          {/* Disabled Reports */}
          <button
            disabled
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-content-light-400 dark:text-content-dark-400 cursor-not-allowed bg-slate-50 dark:bg-background-dark/30"
          >
            <BarChart3 size={20} className="flex-shrink-0" />
            <span className="text-sm font-medium">Reports</span>
          </button>

          {/* Disabled Settings */}
          <button
            disabled
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-content-light-400 dark:text-content-dark-400 cursor-not-allowed bg-slate-50 dark:bg-background-dark/30"
          >
            <Settings size={20} className="flex-shrink-0" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </nav>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("admin");
          navigate("/login");
        }}
        className="mt-auto flex items-center justify-center w-full h-10 px-4 rounded-lg bg-slate-100 dark:bg-background-dark text-content-light-600 dark:text-content-dark text-sm font-medium cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
      >
        <LogOut size={18} className="mr-2 flex-shrink-0" />
        Logout
      </button>
    </aside>
  );
};

export default AsideAdmin;

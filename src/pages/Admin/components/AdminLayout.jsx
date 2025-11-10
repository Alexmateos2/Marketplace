import React from "react";
import { Edit2, Trash2, Plus } from "lucide-react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import BarraBusqueda from "../../../shared/navbar/BarraBusqueda";
import AsideAdmin from "./AsideAdmin";

const AdminLayout = ({ data = [], columns = [], title = "Admin" }) => {
  const hasData = data && data.length > 0;

  return (
    <div className="flex flex-col font-display transition-colors">
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <AsideAdmin />
        
        {/* Main content */}
        <main className="flex flex-1   min-h-screen flex-col p-6 lg:p-8 bg-background-light dark:bg-background-dark lg:ml-80">
          <div className="flex flex-col mx-auto w-full max-w-7xl gap-6">
            {!hasData ? (
              <div className="flex items-center justify-center h-96 text-4xl text-subtle-light dark:text-subtle-dark">
                Welcome to admin dashboard
              </div>
            ) : (
              <>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h1 className="text-3xl font-bold leading-tight tracking-tight text-content-light dark:text-content-dark">
                    {title}
                  </h1>
                  <button className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors">
                    <Plus size={20} />
                    <span className="truncate">Add New</span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-4">
                  <div className="relative w-full max-w-lg">
                    <BarraBusqueda />
                  </div>
                </div>

                <div className="w-full overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-background-light/70 dark:bg-background-dark/50">
                          {columns.map((col, idx) => (
                            <th
                              key={idx}
                              className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300"
                            >
                              {col.label}
                            </th>
                          ))}
                          <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300 text-right">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {data.map((item, idx) => (
                          <tr key={idx} className="hover:bg-background-light dark:hover:bg-background-dark/30 transition-colors">
                            {columns.map((col, cidx) => (
                              <td
                                key={cidx}
                                className="px-6 py-4 text-sm whitespace-nowrap text-slate-900 dark:text-slate-100"
                              >
                                {col.render ? col.render(item) : col.key === "precio" ? `${item[col.key]} $` : item[col.key]}

                              </td>
                            ))}
                            <td className="px-2 py-4 whitespace-nowrap text-right flex gap-2 justify-end">
                              <button 
                                className="p-2 text-slate-500 hover:text-primary rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                title="Edit"
                              >
                                <Edit2 size={18} />
                              </button>
                              <button 
                                className="p-2 text-slate-500 hover:text-red-500 dark:hover:text-red-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                title="Delete"
                              >
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
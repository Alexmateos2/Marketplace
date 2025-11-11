import React from "react";
import { Edit2, Trash2, Plus, FileText } from "lucide-react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import BarraBusqueda from "../../../shared/navbar/BarraBusqueda";
import AsideAdmin from "./AsideAdmin";
import Pagination from "../../../shared/utils/pagination";
import { NavLink, useLocation } from "react-router-dom";

const AdminLayout = ({
  data = [],
  columns = [],
  title = "Admin",
  pagination,
  idKey = "id",
  onDeleteSuccess,
}) => {
  const location = useLocation();
  const hasData = data && data.length > 0;
  const isProductPage = location.pathname.includes("/products");

  const deleteItem = async (id) => {
    const url = isProductPage ? "productos" : "usuarios";
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/${url}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error deleting item");

      alert("Item deleted successfully");

      if (onDeleteSuccess) onDeleteSuccess();
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete item");
    }
  };

  return (
    <div className="flex flex-col font-display transition-colors">
      <Navbar />
      <div className="flex flex-1">
        <AsideAdmin />

        <main className="flex flex-1 min-h-screen lg:text-start text-center flex-col p-6 lg:p-8 bg-background-light dark:bg-background-dark">
          <div className="flex flex-col mx-auto w-full max-w-7xl gap-6">
            {!hasData ? (
              <div className="flex items-center justify-center h-96 text-4xl text-subtle-light dark:text-subtle-dark">
                Welcome to admin dashboard
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h1 className="text-3xl font-bold leading-tight tracking-tight text-content-light dark:text-content-dark">
                    {title}
                  </h1>
                  {isProductPage ? <>
                  <button className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors">
                    <Plus size={20} />
                    <NavLink to="/add" className="truncate">Add New</NavLink>
                  </button>
                  </> : null}
                  
                </div>

                {/* Search + Pagination */}
                <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-4">
                  <div className="relative w-full max-w-lg">
                    <BarraBusqueda />
                  </div>
                  {pagination && (
                    <Pagination
                      currentPage={pagination.currentPage}
                      itemsPerPage={pagination.itemsPerPage}
                      onPageChange={pagination.onPageChange}
                      totalItems={pagination.totalItems}
                    />
                  )}
                </div>

                {/* Desktop Table */}
                <div className="hidden lg:block w-full overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
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
                          <tr
                            key={idx}
                            className="hover:bg-background-light dark:hover:bg-background-dark/30 transition-colors"
                          >
                            {columns.map((col, cidx) => (
                              <td
                                key={cidx}
                                className="px-6 py-4 text-sm whitespace-nowrap text-slate-900 dark:text-slate-100"
                              >
                                {col.render
                                  ? col.render(item)
                                  : col.key === "precio"
                                  ? `${item[col.key]} $`
                                  : item[col.key]}
                              </td>
                            ))}
                            <td className="px-2 py-4 whitespace-nowrap text-right flex gap-2 justify-end">
                              {isProductPage ? (
                                <>
                                  <NavLink
                                    className="p-2 cursor-pointer text-slate-500 hover:text-primary rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    to={`edit/${item[idKey]}`}
                                    title="Edit"
                                  >
                                    <Edit2 size={18} />
                                  </NavLink>
                                  <button
                                    className="p-2 cursor-pointer text-slate-500 hover:text-red-500 dark:hover:text-red-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    onClick={() => deleteItem(item[idKey])}
                                    title="Delete"
                                  >
                                    <Trash2 size={18} />
                                  </button>
                                </>
                              ) : (
                                <>
                                  <NavLink
                                   to={`/pedidos/historial/${item.id_usuario}`}
                                    className="p-2 mr-5 text-slate-500 hover:text-primary rounded-md  cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    title="View orders"
                                  >
                                    <FileText size={18} />
                                  </NavLink>
                                </>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Mobile & Tablet: Card view */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
                  {data.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-5 space-y-3 hover:shadow-md transition-shadow"
                    >
                      {columns.map((col, cidx) => (
                        <div key={cidx} className="flex flex-col gap-1">
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                            {col.label}
                          </span>
                          <span className="text-sm text-slate-900 dark:text-slate-100 font-medium">
                            {col.render
                              ? col.render(item)
                              : col.key === "precio"
                              ? `${item[col.key]} $`
                              : item[col.key]}
                          </span>
                        </div>
                      ))}
                      <div className="flex gap-2 pt-3 border-t border-gray-200 dark:border-slate-800">
                        {isProductPage ? (
                          <>
                            {" "}
                            <button className="flex-1  cursor-pointer flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-all">
                              <Edit2 size={16} />
                              Edit
                            </button>
                            <button
                              onClick={() => deleteItem(item[idKey])}
                              className="flex-1 cursor-pointer flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-600/30 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-all"
                            >
                              <Trash2 size={16} />
                              Delete
                            </button>
                          </>
                        ) : (
                          <>
                            <NavLink
                              
                              to={`/pedidos/historial/${item.id_usuario}`}
                              className="flex-1  cursor-pointer flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-all"
                            >
                              <FileText size={16} />
                              View orders
                            </NavLink>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
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

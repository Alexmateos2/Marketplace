import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";
import Pagination from "../../../shared/utils/pagination.jsx";

const HistoryOrdersPage = () => {
  const navigate = useNavigate();
  const { id: id_usuario } = useParams(); // id del usuario desde params (si es admin)
  const user= (localStorage.getItem("usuario"));
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const rol = JSON.parse(localStorage.getItem("rol"));
  const isAdmin = rol === "admin";

  // Validación de permisos
  const usuarioActual = isAdmin ? id_usuario || user : user;


  useEffect(() => {
    // Si no hay sesión
    if (!user) {
      setError("Por favor inicia sesión para ver tus pedidos");
      setLoading(false);
      setTimeout(() => navigate("/login"), 1000);
      return;
    }

    // Bloquear acceso a usuarios normales que intenten ver otros
    if (!isAdmin && id_usuario && id_usuario !== user) {
      setError("No tienes permiso para ver estos pedidos");
      setLoading(false);
      setTimeout(() => navigate("/"), 1500);
      return;
    }

    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `http://localhost:3000/pedidos/${usuarioActual}`
        );
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setOrders(data || []);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("No se pudieron cargar los pedidos. Intenta de nuevo más tarde.");
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate, user, id_usuario, usuarioActual, isAdmin]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const ordenesActuales = orders.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 sm:px-10 lg:px-20 py-8 flex justify-center font-display">
        <div className="flex flex-col w-full max-w-4xl">
          {!id_usuario ? (
            <NavLink
              to="/profile"
              className="text-sm pb-4 font-medium text-subtle-light dark:text-subtle-dark hover:underline transition"
            >
              Back to profile
            </NavLink>
          ) : (
            <NavLink
              to="/admin/users"
              className="text-sm pb-4 font-medium text-subtle-light dark:text-subtle-dark hover:underline transition"
            >
              Back to Users
            </NavLink>
          )}

          <h1 className="text-content-light dark:text-content-dark text-4xl font-black mb-6">
            Order History
          </h1>

          {loading ? (
            <p className="text-center text-subtle-light dark:text-subtle-dark mt-6">
              Loading your orders...
            </p>
          ) : error ? (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded">
              {error}
            </div>
          ) : orders.length === 0 ? (
            <p className="text-center text-subtle-light dark:text-subtle-dark mt-6">
              {isAdmin ? "This user has no orders yet." : "You have no orders yet."}
            </p>
          ) : (
            <>
              <div className="flex flex-col gap-4">
                {ordenesActuales.map((order) => (
                  <div
                    key={order.id_pedido}
                    className="flex flex-col sm:flex-row gap-4 items-center md:items-start sm:gap-6 bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark hover:shadow-md hover:border-blue-500/50 transition-all"
                  >
                    <div className="flex justify-center md:justify-start items-center -space-x-4 w-full sm:w-auto sm:min-w-[250px]">
                      {order.detalles && order.detalles.length > 0 ? (
                        <>
                          {order.detalles.slice(0, 3).map((item, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg w-[70px] h-[70px] border-2 border-border-light dark:border-border-dark ring-1 overflow-hidden bg-background-light dark:bg-surface-dark"
                            >
                              <AdvancedImage
                                cldImg={cld
                                  .image(item.imagen)
                                  .resize(fill().width(70).height(70).gravity("auto"))
                                  .quality("auto")
                                  .format("auto")}
                                alt={item.nombre_producto || "Product"}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                          {order.detalles.length > 3 && (
                            <div className="rounded-lg w-[70px] h-[70px] border-2 border-border-light dark:border-border-dark ring-1 bg-surface-light dark:bg-gray-700 flex items-center justify-center">
                              <p className="text-content-light dark:text-content-dark font-bold text-sm">
                                +{order.detalles.length - 3}
                              </p>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="bg-gray-300 rounded-lg w-[70px] h-[70px] border-2 border-border-light ring-1" />
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-center sm:text-center items-center md:items-start">
                      <p className="text-content-light dark:text-content-dark text-lg font-bold">
                        Order #{order.id_pedido}
                      </p>
                      <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal mt-1">
                        {order.detalles && order.detalles.length > 0
                          ? `${order.detalles[0].nombre_producto}${
                              order.detalles.length > 1
                                ? ` + ${order.detalles.length - 1} more`
                                : ""
                            }`
                          : "No description"}
                      </p>
                      <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal">
                        Placed on{" "}
                        {new Date(order.fecha).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start justify-between gap-2">
                      <p className="text-content-light dark:text-content-dark text-lg font-bold">
                        ${order.total}
                      </p>
                      <NavLink
                        to={
                          isAdmin
                            ? `/pedidos/historial/details/${id_usuario}/${order.id_pedido}`
                            : `/pedidos/historial/details/${order.id_pedido}`
                        }
                        className="text-primary text-sm font-bold hover:underline cursor-pointer"
                      >
                        View Details
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>

              {orders.length > itemsPerPage && (
                <div className="mt-8">
                  <Pagination
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                    totalItems={orders.length}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryOrdersPage;

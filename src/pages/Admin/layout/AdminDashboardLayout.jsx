import React, { useEffect, useState } from "react";
import AsideAdmin from "../components/AsideAdmin";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import {
  TrendingUp,
  TrendingDown,
  PlusCircle,
  UserCog,
  List,
  Plus,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
const AdminDashboardLayout = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:3000/estadisticas/resumen");
        const data = await res.json();
        setStats(data);
      } catch (err) {
       toast.error("Error cargando estadísticas: " + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading)
    return (
      <div className="p-10 flex items-center justify-center h-screen">
        Cargando estadísticas...
      </div>
    );
  if (!stats)
    return <div className="p-10">No se pudieron cargar las estadísticas</div>;

  const tarjetas = [
    {
      label: "Ingresos Totales",
      value: `${stats.revenue.total.toLocaleString()} €`,
      change: stats.revenue.change,
      isPercentage: true,
    },
    {
      label: "Pedidos Totales",
      value: stats.orders.total,
      change: stats.orders.change,
      isPercentage: true,
    },
    {
      label: "Productos Totales",
      value: stats.products.total,
      change: stats.products.new || 0,
      isPercentage: false,
    },
    {
      label: "Usuarios Totales",
      value: stats.users.total,
      change: stats.users.change,
      isPercentage: true,
    },
  ];

  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <Navbar />
      <div className="flex h-screen w-full">
        <AsideAdmin />
        <main className="flex-1 overflow-y-auto">
          {/* Encabezado */}
          <header className="flex items-center justify-between border-b border-border-light dark:border-border-dark px-10 py-4 lg:bg-white dark:bg-card-dark/80 backdrop-blur-sm">
            <h1 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">
              Panel de Administración
            </h1>
          </header>

          {/* Tarjetas de estadísticas */}
          <div className="p-10 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tarjetas.map((tarjeta, idx) => {
                const positivo = tarjeta.change >= 0;
                const color = positivo ? "text-green-500" : "text-red-500";

                return (
                  <div
                    key={idx}
                    className="flex flex-col gap-3 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-lg hover:shadow-2xl hover:scale-[1.04] transition-all duration-200"
                  >
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-semibold">
                      {tarjeta.label}
                    </p>
                    <p className="text-text-light dark:text-text-dark  text-2xl xl:text-3xl font-bold tracking-tight">
                      {tarjeta.value}
                    </p>
                    <p className={`text-sm font-medium flex items-center gap-1 ${tarjeta.isPercentage ? color : tarjeta.change > 0 ? 'text-green-500' : 'text-gray-500'}`}>
                      {tarjeta.isPercentage ? (
                        <>
                          {positivo ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          {tarjeta.change.toFixed(1)}%
                        </>
                      ) : tarjeta.change > 0 ? (
                        <>
                          <Plus className="w-4 h-4" />
                          {tarjeta.change} nuevo/s
                        </>
                      ) : (
                        <>—</>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>

         
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Tendencias de ventas */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-5 border-b border-border-light dark:border-border-dark pb-2">
                  Tendencias de Ventas
                </h2>
                <div className="rounded-xl border border-border-light dark:border-border-dark overflow-hidden bg-card-light dark:bg-card-dark shadow-lg">
                  <table className="w-full text-sm text-left text-text-muted-light dark:text-text-muted-dark">
                    <thead className="text-xs uppercase bg-background-light dark:bg-background-dark">
                      <tr>
                        <th className="px-6 py-3 font-medium">Fecha</th>
                        <th className="px-6 py-3 font-medium">
                          Total de Ventas
                        </th>
                        <th className="px-6 py-3 font-medium">Pedidos</th>
                        <th className="px-6 py-3 font-medium text-right">
                          Cambio
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.salesTrends.map((dia, idx, arr) => {
                        const siguiente =
                          idx < arr.length - 1
                            ? arr[idx + 1].totalRevenue
                            : null;

                        let cambio = null;
                        let direccion = null;

                        if (siguiente === null) {
                          // Último día, no hay siguiente
                          cambio = null;
                        } else if (siguiente === 0 && dia.totalRevenue === 0) {
                          // Ambos días 0 → sin cambio
                          cambio = 0;
                          direccion = "up";
                        } else if (siguiente === 0) {
                          // Día siguiente 0 → incremento total
                          cambio = 100;
                          direccion = "up";
                        } else {
                          cambio =
                            ((dia.totalRevenue - siguiente) / siguiente) * 100;
                          direccion = cambio >= 0 ? "up" : "down";
                        }

                        const colorCambio =
                          direccion === "up"
                            ? "text-green-500"
                            : "text-red-500";

                        return (
                          <tr
                            key={dia.date}
                            className="border-b border-border-light dark:border-border-dark"
                          >
                            <td className="px-6 py-4 font-medium text-text-light dark:text-text-dark whitespace-nowrap">
                              {dia.date}
                            </td>
                            <td className="px-6 py-4">
                              {dia.totalRevenue.toLocaleString()} €
                            </td>
                            <td className="px-6 py-4">{dia.orders}</td>
                            <td
                              className={`px-6 py-4 text-right flex justify-end items-center gap-1 ${colorCambio}`}
                            >
                              {cambio === null ? (
                                "-"
                              ) : (
                                <>
                                  {direccion === "up" ? (
                                    <TrendingUp className="w-4 h-4" />
                                  ) : (
                                    <TrendingDown className="w-4 h-4" />
                                  )}
                                  {Math.abs(cambio).toFixed(1)}%
                                </>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

       
              <div>
                <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-5 border-b border-border-light dark:border-border-dark pb-2">
                  Acciones Rápidas
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: <PlusCircle aria-label="Agregar Producto" />,
                      title: "Agregar Producto",
                      desc: "Crear un nuevo producto.",
                      to: "/add",
                    },
                    {
                      icon: <UserCog aria-label="Administrar Usuarios" />,
                      title: "Administrar Usuarios",
                      desc: "Ver y gestionar todos los usuarios registrados.",
                      to: "/admin/users",
                    },
                    {
                      icon: <List aria-label="Ver Pedidos" />,
                      title: "Ver Pedidos",
                      desc: "Revisar el historial completo de pedidos.",
                      to: "/admin/orders",
                    },
                  ].map((item, idx) => (
                    <NavLink
                      key={idx}
                      className="flex w-full items-center gap-4 rounded-xl p-4 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-lg hover:shadow-2xl hover:scale-[1.04] transition-all duration-200"
                      to={item.to}
                    >
                      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full text-primary flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-text-light dark:text-text-dark">
                          {item.title}
                        </p>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                          {item.desc}
                        </p>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-5 border-b border-border-light dark:border-border-dark pb-2">
                Pedidos Recientes
              </h2>

              <div className="hidden lg:block rounded-xl border border-border-light dark:border-border-dark overflow-hidden bg-card-light dark:bg-card-dark shadow-lg">
                <table className="w-full text-sm text-left text-text-muted-light dark:text-text-muted-dark">
                  <thead className="text-xs uppercase bg-background-light dark:bg-background-dark">
                    <tr>
                      <th className="px-6 py-3 font-medium">ID Pedido</th>
                      <th className="px-6 py-3 font-medium">Cliente</th>
                      <th className="px-6 py-3 font-medium">Fecha</th>
                      <th className="px-6 py-3 font-medium">Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.recentOrders.map(
                      ({
                        id_pedido,
                        id_usuario,
                        nombre_usuario,
                        fecha,
                        total,
                      }) => (
                        <tr
                          key={id_pedido}
                          className="border-b border-border-light dark:border-border-dark"
                        >
                          <td className="px-6 py-4 font-medium text-text-light dark:text-text-dark whitespace-nowrap">
                            #TEK00{id_pedido}
                          </td>
                          <td className="px-6 py-4">
                            {nombre_usuario || "Invitado"}
                          </td>
                          <td className="px-6 py-4">
                            {new Date(fecha).toLocaleDateString("es-ES")}
                          </td>
                          <td className="px-6 py-4 font-bold text-text-light dark:text-text-dark">
                            {total} €
                          </td>
                          <td className="px-6 py-4 text-right">
                            <NavLink
                              className="font-medium text-primary hover:underline"
                              to={`/pedidos/historial/details/${id_usuario}/${id_pedido}`}
                            >
                              Ver
                            </NavLink>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>


              <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-6 lg:hidden">
                {stats.recentOrders.map(
                  ({ id_pedido, nombre_usuario, id_usuario, fecha, total }) => {
                    const fechaFormateada = new Date(fecha).toLocaleDateString(
                      "es-ES",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      }
                    );
                    return (
                      <div
                        key={id_pedido}
                        className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-5 space-y-2 shadow-lg"
                      >
                        <p className="font-semibold text-text-light dark:text-text-dark">
                          ID: #TEK00{id_pedido}
                        </p>
                        <p className="font-semibold text-text-light dark:text-text-dark">
                          Nombre: {nombre_usuario || "Invitado"}
                        </p>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                          {fechaFormateada}
                        </p>
                        <p className="font-bold text-text-light dark:text-text-dark">
                          {total} €
                        </p>
                        <NavLink
                          to={`/pedidos/historial/details/${id_usuario}/${id_pedido}`}
                          className="text-primary hover:underline inline-block mt-2"
                        >
                          Ver
                        </NavLink>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboardLayout;
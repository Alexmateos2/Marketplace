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
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { NavLink } from "react-router-dom";

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
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <div className="p-10">Cargando estadísticas...</div>;
  if (!stats)
    return <div className="p-10">No se pudieron cargar las estadísticas</div>;

  const cards = [
    {
      label: "Total Revenue",
      value: `$${stats.revenue.total.toLocaleString()}`,
      change: stats.revenue.change,
    },
    {
      label: "Total Orders",
      value: stats.orders.total,
      change: stats.orders.change,
    },
    {
      label: "Total Products",
      value: stats.products.total,
      change: stats.products.new || 0,
    },
    {
      label: "Total Users",
      value: stats.users.total,
      change: stats.users.change,
    },
  ];

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text0">
      <Navbar />
      <div className="flex h-screen w-full">
        <AsideAdmin />
        <main className="flex-1 overflow-y-auto">
          {/* Header */}
          <header className="flex items-center justify-between border-b border-border-light dark:border-border-dark px-10 py-4 bg-white dark:bg-card-dark/80 backdrop-blur-sm">
            <h1 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">
              Dashboard
            </h1>
          </header>

          {/* Cards */}
          <div className="p-10 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card, idx) => {
                const positive = card.change >= 0;
                const color = positive ? "text-green-500" : "text-red-500";

                return (
                  <div
                    key={idx}
                    className="flex flex-col gap-3 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-lg hover:shadow-2xl hover:scale-[1.04] transition-all duration-200"
                  >
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-semibold">
                      {card.label}
                    </p>
                    <p className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">
                      {card.value}
                    </p>
                    <p className={`flex items-center gap-1 font-bold ${color}`}>
                      {positive ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )}
                      {card.change >= 0
                        ? card.change.toFixed(1)
                        : card.change.toFixed(1)}
                      %
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Sales Trends + Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sales Trends */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-5 border-b border-border-light dark:border-border-dark pb-2">
                  Sales Trends
                </h2>
                <div className="rounded-xl border border-border-light dark:border-border-dark overflow-hidden bg-card-light dark:bg-card-dark shadow-lg">
                  <table className="w-full text-sm text-left text-text-muted-light dark:text-text-muted-dark">
                    <thead className="text-xs uppercase bg-background-light dark:bg-background-dark">
                      <tr>
                        <th className="px-6 py-3 font-medium">Date</th>
                        <th className="px-6 py-3 font-medium">Sales Amount</th>
                        <th className="px-6 py-3 font-medium">Orders</th>
                        <th className="px-6 py-3 font-medium text-right">
                          Change
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.salesTrends.map((day, idx, arr) => {
                        const next =
                          idx < arr.length - 1
                            ? arr[idx + 1].totalRevenue
                            : null;
                        const divisor = next !== 0 ? next : 1;
                        const change =
                          next !== null
                            ? ((day.totalRevenue - next) / divisor) * 100
                            : null;
                        const direction = change >= 0 ? "up" : "down";
                        const Color =
                          direction === "up"
                            ? "text-green-500"
                            : "text-red-500";

                        return (
                          <tr
                            key={day.date}
                            className="border-b border-border-light dark:border-border-dark"
                          >
                            <td className="px-6 py-4 font-medium text-text-light dark:text-text-dark whitespace-nowrap">
                              {day.date}
                            </td>
                            <td className="px-6 py-4">
                              ${day.totalRevenue.toLocaleString()}
                            </td>
                            <td className="px-6 py-4">{day.orders}</td>
                            <td
                              className={`px-6 py-4 text-right flex justify-end items-center gap-1 ${Color}`}
                            >
                              {change === null ? (
                                "-"
                              ) : (
                                <>
                                  {direction === "up" ? (
                                    <ArrowUp className="w-4 h-4" />
                                  ) : (
                                    <ArrowDown className="w-4 h-4" />
                                  )}
                                  {Math.abs(change).toFixed(1)}%
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

              {/* Quick Actions */}
              <div>
                <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-5 border-b border-border-light dark:border-border-dark pb-2">
                  Quick Actions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: <PlusCircle />,
                      title: "Add New Product",
                      desc: "Create a new product listing.",
                      to: "/add",
                    },
                    {
                      icon: <UserCog />,
                      title: "Manage Users",
                      desc: "View and manage all registered users.",
                      to: "/admin/users",
                    },
                    {
                      icon: <List />,
                      title: "View All Orders",
                      desc: "Browse the complete order history.",
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

            {/* Recent Orders */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-5 border-b border-border-light dark:border-border-dark pb-2">
                Recent Orders
              </h2>

              {/* Large Table */}
              <div className="hidden lg:block rounded-xl border border-border-light dark:border-border-dark overflow-hidden bg-card-light dark:bg-card-dark shadow-lg">
                <table className="w-full text-sm text-left text-text-muted-light dark:text-text-muted-dark">
                  <thead className="text-xs uppercase bg-background-light dark:bg-background-dark">
                    <tr>
                      <th className="px-6 py-3 font-medium">Order ID</th>
                      <th className="px-6 py-3 font-medium">Customer</th>
                      <th className="px-6 py-3 font-medium">Date</th>
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
                          <td className="px-6 py-4">{nombre_usuario || "Invitado"}</td>
                          <td className="px-6 py-4">
                            {new Date(fecha).toLocaleDateString("es-ES")}
                          </td>
                          <td className="px-6 py-4 font-bold text-text-light dark:text-text-dark">
                            ${total}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <NavLink
                              className="font-medium text-primary hover:underline"
                              to={`/pedidos/historial/details/${id_usuario}/${id_pedido}`}
                            >
                              View
                            </NavLink>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-6 lg:hidden">
                {stats.recentOrders.map(
                  ({ id_pedido, nombre_usuario, id_usuario, fecha, total }) => {
                    const fechaFormateada = new Date(fecha).toLocaleDateString(
                      "es-ES",
                      { day: "2-digit", month: "2-digit", year: "numeric" }
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
                          Nombre: {nombre_usuario}
                        </p>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                          {fechaFormateada}
                        </p>
                        <p className="font-bold text-text-light dark:text-text-dark">
                          ${total}
                        </p>
                        <NavLink
                          to={`/pedidos/historial/details/${id_usuario}/${id_pedido}`}
                          className="text-primary hover:underline inline-block mt-2"
                        >
                          View
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

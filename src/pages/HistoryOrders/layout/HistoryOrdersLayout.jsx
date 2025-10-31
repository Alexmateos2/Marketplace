import React from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import { NavLink } from "react-router-dom";
const HistoryOrdersPage = () => {
  const orders = [
    {
      id: "TK-1234567",
      items: [
        {
          name: "Logitech MX Master 3S Mouse",
          image:
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200",
        },
        {
          name: "Mechanical Keyboard",
          image:
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200",
        },
        {
          name: "Sony WH-1000XM5 Headphones",
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
        },
      ],
      description: "Logitech MX Master 3S + 2 other items",
      date: "October 26, 2023",
      price: 499.0,
      status: "Delivered",
    },
    {
      id: "TK-1234560",
      items: [
        {
          name: "Dell UltraSharp Monitor",
          image:
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200",
        },
      ],
      description: 'Dell 32" 4K Monitor',
      date: "September 15, 2023",
      price: 899.99,
      status: "Shipped",
    },
    {
      id: "TK-1234505",
      items: [
        {
          name: "Anker Power Bank",
          image:
            "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=200",
        },
        {
          name: "USB-C Cable",
          image:
            "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=200",
        },
      ],
      description: "Anker PowerCore 20000 + 1 other item",
      date: "August 02, 2023",
      price: 75.5,
      status: "Canceled",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Navbar />
      <main className="px-6 sm:px-10 lg:px-20 py-8 flex flex-1 justify-center  bg-background-light dark:bg-background-dark min-h-screen font-display">
        <div className="flex flex-col w-full max-w-4xl ">
              <NavLink to="/profile" className="text-sm pb-4 font-medium text-subtle-light dark:text-subtle-dark cursor-pointer "> Back to profile</NavLink>
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          
            <h1 className="text-content-light dark:text-content-dark text-4xl font-black leading-tight">
              Order History
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col sm:flex-row gap-4 items-center md:items-start sm:gap-6 bg-white dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark hover:shadow-md hover:border-blue-500/50 transition-all "
              >
                <div className="flex items-center -space-x-4">
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-center bg-no-repeat bg-cover rounded-lg w-[70px] h-[70px] border-2 border-border-light ring-1 ring-gray-200 "
                      style={{ backgroundImage: `url("${item.image}")` }}
                      title={item.name}
                    />
                  ))}
                </div>

                <div className="flex flex-1 flex-col justify-center items-center md:items-start">
                  <p className="text-content-light dark:text-content-dark text-lg font-bold">
                    Order #{order.id}
                  </p>
                  <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal mt-1">
                    {order.description}
                  </p>
                  <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal">
                    Placed on {order.date}
                  </p>
                </div>

                <div className="flex flex-col items-center md:items-start justify-between gap-2">
                  <p className="text-content-light dark:text-content-dark text-lg font-bold">
                    ${order.price.toFixed(2)}
                  </p>
                  <button className="text-primary text-sm font-bold hover:underline cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryOrdersPage;

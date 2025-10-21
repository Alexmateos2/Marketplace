import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARkAwcfQ1DQ3u2p5o35_TLC9h8l2UVcW8YyURdpjoFp9N_c-hmyd8gWzp4YZxEaYgkDSXv6zFyOa7uCqe0hHXtBVPlKKG7x5ezIBMLbep9Wd0qAxXEwleRosif6MefsNElxFqOZLpvdxJcBIjl_1R5UNcPUb7kh9lAS7ix6SFwC57O2g3-RBBEiY8RpVEsbpcPxblRymCt7QunuFixGZ-nWhyadu2XLm8qcwx1rO-_t4QIG2xMB728klgMAasWh3fY0sgn5tqj4Gw",
  },
  {
    id: 2,
    name: "Smartwatch with Health Tracking",
    price: 199.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJMAYO7PzbWgqzJXsNSdZFN6dRtazKhwv6aN0Bg-p7UC19ErFfEMrjenMYLUOH_0HwZ8sWik1jNXLC8XkRaWYQuPH8DXwU8qjrNHa25jolSkb5lizrhlKqjCIzIjs-x3nOoYTKkTao9K58PCpoCiQy2WookUAN5NTgLNu4LKAZB32CQc28nKF8YM_S4YKwyrR8MQU0aRhbcTdIbUKHL4MUAiGKoXHB4r42eOTit-knGCW7K-bvvjUcWV3WWc5nlvL8eSRYr2Us3fY",
  },
  {
    id: 3,
    name: "Ultra-Thin Laptop with High Performance",
    price: 1299.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCn8In6vCyTt0gpW_SEPwIyEGXJxfOhKscxtpvAIabJD5aRx6ddxNrRWkouW7ILcBAdAlceWvMbpIOegniM_r65qrf7F50qFpu1wL7PYeUU12UPwdTYxnUjAbL6GVOyvvFfj3AX7jiuNbC7LoGCauSIViEwvdvqukjwmiicDO15bu00jZBaWdaQ__uk9ujUWEZ35WnUEpgpJV-q2TasBNP00fd6Os7VbT-vyABEUo3xBNk7KB49WgGmggdsscIZl4RxXj4mDl_zN-Q",
  },
  {
    id: 4,
    name: "Ergonomic Wireless Mouse",
    price: 59.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBz76-3gNzjDJQdp14e-eFH7no-Gn3Vm1vIUvvFjW4q6_N26VXx2WDI7rMiBCdgsR53aPn_oDwkTFByYnOp5ueej5_ta1DQpSYui1CpdFujWyMM5pf361evb4W6YXMClVU7FWBeZYWnPTW1vSgS0iPdMFAGV7GEVolRL8QkyVmLItbC5OmBwB5OokWXYar96yXYNv5_uII8xW-N-sxHiDD3JuJ5elJpVmnZCBd9q1KwAqL2uK-fP9tHjTPjTWlCy0pczGcrPfWzbcE",
  },
  {
    id: 5,
    name: "Mechanical Keyboard with Customizable Keys",
    price: 149.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChc9DW3P8MeP7-HScH6wGsF8yHopzFcG_jtXOFODCPRWl0VbGJLZShpT7KotzgVclalmfS6ifITfRxBa5gjsVOXlFkZJGrkwXgEeFdZvFUVDDDOxrsQZ0lisfGlsXiaMp_b5lZgSWpGT21J0CaPYCVP-wi8yXp-9udpRZqhFyWhagNk29u5a7kgw1vw2i-IG7RpbdZWlP047R6Sh3NG9ouE4FSZzVPmrtN9Fa9S7jKk6x0qII1GoM6sh-7HppDgLm0oiFkv1wuEAY",
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkXvOpHweb3fke1Kb0inaPgIe3ViSmTM76NMt6vQICvx7CLpncur43U7RlDdVrK-Ey0ZVqFlA8IesnWzbn_QO746I9W5Ik6-2PoODeXsIFA6M5tiAhR7RFNnE9aUmU811BDvhPIiiHU6yBh8C3JF_2NpXu3aTMnYRNNyYxhcKq5QunMuSZuVW_YIPsL-Pzf283ubzK9Qyakf3ApIU7FesFPmyAZr6teKAR4Pnd8Blx6xxrdKu1OXSYCY6nv_EHk04hOsdRR6ilW5A",
  },
];


const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden transition-all duration-300"
        >
          <div
            className="relative w-full aspect-square bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>
          <div className="px-4 py-5 flex-grow flex flex-col">
            <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex-grow">
              {product.name}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 font-bold text-lg mt-1">
              ${product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

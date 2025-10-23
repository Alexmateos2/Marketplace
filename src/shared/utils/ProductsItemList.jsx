const products = [
  // Mantén las URLs originales
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    category: "Audio",
    price: 299.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARkAwcfQ1DQ3u2p5o35_TLC9h8l2UVcW8YyURdpjoFp9N_c-hmyd8gWzp4YZxEaYgkDSXv6zFyOa7uCqe0hHXtBVPlKKG7x5ezIBMLbep9Wd0qAxXEwleRosif6MefsNElxFqOZLpvdxJcBIjl_1R5UNcPUb7kh9lAS7ix6SFwC57O2g3-RBBEiY8RpVEsbpcPxblRymCt7QunuFixGZ-nWhyadu2XLm8qcwx1rO-_t4QIG2xMB728klgMAasWh3fY0sgn5tqj4Gw",
  },
  {
    id: 2,
    name: "Smartwatch with Health Tracking",
    category: "Wearables",
    price: 199.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJMAYO7PzbWgqzJXsNSdZFN6dRtazKhwv6aN0Bg-p7UC19ErFfEMrjenMYLUOH_0HwZ8sWik1jNXLC8XkRaWYQuPH8DXwU8qjrNHa25jolSkb5lizrhlKqjCIzIjs-x3nOoYTKkTao9K58PCpoCiQy2WookUAN5NTgLNu4LKAZB32CQc28nKF8YM_S4YKwyrR8MQU0aRhbcTdIbUKHL4MUAiGKoXHB4r42eOTit-knGCW7K-bvvjUcWV3WWc5nlvL8eSRYr2Us3fY",
  },
  {
    id: 3,
    name: "Ultra-Thin Laptop with High Performance",
    category: "Computers",
    price: 1299.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCn8In6vCyTt0gpW_SEPwIyEGXJxfOhKscxtpvAIabJD5aRx6ddxNrRWkouW7ILcBAdAlceWvMbpIOegniM_r65qrf7F50qFpu1wL7PYeUU12UPwdTYxnUjAbL6GVOyvvFfj3AX7jiuNbC7LoGCauSIViEwvdvqukjwmiicDO15bu00jZBaWdaQ__uk9ujUWEZ35WnUEpgpJV-q2TasBNP00fd6Os7VbT-vyABEUo3xBNk7KB49WgGmggdsscIZl4RxXj4mDl_zN-Q",
  },
  {
    id: 4,
    name: "Ergonomic Wireless Mouse",
    category: "Mouse",
    price: 59.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBz76-3gNzjDJQdp14e-eFH7no-Gn3Vm1vIUvvFjW4q6_N26VXx2WDI7rMiBCdgsR53aPn_oDwkTFByYnOp5ueej5_ta1DQpSYui1CpdFujWyMM5pf361evb4W6YXMClVU7FWBeZYWnPTW1vSgS0iPdMFAGV7GEVolRL8QkyVmLItbC5OmBwB5OokWXYar96yXYNv5_uII8xW-N-sxHiDD3JuJ5elJpVmnZCBd9q1KwAqL2uK-fP9tHjTPjTWlCy0pczGcrPfWzbcE",
  },
  {
    id: 5,
    name: "Mechanical Keyboard with Customizable Keys",
    category: "Keyboards",
    price: 149.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChc9DW3P8MeP7-HScH6wGsF8yHopzFcG_jtXOFODCPRWl0VbGJLZShpT7KotzgVclalmfS6ifITfRxBa5gjsVOXlFkZJGrkwXgEeFdZvFUVDDDOxrsQZ0lisfGlsXiaMp_b5lZgSWpGT21J0CaPYCVP-wi8yXp-9udpRZqhFyWhagNk29u5a7kgw1vw2i-IG7RpbdZWlP047R6Sh3NG9ouE4FSZzVPmrtN9Fa9S7jKk6x0qII1GoM6sh-7HppDgLm0oiFkv1wuEAY",
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 79.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkXvOpHweb3fke1Kb0inaPgIe3ViSmTM76NMt6vQICvx7CLpncur43U7RlDdVrK-Ey0ZVqFlA8IesnWzbn_QO746I9W5Ik6-2PoODeXsIFA6M5tiAhR7RFNnE9aUmU811BDvhPIiiHU6yBh8C3JF_2NpXu3aTMnYRNNyYxhcKq5QunMuSZuVW_YIPsL-Pzf283ubzK9Qyakf3ApIU7FesFPmyAZr6teKAR4Pnd8Blx6xxrdKu1OXSYCY6nv_EHk04hOsdRR6ilW5A",
  },

  {
    id: 7,
    name: "High Fidelity Studio Headphones",
    category: "Audio",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Compact Wireless Earbuds",
    category: "Audio",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1517263904808-5dcbb2e9f43b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    name: "Bluetooth Soundbar",
    category: "Audio",
    price: 219.99,
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    name: "Noise-Isolating Over-Ear Headphones",
    category: "Audio",
    price: 279.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 11,
    name: "Wireless Gaming Headset",
    category: "Audio",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 12,
    name: "Smart Speaker with Voice Control",
    category: "Audio",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 13,
    name: "Noise-Canceling In-Ear Monitors",
    category: "Audio",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 14,
    name: "Multimedia Bluetooth Speaker",
    category: "Audio",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 15,
    name: "Wireless Audio Transmitter",
    category: "Audio",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },

  // Mouse
  {
    id: 4,
    name: "Ergonomic Wireless Mouse",
    category: "Mouse",
    price: 59.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz76-3gNzjDJQdp14e-eFH7no-Gn3Vm1vIUvvFjW4q6_N26VXx2WDI7rMiBCdgsR53aPn_oDwkTFByYnOp5ueej5_ta1DQpSYui1CpdFujWyMM5pf361evb4W6YXMClVU7FWBeZYWnPTW1vSgS0iPdMFAGV7GEVolRL8QkyVmLItbC5OmBwB5OokWXYar96yXYNv5_uII8xW-N-sxHiDD3JuJ5elJpVmnZCBd9q1KwAqL2uK-fP9tHjTPjTWlCy0pczGcrPfWzbcE",
  },
  {
    id: 27,
    name: "Ergonomic Wired Mouse",
    category: "Mouse",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 28,
    name: "Gaming RGB Mouse",
    category: "Mouse",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1508873699372-7ae1bb09cd81?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 29,
    name: "Wireless Vertical Mouse",
    category: "Mouse",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1505658514211-5651173c4067?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 30,
    name: "Silent Click Mouse",
    category: "Mouse",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3c66c5?auto=format&fit=crop&w=400&q=80",
  },

  // Keyboards
  {
    id: 5,
    name: "Mechanical Keyboard with Customizable Keys",
    category: "Keyboards",
    price: 149.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChc9DW3P8MeP7-HScH6wGsF8yHopzFcG_jtXOFODCPRWl0VbGJLZShpT7KotzgVclalmfS6ifITfRxBa5gjsVOXlFkZJGrkwXgEeFdZvFUVDDDOxrsQZ0lisfGlsXiaMp_b5lZgSWpGT21J0CaPYCVP-wi8yXp-9udpRZqhFyWhagNk29u5a7kgw1vw2i-IG7RpbdZWlP047R6Sh3NG9ouE4FSZzVPmrtN9Fa9S7jKk6x0qII1GoM6sh-7HppDgLm0oiFkv1wuEAY",
  },
  {
    id: 31,
    name: "Compact Mechanical Keyboard",
    category: "Keyboards",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 32,
    name: "Wireless Bluetooth Keyboard",
    category: "Keyboards",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1516707570263-89b6e6e7ef81?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 33,
    name: "RGB Backlit Keyboard",
    category: "Keyboards",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1519255112250-95c22ace0d63?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 34,
    name: "Ergonomic Split Keyboard",
    category: "Keyboards",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1548644124-7b49cef4c0de?auto=format&fit=crop&w=400&q=80",
  }
];
export default products
import React from "react";
import Navbar from "../../../shared/navbar";
import Footer from "../../../shared/footer";

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">All Products</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Discover items curated by our community of experts.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-end">
            <nav aria-label="Pagination" className="flex items-center gap-2">
              <a className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-500 dark:text-gray-400" href="#">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fillRule="evenodd"></path>
                </svg>
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold text-sm" href="#">1</a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300 font-medium text-sm" href="#">2</a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300 font-medium text-sm" href="#">3</a>
              <span className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-300">...</span>
              <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300 font-medium text-sm" href="#">8</a>
              <a className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-500 dark:text-gray-400" href="#">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fillRule="evenodd"></path>
                </svg>
              </a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-1/4 xl:w-1/5">
            <div className="sticky top-24 space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Filters</h3>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Price</span>
                  <select className="form-select p-2 mt-1 block w-full rounded border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                    <option>All Prices</option>
                    <option>$0 - $100</option>
                    <option>$100 - $500</option>
                    <option>$500+</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Rating</span>
                  <select className="form-select p-2 mt-1 block w-full rounded border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                    <option>Any Rating</option>
                    <option>4 Stars &amp; Up</option>
                    <option>3 Stars &amp; Up</option>
                    <option>2 Stars &amp; Up</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort By</span>
                  <select className="form-select p-2 mt-1 block w-full rounded border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Top Rated</option>
                  </select>
                </label>
              </div>
              <button className="mt-6 w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">Apply Filters</button>
            </div>
          </aside>
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              <div className="group relative flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden transition-all duration-300">
                <div
                  className="relative w-full aspect-square bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARkAwcfQ1DQ3u2p5o35_TLC9h8l2UVcW8YyURdpjoFp9N_c-hmyd8gWzp4YZxEaYgkDSXv6zFyOa7uCqe0hHXtBVPlKKG7x5ezIBMLbep9Wd0qAxXEwleRosif6MefsNElxFqOZLpvdxJcBIjl_1R5UNcPUb7kh9lAS7ix6SFwC57O2g3-RBBEiY8RpVEsbpcPxblRymCt7QunuFixGZ-nWhyadu2XLm8qcwx1rO-_t4QIG2xMB728klgMAasWh3fY0sgn5tqj4Gw')" }}
                ></div>
                <div className="p-4 flex-grow flex flex-col">
                  <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex-grow">Wireless Noise-Canceling Headphones</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-bold text-lg mt-1">$299.99</p>
                </div>
              </div>

              <div className="group relative flex flex-col bg-background-light sm:bg-transparent dark:bg-background-dark rounded-lg overflow-hidden transition-all duration-300">
                <div
                  className="relative w-full aspect-square bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJMAYO7PzbWgqzJXsNSdZFN6dRtazKhwv6aN0Bg-p7UC19ErFfEMrjenMYLUOH_0HwZ8sWik1jNXLC8XkRaWYQuPH8DXwU8qjrNHa25jolSkb5lizrhlKqjCIzIjs-x3nOoYTKkTao9K58PCpoCiQy2WookUAN5NTgLNu4LKAZB32CQc28nKF8YM_S4YKwyrR8MQU0aRhbcTdIbUKHL4MUAiGKoXHB4r42eOTit-knGCW7K-bvvjUcWV3WWc5nlvL8eSRYr2Us3fY')" }}
                ></div>
                <div className="p-4 flex-grow flex flex-col">
                  <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex-grow">Smartwatch with Health Tracking</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-bold text-lg mt-1">$199.99</p>
                </div>
              </div>

              <div className="group relative flex flex-col bg-background-light sm:bg-transparent dark:bg-background-dark rounded-lg overflow-hidden transition-all duration-300">
                <div
                  className="relative w-full aspect-square bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCn8In6vCyTt0gpW_SEPwIyEGXJxfOhKscxtpvAIabJD5aRx6ddxNrRWkouW7ILcBAdAlceWvMbpIOegniM_r65qrf7F50qFpu1wL7PYeUU12UPwdTYxnUjAbL6GVOyvvFfj3AX7jiuNbC7LoGCauSIViEwvdvqukjwmiicDO15bu00jZBaWdaQ__uk9ujUWEZ35WnUEpgpJV-q2TasBNP00fd6Os7VbT-vyABEUo3xBNk7KB49WgGmggdsscIZl4RxXj4mDl_zN-Q')" }}
                ></div>
                <div className="p-4 flex-grow flex flex-col">
                  <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex-grow">Ultra-Thin Laptop with High Performance</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-bold text-lg mt-1">$1299.99</p>
                </div>
              </div>

              <div className="group relative flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden transition-all duration-300">
                <div
                  className="relative w-full aspect-square bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBz76-3gNzjDJQdp14e-eFH7no-Gn3Vm1vIUvvFjW4q6_N26VXx2WDI7rMiBCdgsR53aPn_oDwkTFByYnOp5ueej5_ta1DQpSYui1CpdFujWyMM5pf361evb4W6YXMClVU7FWBeZYWnPTW1vSgS0iPdMFAGV7GEVolRL8QkyVmLItbC5OmBwB5OokWXYar96yXYNv5_uII8xW-N-sxHiDD3JuJ5elJpVmnZCBd9q1KwAqL2uK-fP9tHjTPjTWlCy0pczGcrPfWzbcE')" }}
                ></div>
                <div className="p-4 flex-grow flex flex-col">
                  <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex-grow">Ergonomic Wireless Mouse</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-bold text-lg mt-1">$59.99</p>
                </div>
              </div>

              <div className="group relative flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden transition-all duration-300">
                <div
                  className="relative w-full aspect-square bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChc9DW3P8MeP7-HScH6wGsF8yHopzFcG_jtXOFODCPRWl0VbGJLZShpT7KotzgVclalmfS6ifITfRxBa5gjsVOXlFkZJGrkwXgEeFdZvFUVDDDOxrsQZ0lisfGlsXiaMp_b5lZgSWpGT21J0CaPYCVP-wi8yXp-9udpRZqhFyWhagNk29u5a7kgw1vw2i-IG7RpbdZWlP047R6Sh3NG9ouE4FSZzVPmrtN9Fa9S7jKk6x0qII1GoM6sh-7HppDgLm0oiFkv1wuEAY')" }}
                ></div>
                <div className="p-4 flex-grow flex flex-col">
                  <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex-grow">Mechanical Keyboard with Customizable Keys</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-bold text-lg mt-1">$149.99</p>
                </div>
              </div>

              <div className="group relative flex flex-col bg-background-light dark:bg-background-dark rounded-lg overflow-hidden transition-all duration-300">
                <div
                  className="relative w-full aspect-square bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkXvOpHweb3fke1Kb0inaPgIe3ViSmTM76NMt6vQICvx7CLpncur43U7RlDdVrK-Ey0ZVqFlA8IesnWzbn_QO746I9W5Ik6-2PoODeXsIFA6M5tiAhR7RFNnE9aUmU811BDvhPIiiHU6yBh8C3JF_2NpXu3aTMnYRNNyYxhcKq5QunMuSZuVW_YIPsL-Pzf283ubzK9Qyakf3ApIU7FesFPmyAZr6teKAR4Pnd8Blx6xxrdKu1OXSYCY6nv_EHk04hOsdRR6ilW5A')" }}
                ></div>
                <div className="p-4 flex-grow flex flex-col">
                  <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex-grow">Portable Bluetooth Speaker</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-bold text-lg mt-1">$79.99</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 lg:hidden">
              <nav aria-label="Pagination" className="flex items-center gap-2">
                <a className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-500 dark:text-gray-400" href="#">
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fillRule="evenodd"></path>
                  </svg>
                </a>
                <a className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold text-sm" href="#">1</a>
                <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300 font-medium text-sm" href="#">2</a>
                <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300 font-medium text-sm" href="#">3</a>
                <span className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-300">...</span>
                <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300 font-medium text-sm" href="#">8</a>
              </nav>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;

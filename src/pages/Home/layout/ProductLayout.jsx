import React from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/footer";

const ProductPage = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-background-dark dark:text-content-dark bg-background-light text-content-light font-display">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-40 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6">
            <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <a className="hover:text-primary" href="#">
                Tech
              </a>
              <span className="mx-2">/</span>
              <span className="text-gray-700 dark:text-gray-300">Audio</span>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/*Imágenes y especificaciones */}
            <div className="flex flex-col order-2 lg:order-1">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 aspect-[4/3]">
                <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBX492x_T4neNW7Bxet6V4UUV9F6Z0qLQrvltFXCTIuYPe5DbATXJDXU-Kfhy5lEUH7Gqq82gX46JDHd9KH-d1lbBdqNmjCDUEjRYYTPJcBXoWeNu1hh1oS1Q_R0MSsn-RutOlF-R_X0G4ayLwoJSFbun43M8iTFbrh0m-VbC7GEUrmVt_p51_R04fdP_chDrhoxbW0rcC-I7goUkKRvXHPBZL9YOupBQKK-fN9ctqxWwPPX8oy9BmuUc5Bm24cnjBAKqSGrvXXWss")',
                    }}
                  ></div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6fA2jPYZfQ5Zf_xSevCByaniM6tu2xMYSG7cb--7OuwKlwxSPQVsI57zGvj_tL6kg8eZau_QRx69SA3aMkp-Xf8tGe0ltLtl626FLGN0WHbvRYTH_UL90WDx5vn4TstqBfI0VqYVZYeU1nFNOue94Mqw8ci7HRySURHa-eeBfI0JyfckGmrgIjpt0jv9Y9LQSm3uUg5eiecWoWWkJW1oupWUG7qnZ5hsamBn0ZHG8uCCs3e0u45ZWYfwOvAPUCEdWanF6sE1YYlc")',
                    }}
                  ></div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYlmmja244Fkd6a9HwotZXcbYXrRINJ0YqL6UxCh04IDyQwtf2ZpWddM-xqwPq5j2870EX4eBGymYoWkMI-uRQH1LT_Em3ItPyNLZbhqDbML1jU3rPE9fomea1mTp4O6erLJXntpWVpd3Qy6-sKOu2njHqiLpStxTZFKTTMS204VoHEGL_UbZ9V4PWw7AxJodVWmNZJggJ3zu9CQqhejnmvvZ-QBPgLD78CIvY-Bi1k1-vK2Bc2c-aSyAdKJfO9v4e-IIKnaWSLFA")',
                    }}
                  ></div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Specifications
                </h2>
                <div className="divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800">
                  <div className="py-4 grid grid-cols-3 gap-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Connectivity
                    </p>
                    <p className="text-sm col-span-2 text-gray-800 dark:text-gray-200">
                      Bluetooth 5.0
                    </p>
                  </div>
                  <div className="py-4 grid grid-cols-3 gap-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Battery Life
                    </p>
                    <p className="text-sm col-span-2 text-gray-800 dark:text-gray-200">
                      Up to 30 hours
                    </p>
                  </div>
                  <div className="py-4 grid grid-cols-3 gap-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Noise Cancellation
                    </p>
                    <p className="text-sm col-span-2 text-gray-800 dark:text-gray-200">
                      Active Noise Cancellation
                    </p>
                  </div>
                  <div className="py-4 grid grid-cols-3 gap-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Weight
                    </p>
                    <p className="text-sm col-span-2 text-gray-800 dark:text-gray-200">
                      250g
                    </p>
                  </div>
                  <div className="py-4 grid grid-cols-3 gap-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Color
                    </p>
                    <p className="text-sm col-span-2 text-gray-800 dark:text-gray-200">
                      Midnight Black
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  descripción y review */}
            <div className="flex flex-col order-1 lg:order-2">
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-xl p-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Wireless Over-Ear Headphones
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Experience immersive sound with these wireless over-ear
                  headphones, designed for comfort and exceptional audio
                  quality. Perfect for music lovers and professionals alike.
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span
                    className="text-4xl font-black text-gray-900 dark:text-white font-display"
                    content="299"
                    itemProp="price"
                  >
                    $299
                  </span>
                </div>
                <button className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all">
                  Add to Cart
                </button>
              </div>

              <div className="mt-8 bg-background-light dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Expert Review
                </h2>
                <div className="flex items-start gap-4">
                  <img
                    alt="Ethan Carter"
                    className="w-12 h-12 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnPDzJcMZziYykcoTL8J0llTXjQhuVgoFS5kaRslcUxTveESdKSoIeOWOZkXuY0Tz-MTgebtvZ7QCNLiHPFUq9GtchxXFaj9vudR_T10GJdBqrkYLFBjrFk6o9RZr0ewMDdQuOhT3-Ycr7AHSQs5sEa8HO_1FkaD9bKZO_S82ZQQdeNdwmD6exVcr4YhNUOyVKTc8WRSo_3ezwYk3iE4znU53VV29a2ikgoVrbKeK6Vwe1ShJCMb5nbKClDiQMGADJGhvG8QtlA8s"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          Ethan Carter
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Audio Specialist
                        </p>
                      </div>
                      <div className=" text-subtle-light dark:text-subtle-dark text-lg font-bold">
                        8/10
                      </div>
                    </div>
                    <blockquote className="text-base text-gray-600 dark:text-gray-300 italic">
                      "These headphones are a game-changer! The sound quality is
                      superb, with rich bass and clear highs. The
                      noise-canceling feature works wonders, and they're
                      incredibly comfortable to wear for extended periods. A
                      top-tier choice for any audiophile."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;

import React from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import { NavLink } from "react-router-dom";


//Todas las categorias disponibles

const AllCategoriesPage = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-background-dark bg-background-light dark:text-white font-display transition-colors">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight text-content-light dark:text-content-dark sm:text-5xl">
              Compra por categoría
            </h2>
            <p className="mt-4 text-lg text-subtle-light dark:text-subtle-dark">
              Explora nuestra selección curada de productos tecnológicos, elegidos cuidadosamente por expertos.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            <NavLink
              className="group relative aspect-[4/3] flex flex-col items-center justify-end overflow-hidden rounded-xl bg-surface-light shadow-sm transition-all hover:shadow-lg"
              to="/products/Audio"
            >
              <div className="absolute inset-0 z-0">
                <img
                  alt="Audio"
                  className="h-full w-full object-top object-cover transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACP6Y_ZfCUJHIbui17CRKFgU0o2B63Q5rEantbgDJeHBl8aCrenxtT-ekg6PiDWLELzMNBw_RLIS-MBaVys78Yk_qj3njPWIj0Hnl9Lsl_GlRtkK4OBaA1L1Ko4mL5dBeC1d31CE7dGcdXEVhZUJPtqHsMe7121IHEhjUDn9YICzOxZ4u6F9td46WSo_0A3fKQrixJl3tmgYS6GjMeL8iUrxRIHXQgSzxI8HLjnB7j682LI3KiNm2la4g06EM9c18tcCNr1kz53p8"
                />
              </div>
              <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-6 text-center">
                <h3 className="text-lg font-bold text-white">Audio</h3>
              </div>
            </NavLink>

            <NavLink
              className="group relative aspect-[4/3] flex flex-col items-center justify-end overflow-hidden rounded-xl bg-surface-light shadow-sm transition-all hover:shadow-lg"
              to="/products/Teclados"
            >
              <div className="absolute inset-0 z-0">
                <img
                  alt="Teclados overlay"
                  className="h-full  w-full object-cover object-center transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRYp1AoRf_Zefizn299S8H_b0IddBYZJvzrV51SSo6x2Zq5u3ge2wPGsmggVf05JQYsxWx9Hw3eN4Fokl3Y9j4vgHrPI-m3G05MxspXKeRSDJW8jtOZ463H2Y9DdvS_gsND47-rKR94LiptDNTjM1OpahNPiOdUgzKW4x1rQeIgXp4Zbt4C0PuTHaPKS_9ThV7kLE_DnmacqQ9YO3jRER870eYHdzTJUOQeQhhCIxkrP3JeIB4pL5uKR2mhN4oYZzUzbDUdtyFWOo"
                />
              </div>
              <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-6 text-center">
                <h3 className="text-lg font-bold text-white">Teclados</h3>
              </div>
            </NavLink>

            <NavLink
              className="group relative aspect-[4/3] flex flex-col items-center justify-end overflow-hidden rounded-xl bg-surface-light shadow-sm transition-all hover:shadow-lg"
              to="/products/Ratones"
            >
              <div className="absolute inset-0  z-0">
                <img
                  alt="Raton overlay"
                  className="h-full saturate-200 w-full object-cover object-center transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCImcWzp1Tybhp4xGfvdl8znQXSB5R-AU1GxAnEIGeqO8U9KBPlQ9_DQuZbNYAx0b1SqYsfFZq4pM1Qx_Jgqzp_9tyDlr0vxG6cGjh-aVNhCTCJq_t2dL2tpykvK-2LHbQ4AYAdo5jQU7tf5LGg8hI-igRqYymvBRjjgpynTkbEZENOQUWY48Bimq9OXI3qwH-J2p7hAogNAEU3Dvr6hBjQv15XuWrIJIxUE_3S-AuMevuwc6LdPmGhfLI3rtx5GtTdfi8dgEnYwyk"
                />
              </div>
              <div className="relative  z-10 w-full bg-gradient-to-t from-black/70 to-transparent p-6 text-center">
                <h3 className="text-lg font-bold text-white">Ratones</h3>
              </div>
            </NavLink>

            <NavLink
              className="group relative aspect-[4/3] flex flex-col items-center justify-end overflow-hidden rounded-xl bg-surface-light shadow-sm transition-all hover:shadow-lg"
              to="/products/Monitores"
            >
              <div className="absolute inset-0 z-0">
                <img
                  alt="Monitores oberlay"
                  className="h-full   w-full object-cover object-center transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_oQwvllipXr7mCki-z_Cvu6xkjX7vrtPdCp1UrTMj0Zg_-VQjAQZFWkLHX0aDi2zepJIiuN4oeVgm43mb2bbD3UEiQV_B6W4QsQNmstCy6uIHucLvulKhSYAQ6aX_Vgn6CEsxPTKWZHhSd5VH4CysD_ydU2wniZqFomrycfazNmxACGLCEhpK-6GuXx9NrlktfunQf6jPtH1ZFq5cBLET3iHKQx4Nkpt8Tb7Ize-bXF1-BEpbf3WVk_DxgtesQCIuMgDbYY0NuY4"
                />
              </div>
              <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-6 text-center">
                <h3 className="text-lg font-bold text-white">Monitores</h3>
              </div>
            </NavLink>

            <NavLink
              className="group relative aspect-[4/3] flex flex-col items-center justify-end overflow-hidden rounded-xl bg-surface-light shadow-sm transition-all hover:shadow-lg"
              to="/products/Laptops"
            >
              <div className="absolute inset-0 z-0">
                <img
                  alt="Laptops"
                  className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLp0DGIbPw4-CtvWj1eOANDHY6MWS_816qE7CQgSX1C56oxA-vaOSkHr91RJhE284HwF60stlvEQtZrLXvCPy-STKM0DgIKGtJwhX_2FJSxU8WrWAw2VcBAlM_8dyFf29boo17ANdyqN8vOhkfjpMp5hXjANjaxtJPTLacGQwNl4pH1MJrSLV_BCudC76YCr0Rm_8L6XR9JHNR4AZRJgkS6oBB6zJ4fBzPyM4YVumB4KS9PR-hnRDet6YBqp9aA2yWbLrtg5tj1Ck"
                />
              </div>
              <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-6 text-center">
                <h3 className="text-lg font-bold text-white">Laptops</h3>
              </div>
            </NavLink>

            <NavLink
              className="group relative aspect-[4/3] flex flex-col items-center justify-end overflow-hidden rounded-xl bg-surface-light shadow-sm transition-all hover:shadow-lg"
              to="/products/Smartphones"
            >
              <div className="absolute inset-0 z-0">
                <img
                  alt="Phones"
                  className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkmVgdtJKHZcQtl1brncTcd8KBKIaWWYQ6Od1fxA4yZfWRo_JG1I8pXZmTYgsIUbpxLHQ4u1-Hx1dH47xNhbnLsMN2yWOe3lMYB-MOGTIq0qlQAtHlSbgZX99tV8TubfReSDyrVO2M_ab_eXf62YCnwc6jnx85SJgDCRQMbT1kb1Cf8tOIldPYZq0hqSxnIDW6F0r0DRSrVPPV13-6BR4OxtId--8av-VGkVpNPdt92GLV4rXDZut2zoshMTqWqYVFF63y26HCceo"
                />
              </div>
              <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-6 text-center">
                <h3 className="text-lg font-bold text-white">Smartphones</h3>
              </div>
            </NavLink>

            <NavLink
              className="group relative aspect-[4/3] flex flex-col items-center justify-end overflow-hidden rounded-xl bg-surface-light shadow-sm transition-all hover:shadow-lg"
              to="/products/Wearables"
            >
              <div className="absolute inset-0 z-0">
                <img
                  alt="Wearables"
                  className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTRRw3qd5NHJ88Acm7jTGtVugcRH6tBx33gpFYrzfafzdnzIDIkqtg0S9zAP0O7zGmBbDP_XMYC7G1s4YjIwZrqosTgt2kvmZFOnb5yp9_B-hK4fM2IBVlYulkoEkRa_ajdPBN5IqiuuVS5ZUC0U4PbVsrPHthxrBx5JgTw4p0Tbl3KRIxWWWaunrbKXpCj4kJvRzCQxxaxZvth0gAaap1cWVXjNqnzdDN4lcY0QoBkmMwnzeLbMAbb3l58UqzWbHlKVEUYiUwbtg"
                />
              </div>
              <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-6 text-center">
                <h3 className="text-lg font-bold text-white">Wearables</h3>
              </div>
            </NavLink>

            <NavLink
              className="group relative aspect-[4/3] flex flex-col items-center justify-end overflow-hidden rounded-xl bg-surface-light shadow-sm transition-all hover:shadow-lg"
              to="/products/Accesorios"
            >
              <div className="absolute inset-0 z-0">
                <img
                  alt="Accesorios overlay"
                  className="h-full w-full object-cover object-[center_90%] transition-transform group-hover:scale-105"
                  src="/images/unnamed(9).png"
                />
              </div>
              <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-6 text-center">
                <h3 className="text-lg font-bold text-white">Accesorios</h3>
              </div>
            </NavLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllCategoriesPage;

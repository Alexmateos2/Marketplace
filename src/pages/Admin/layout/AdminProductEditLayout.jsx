import React, { useEffect, useState } from "react";
import { Edit, Trash2, Plus, Save } from "lucide-react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer.jsx";
import AsideAdmin from "../components/AsideAdmin";
import { NavLink, useParams } from "react-router-dom";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

const AdminProductEditLayout = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/productos/${id}`);
        if (!res.ok) throw new Error("Producto no encontrado");
        const data = await res.json();
        setProducto(data);
      } catch (err) {
        console.error("Error cargando producto:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 dark:text-gray-300">Cargando producto...</p>
      </div>
    );
  }

  if (!producto) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 dark:text-red-400">Producto no encontrado</p>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display transition-colors">
      <Navbar />
      <div className="flex gap-2 ">
        <AsideAdmin />
        <main className="flex flex-1 flex-col p-6 lg:p-6">
          <div className="flex flex-col mx-auto w-full max-w-4xl gap-8">
       
            <div className="flex flex-col gap-2">
              <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 pb-2">
                <NavLink className="hover:text-primary" to="/admin/products">Products</NavLink>
                <span className="mx-2">/</span>
                <span className="text-gray-700 dark:text-gray-300">Editar producto</span>
              </nav>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-content-light dark:text-surface-light">
                Edit {producto.nombre}
              </h1>
            </div>

            {/* Formulario */}
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Imagen */}
                <div className="lg:col-span-1">
                  <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-6">
                    <h3 className="text-lg font-semibold text-content-light dark:text-surface-light">
                      Product Image
                    </h3>
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative w-full">
                        {producto.imagen && (
                          <AdvancedImage
                            cldImg={cld
                              .image(producto.imagen)
                              .resize(fill().width(400).height(400).gravity("auto"))
                              .quality("auto")
                              .format("auto")}
                            alt={producto.nombre}
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                          />
                        )}
                        <button className="absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-primary text-surface-light hover:bg-primary/90 shadow-md">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-center">
                        <div className="flex flex-col text-sm text-subtle-light dark:text-subtle-dark justify-center">
                          <label className="relative cursor-pointer font-medium text-primary hover:brightness-110 transition-all">
                            <span>Subir un archivo</span>
                            <input accept="image/*" className="hidden" type="file" />
                          </label>
                          <div className="pl-1">o arrastra y suelta</div>
                          <div className="text-xs text-muted-light dark:text-muted-dark pt-1">
                            PNG, JPG, GIF hasta 10MB
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detalles */}
                <div className="lg:col-span-2">
                  <div className="flex flex-col gap-6 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-6">
                    <h3 className="text-lg font-semibold text-content-light dark:text-surface-light">
                      Product Details
                    </h3>
                    <div className="grid grid-cols-1 gap-y-4 gap-x-4">
                      <div>
                        <label className="block text-sm font-medium text-subtle-light dark:text-subtle-dark mb-1.5" htmlFor="product-name">
                          Product Name
                        </label>
                        <input
                          id="product-name"
                          type="text"
                          defaultValue={producto.nombre}
                          className="w-full rounded-lg border border-border-light dark:border-border-dark bg-transparent py-2 px-3 text-sm focus:border-primary focus:ring-primary dark:text-surface-light dark:placeholder-slate-400"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-subtle-light dark:text-subtle-dark mb-1.5" htmlFor="product-price">
                            Price
                          </label>
                          <input
                            id="product-price"
                            type="number"
                            defaultValue={producto.precio}
                            className="w-full rounded-lg border border-border-light dark:border-border-dark bg-transparent py-2 px-3 text-sm focus:border-primary focus:ring-primary dark:text-surface-light dark:placeholder-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-subtle-light dark:text-subtle-dark mb-1.5" htmlFor="product-stock">
                            Stock
                          </label>
                          <input
                            id="product-stock"
                            type="number"
                            defaultValue={producto.stock}
                            className="w-full rounded-lg border border-border-light dark:border-border-dark bg-transparent py-2 px-3 text-sm focus:border-primary focus:ring-primary dark:text-surface-light dark:placeholder-slate-400"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-subtle-light dark:text-subtle-dark mb-1.5" htmlFor="product-description">
                          Description
                        </label>
                        <textarea
                          id="product-description"
                          rows="4"
                          defaultValue={producto.descripcion}
                          className="w-full rounded-lg border border-border-light dark:border-border-dark bg-transparent py-2 px-3 text-sm focus:border-primary focus:ring-primary dark:text-surface-light dark:placeholder-slate-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Especificaciones */}
              <div className="flex flex-col gap-6 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-content-light dark:text-surface-light">
                    Specifications
                  </h3>
                  <button
                    className="flex h-9 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-3 text-sm font-bold text-surface-light hover:bg-primary/90 transition-colors"
                    type="button"
                  >
                    <Plus className="w-4 h-4" />
                    <span className="truncate">Add Attribute</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {producto.especificaciones.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        className="flex-1 w-1/3 rounded-lg border border-border-light dark:border-border-dark bg-transparent py-2 px-3 text-sm focus:border-primary focus:ring-primary dark:text-surface-light dark:placeholder-slate-400"
                        placeholder="Attribute"
                        type="text"
                        defaultValue={spec.nombre}
                      />
                      <input
                        className="flex-1 w-2/3 rounded-lg border border-border-light dark:border-border-dark bg-transparent py-2 px-3 text-sm focus:border-primary focus:ring-primary dark:text-surface-light dark:placeholder-slate-400"
                        placeholder="Value"
                        type="text"
                        defaultValue={spec.descripcion}
                      />
                      <button
                        className="p-2 text-slate-500 hover:text-red-500 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                        type="button"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reseñas */}
              <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-6">
                <h3 className="text-lg font-semibold text-content-light dark:text-surface-light">
                  Expert Review
                </h3>
                {producto.resenas.map((res, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {res.autor || "Ethan Carter"}
                      </p>
                      <p className="text-subtle-light dark:text-subtle-dark text-lg font-bold">
                        {res.valoracion}/10
                      </p>
                    </div>
                    <blockquote className="text-base text-content-light dark:text-content-dark">
                      "{res.descripcion}"
                    </blockquote>
                  </div>
                ))}
              </div>

              {/* Botones */}
              <div className="flex justify-end gap-4">
                <button
                  className="h-10 cursor-pointer items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 px-4 text-sm font-bold text-subtle-light dark:text-slate-200 hover:bg-surface-light dark:hover:bg-slate-700"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-surface-light shadow-sm hover:bg-primary/90"
                  type="submit"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminProductEditLayout;

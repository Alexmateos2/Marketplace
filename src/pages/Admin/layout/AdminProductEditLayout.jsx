import React, { useEffect, useState } from "react";
import { FilePlus, Trash2, Plus, Save } from "lucide-react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer.jsx";
import AsideAdmin from "../components/AsideAdmin";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

const AdminProductEditLayout = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newImage, setNewImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const addSpec = () => {
    setProducto({
      ...producto,
      especificaciones: [
        ...producto.especificaciones,
        { nombre: "", descripcion: "" },
      ],
    });
  };

  const removeSpec = (index) => {
    setProducto({
      ...producto,
      especificaciones: producto.especificaciones.filter((_, i) => i !== index),
    });
  };

  const handleSpecChange = (index, field, value) => {
    const newSpecs = [...producto.especificaciones];
    newSpecs[index][field] = value;

    setProducto({ ...producto, especificaciones: newSpecs });
  };

  const handleReviewChange = (index, field, value) => {
    const newReviews = [...producto.resenas];
    newReviews[index][field] = value;
    setProducto({ ...producto, resenas: newReviews });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const specsFiltradas = producto.especificaciones.filter(
        (spec) => spec.nombre.trim() !== "" || spec.descripcion.trim() !== ""
      );

      // Manejo de imagen
      let imageUrl = producto.imagen;
      if (newImage) {
        const formData = new FormData();
        formData.append("file", newImage);
        formData.append("upload_preset", "marketplace_products");

        const uploadRes = await fetch(
          `https://api.cloudinary.com/v1_1/dbbjrmvou/image/upload`,
          { method: "POST", body: formData }
        );
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.public_id;
      }

      const updatedProduct = {
        ...producto,
        especificaciones: specsFiltradas,
        imagen: imageUrl,
      };

      const res = await fetch(`http://localhost:3000/productos/edit/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) throw new Error("Error al actualizar el producto");

      alert("Producto actualizado correctamente");
      navigate(`/product/${id}`);
    } catch (err) {
      console.error("Error actualizando producto:", err);
      alert("Hubo un error al guardar los cambios");
    }
  };

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
      <div className="flex gap-2">
        <AsideAdmin />
        <main className="flex flex-1 flex-col p-4 sm:p-6 lg:p-6 overflow-hidden">
          <div className="flex flex-col mx-auto w-full max-w-4xl gap-8">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 pb-2">
                <NavLink className="hover:text-primary" to="/admin/products">
                  Products
                </NavLink>
                <span className="mx-2">/</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Editar producto
                </span>
              </nav>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-content-light dark:text-surface-light">
                Edit Product
              </h1>
            </div>

            {/* Formulario */}
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 items-start">
                {/* Imagen */}
                 <div className="lg:col-span-1 flex flex-col">
                  <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-6">
                    <h3 className="text-lg font-semibold text-content-light dark:text-surface-light">
                      Product Image
                    </h3>
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative w-full">
                        {producto.imagen && !preview && (
                          <AdvancedImage
                            cldImg={cld
                              .image(preview ? preview : producto.imagen)
                              .resize(
                                fill().width(400).height(400).gravity("auto")
                              )
                              .quality("auto")
                              .format("auto")}
                            alt={producto.nombre}
                            className="bg-center bg-no-repeat mx-auto aspect-square bg-cover rounded-lg"
                          />
                        )}{" "}
                        {preview && (
                          <>
                            <img src={preview} alt="" />
                            <span className="absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-primary text-surface-light hover:bg-primary/90 shadow-md">
                              <FilePlus className="w-4 h-4" />
                            </span>
                          </>
                        )}
                      </div>
                      <div className="text-center">
                        <div className="flex flex-col text-sm text-subtle-light dark:text-subtle-dark justify-center">
                          <label className="relative cursor-pointer font-medium text-primary hover:brightness-110 transition-all">
                            <span>Subir un archivo</span>
                            <input
                              accept="image/*"
                              className="hidden"
                              type="file"
                              onChange={handleImageChange}
                            />
                          </label>
                          <div className="pl-1">o arrastra y suelta</div>
                          <div className="text-xs text-muted-light dark:text-muted-dark pt-1">
                            PNG, JPG, hasta 10MB
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detalles */}
                <div className="md:col-span-2">
                  <div className="flex flex-col gap-6 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-6">
                    <h3 className="text-lg font-semibold text-content-light dark:text-surface-light">
                      Product Details
                    </h3>
                    <div className="grid grid-cols-1 gap-y-4 gap-x-4">
                      <div>
                        <label className="block text-sm font-medium text-subtle-light dark:text-subtle-dark mb-1.5">
                          Product Name
                        </label>
                        <input
                          type="text"
                          value={producto.nombre}
                          onChange={(e) =>
                            setProducto({ ...producto, nombre: e.target.value })
                          }
                          className="w-full py-2 px-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">
                        <div>
                          <label className="block text-sm font-medium text-subtle-light dark:text-subtle-dark mb-1.5">
                            Category
                          </label>
                          <select
                            value={producto.id_categoria}
                            onChange={(e) =>
                              setProducto({
                                ...producto,
                                id_categoria: e.target.value,
                              })
                            }
                            className="w-full py-2 px-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light text-foreground-light dark:text-foreground-dark dark:bg-background-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <option value="">Selecciona una categoría</option>
                            <option value="1">Audio</option>
                            <option value="2">Ratones</option>
                            <option value="3">Teclados</option>
                            <option value="4">Laptops</option>
                            <option value="5">Wearables</option>
                            <option value="6">Monitores</option>
                            <option value="7">Smartphones</option>
                            <option value="8">Accesorios</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-subtle-light dark:text-subtle-dark mb-1.5">
                            Price
                          </label>
                          <input
                            type="number"
                            value={producto.precio}
                            onChange={(e) =>
                              setProducto({
                                ...producto,
                                precio: e.target.value,
                              })
                            }
                            className="w-full py-2 px-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-subtle-light dark:text-subtle-dark mb-1.5">
                            Stock
                          </label>
                          <input
                            type="number"
                            value={producto.stock}
                            onChange={(e) =>
                              setProducto({
                                ...producto,
                                stock: e.target.value,
                              })
                            }
                            className="w-full py-2 px-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-subtle-light dark:text-subtle-dark mb-1.5">
                          Description
                        </label>
                        <textarea
                          rows="4"
                          value={producto.descripcion}
                          onChange={(e) =>
                            setProducto({
                              ...producto,
                              descripcion: e.target.value,
                            })
                          }
                          className="w-full bg-background-light  h-60 md:h-auto dark:bg-background-dark rounded-lg border border-border-light dark:border-border-dark p-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground-light dark:text-foreground-dark"
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
                    onClick={addSpec}
                    type="button"
                    className="flex h-9 items-center justify-center gap-2 rounded-lg bg-primary px-3 text-sm font-bold text-surface-light hover:bg-primary/90 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span className="truncate">Add Attribute</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {producto.especificaciones.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        className="flex-1 w-1/3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-2 px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground-light dark:text-foreground-dark"
                        placeholder="Attribute"
                        value={spec.nombre}
                        onChange={(e) =>
                          handleSpecChange(idx, "nombre", e.target.value)
                        }
                      />
                      <input
                        className="flex-1 w-2/3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-2 px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground-light dark:text-foreground-dark"
                        placeholder="Value"
                        value={spec.descripcion}
                        onChange={(e) =>
                          handleSpecChange(idx, "descripcion", e.target.value)
                        }
                      />
                      <button
                        onClick={() => removeSpec(idx)}
                        type="button"
                        className="p-2 text-slate-500 hover:text-red-500 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reseñas */}
              <div className="flex flex-col gap-6 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-content-light dark:text-surface-light">
                    Expert Review
                  </h3>
                </div>
                <div className="space-y-4">
                  {producto.resenas.map((res, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-4 p-4 border-t border-border-light dark:border-border-dark  bg-surface-light dark:bg-surface-dark"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-content-light dark:text-surface-light">
                            Ethan Carter
                          </p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-medium text-subtle-light dark:text-subtle-dark">
                            Rating (1-10)
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="10"
                            step="0.1"
                            className="text-sm rounded-lg py-2 px-3 font-bold text-subtle-light dark:text-subtle-dark w-24 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-center focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            value={res.valoracion}
                            onChange={(e) =>
                              handleReviewChange(
                                idx,
                                "valoracion",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-subtle-light dark:text-subtle-dark mb-1.5 block">
                          Review
                        </label>
                        <textarea
                          className="text-sm w-full h-60 md:h-full bg-background-light dark:bg-background-dark p-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-content-light dark:text-content-dark"
                          placeholder="Review description"
                          rows="4"
                          maxLength={500}
                          value={res.descripcion}
                          onChange={(e) =>
                            handleReviewChange(
                              idx,
                              "descripcion",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botones */}
              <div className="flex justify-end gap-4">
                <button
                  className="h-10 rounded-lg px-4 text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  type="button"
                  onClick={() => navigate("/admin/products")}
                >
                  Cancel
                </button>
                <button
                  className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-surface-light hover:bg-primary/90 transition-colors"
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

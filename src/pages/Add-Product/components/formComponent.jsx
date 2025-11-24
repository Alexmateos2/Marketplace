import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
const FormComponent = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    id_categoria: "",
    precio: "",
    stock: "",
    oferta: false,
    descripcion: "",
    resena: "",
    valoracion: 5,
  });

  const [specifications, setSpecifications] = useState([
    { attribute: "", value: "" },
  ]);
  const [files, setFiles] = useState([]);

  const [isDragActive, setIsDragActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (toast) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith("image/")
    );

    setFiles(
      droppedFiles.slice(0, 5).map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(
      selectedFiles.slice(0, 5).map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (fileToRemove) => {
    setFiles((prev) => prev.filter((file) => file !== fileToRemove));
    URL.revokeObjectURL(fileToRemove.preview);
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSpecChange = (index, field, value) => {
    setSpecifications((prev) => {
      const newSpecs = [...prev];
      newSpecs[index][field] = value;
      return newSpecs;
    });
  };

  const addSpecification = () => {
    const firstSpec = specifications[0];
    if (!firstSpec.attribute.trim() || !firstSpec.value.trim()) {
      toast.warn(
        "Introduce los campos requeridos arriba antes de agregar otra especificación."
      );
      return;
    }
    setSpecifications((prev) => [{ attribute: "", value: "" }, ...prev]);
  };

  const removeSpecification = (index) => {
    if (specifications.length === 1) {
      toast.warn("Debe haber al menos un campo.");
      return;
    }

    if (
      specifications[0].attribute === "" &&
      specifications[0].value === "" &&
      index === 0
    ) {
      toast.warn("No puedes borrar el input vacío");
      return;
    }

    setSpecifications((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "marketplace_products");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dbbjrmvou/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Error al subir imagen a Cloudinary");
      }

      const data = await response.json();
      return data.public_id;
    } catch (error) {
      toast.error(`Error subiendo a Cloudinary: ${error.message}`);
      throw new Error("Error al procesar la imagen");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      if (!formData.nombre.trim()) {
        throw new Error("El nombre del producto es requerido");
      }
      if (!formData.id_categoria) {
        throw new Error("Debe seleccionar una categoría");
      }
      if (!formData.precio || isNaN(formData.precio) || formData.precio <= 0) {
        throw new Error("El precio debe ser un número positivo");
      }
      if (!formData.stock || isNaN(formData.stock) || formData.stock < 0) {
        throw new Error("El stock debe ser un número válido");
      }

      let imagenPublicId = null;
      if (files.length > 0) {
        imagenPublicId = await uploadToCloudinary(files[0]);
      }

      const especificacionesValidas = specifications
        .filter((spec) => spec.attribute.trim() && spec.value.trim())
        .map((spec) => ({
          nombre: spec.attribute,
          descripcion: spec.value,
        }));

      let resenaData = null;
      if (formData.resena.trim()) {
        resenaData = {
          valoracion: parseFloat(formData.valoracion),
          descripcion: formData.resena,
        };
      }

      const payload = {
        nombre: formData.nombre.trim(),
        descripcion: formData.descripcion,
        id_categoria: parseInt(formData.id_categoria),
        precio: parseFloat(formData.precio),
        stock: parseInt(formData.stock),
        oferta: formData.oferta,
        ...(imagenPublicId && { imagen: imagenPublicId }),
        especificaciones: especificacionesValidas,
        resena: resenaData,
      };

      const response = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Error al crear producto");
      }

      toast.success(`${result.message} (ID: ${result.id_producto})`);

      setFormData({
        nombre: "",
        id_categoria: "",
        precio: "",
        stock: "",
        oferta: false,
        descripcion: "",
        resena: "",
        valoracion: 5,
      });
      setSpecifications([{ attribute: "", value: "" }]);
      setFiles([]);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      nombre: "",
      id_categoria: "",
      precio: "",
      stock: "",
      oferta: false,
      descripcion: "",
      resena: "",
      valoracion: 5,
    });
    setSpecifications([{ attribute: "", value: "" }]);
    setFiles([]);
  };

  return (
    <div className="space-y-6">
      
      {isLoading && (
        <div className="p-4 rounded-lg flex items-center gap-3 bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-400">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-blue-400 border-t-blue-700 dark:border-t-blue-400 rounded-full animate-spin"></div>
            <span className="text-sm font-medium">Cargando producto...</span>
          </div>
        </div>
      )}

      <div className="space-y-8">
        <div className="w-6/7 px-4 mx-auto">
          <label className="block text-sm font-medium mb-4 text-foreground-light dark:text-foreground-dark">
            Imagen del Producto
          </label>
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`mt-1 flex justify-center p-8 border-3 border-dashed rounded-lg cursor-pointer transition-colors ${
              isDragActive
                ? "border-primary bg-primary/10"
                : "border-border-light dark:border-border-dark hover:border-primary/50 bg-background-light dark:bg-background-dark"
            }`}
          >
            <div className="space-y-1 text-center w-full">
              <svg
                aria-hidden="true"
                className="mx-auto h-12 w-12 text-subtle-light dark:text-subtle-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <div className="flex text-sm text-subtle-light dark:text-subtle-dark justify-center">
                <label className="relative cursor-pointer font-medium text-primary hover:brightness-110 transition-all">
                  <span>Subir un archivo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                </label>
                <p className="pl-1">o arrastra y suelta</p>
              </div>
              <p className="text-xs text-muted-light dark:text-muted-dark">
                PNG, JPG, GIF hasta 10MB
              </p>

              <div className="flex flex-wrap gap-4 mt-4 justify-center">
                {files.map((file) => (
                  <div key={file.name} className="relative">
                    <img
                      src={file.preview}
                      className="h-24 w-24 object-cover rounded-lg"
                      alt={file.name}
                    />
                    <button
                      type="button"
                      onClick={() => removeFile(file)}
                      className="absolute top-0 right-0 m-1 bg-red-500 hover:bg-red-600 rounded-lg w-5 h-5 text-white flex justify-center items-center transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-foreground-light dark:text-foreground-dark"
            >
              Nombre del Producto *
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleFormChange}
              placeholder="ej. Auriculares Inalámbricos"
              disabled={isLoading}
              className="mt-1 block w-full py-2 px-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark text-foreground-light dark:text-foreground-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label
              htmlFor="id_categoria"
              className="block text-sm font-medium text-foreground-light dark:text-foreground-dark"
            >
              Categoría *
            </label>
            <select
              id="id_categoria"
              name="id_categoria"
              value={formData.id_categoria}
              onChange={handleFormChange}
              disabled={isLoading}
              className="mt-1 block w-full py-2 px-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark text-foreground-light dark:text-foreground-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
            <label
              htmlFor="precio"
              className="block text-sm font-medium text-foreground-light dark:text-foreground-dark"
            >
              Precio *
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-light dark:text-muted-dark">
                €
              </span>
              <input
                id="precio"
                name="precio"
                type="number"
                step="0.01"
                value={formData.precio}
                onChange={handleFormChange}
                placeholder="299.00"
                disabled={isLoading}
                className="block w-full pl-7 py-2 px-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark  text-foreground-light dark:text-foreground-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:border-primary  focus:outline-none focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-foreground-light dark:text-foreground-dark"
            >
              Stock *
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              min="0"
              value={formData.stock}
              onChange={handleFormChange}
              placeholder="50"
              disabled={isLoading}
              className="mt-1 block w-full py-2 px-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark text-foreground-light dark:text-foreground-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex items-center pt-4">
            <input
              id="oferta"
              name="oferta"
              type="checkbox"
              checked={formData.oferta}
              onChange={handleFormChange}
              disabled={isLoading}
              className="h-4 w-4 ml-2 rounded border-border-light dark:border-border-dark text-primary focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <label
              htmlFor="oferta"
              className="ml-3 text-sm font-medium text-foreground-light dark:text-foreground-dark"
            >
              Es una oferta especial
            </label>
          </div>
        </div>

        <div>
          <label
            htmlFor="descripcion"
            className="block text-sm font-medium text-foreground-light dark:text-foreground-dark"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows={3}
            maxLength={500}
            value={formData.descripcion}
            onChange={handleFormChange}
            placeholder="Una breve descripción del producto.Máximo 500 caracteres."
            disabled={isLoading}
            className="mt-1 py-2 px-3 block w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark text-foreground-light dark:text-foreground-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4 text-foreground-light dark:text-foreground-dark font-display">
            Especificaciones
          </h3>
          <div className="space-y-4">
            {specifications.map((spec, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex sm:flex-row flex-col sm:items-start items-center gap-4">
                  <input
                    type="text"
                    value={spec.attribute}
                    placeholder="Atributo (ej. Conectividad)"
                    onChange={(e) =>
                      handleSpecChange(index, "attribute", e.target.value)
                    }
                    disabled={isLoading}
                    className="flex-1  w-full block py-2 px-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark text-foreground-light dark:text-foreground-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <input
                    type="text"
                    value={spec.value}
                    placeholder="Valor (ej. Bluetooth 5.0)"
                    onChange={(e) =>
                      handleSpecChange(index, "value", e.target.value)
                    }
                    disabled={isLoading}
                    className="flex-1 w-full bg-background-light block py-2 px-3 rounded-lg border border-border-light dark:border-border-dark  dark:bg-surface-dark text-foreground-light dark:text-foreground-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  {index !== 0 ? (
                    <button
                      type="button"
                      onClick={() => removeSpecification(index)}
                      disabled={isLoading}
                      className="p-2 text-muted-light dark:text-muted-dark hover:text-red-500 dark:hover:text-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  ) : (
                    <div className="w-9"></div>
                  )}
                </div>
                {index === 0 && (
                  <button
                    type="button"
                    onClick={addSpecification}
                    disabled={isLoading}
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Agregar Especificación
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="resena"
            className="block text-sm font-medium text-foreground-light dark:text-foreground-dark"
          >
            Reseña de Experto
          </label>
          <textarea
            id="resena"
            name="resena"
            rows={6}
            maxLength={500}
            value={formData.resena}
            onChange={handleFormChange}
            placeholder="Comparte tus opiniones detalladas sobre el producto. Máximo 500 caracteres."
            disabled={isLoading}
            className="mt-1 py-2 px-3 block w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark text-foreground-light dark:text-foreground-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          />

          <div className="mt-4">
            <label
              htmlFor="valoracion"
              className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2"
            >
              Puntuación (1-10)
            </label>
            <input
              type="number"
              id="valoracion"
              name="valoracion"
              step="0.1"
              min="1"
              max="10"
              value={formData.valoracion}
              onChange={handleFormChange}
              disabled={isLoading}
              className="block w-full py-2 px-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark text-foreground-light dark:text-foreground-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-border-light dark:border-border-dark">
          <button
            type="button"
            onClick={handleCancel}
            disabled={isLoading}
            className="px-6 py-2 text-sm font-medium rounded-lg text-foreground-light dark:text-foreground-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors border border-border-light dark:border-border-dark disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="px-6 py-2 text-sm font-medium rounded-lg bg-primary text-content-dark dark:text-content-dark hover:brightness-110 disabled:brightness-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          >
            {isLoading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {isLoading ? "Cargando..." : "Agregar Producto"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;

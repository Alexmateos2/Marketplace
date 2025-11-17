import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff, Check, X } from "lucide-react";

const FormProfile = ({ usuario }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showAvatars, setShowAvatars] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    telefono: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    if (usuario) {
      setFormData({
        nombre: usuario.nombre || "",
        email: usuario.email || "",
        direccion: usuario.direccion || "",
        telefono: usuario.telefono || "",
        password: "",
      });
      setHasChanges(false);
    }
  }, [usuario]);

  const validateField = (id, value) => {
    const newErrors = { ...errors };

    switch (id) {
      case "nombre":
        if (!value.trim()) {
          newErrors.nombre = "El nombre es requerido";
        } else if (value.trim().length < 3) {
          newErrors.nombre = "El nombre debe tener al menos 3 caracteres";
        } else {
          delete newErrors.nombre;
        }
        break;
      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = "El email es requerido";
        } else if (!emailRegex.test(value)) {
          newErrors.email = "Email inválido";
        } else {
          delete newErrors.email;
        }
        break;
      }
      case "telefono":
        if (value && !/^\+?[\d\s\-()]{9,}$/.test(value)) {
          newErrors.telefono = "Teléfono inválido";
        } else {
          delete newErrors.telefono;
        }
        break;
      case "password":
        if (value && value.length < 8) {
          newErrors.password = "La contraseña debe tener al menos 8 caracteres";
        } else {
          delete newErrors.password;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return !newErrors[id];
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setHasChanges(true);
    validateField(id, value);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData((prev) => ({
      ...prev,
      password: "",
    }));
    setErrors({});
    setHasChanges(false);
    toast.info("Edición cancelada");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar todos los campos
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      if (key !== "password" || formData[key]) {
        if (!validateField(key, formData[key])) {
          isValid = false;
        }
      }
    });

    if (!isValid) {
      toast.error("Por favor, corrige los errores en el formulario");
      return;
    }

    setIsLoading(true);

    const dataToSend = { ...formData };
    if (!dataToSend.password) delete dataToSend.password;

    try {
      const res = await fetch(
        `http://localhost:3000/usuarios/${usuario.id_usuario}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );

      if (!res.ok) throw new Error(`Error ${res.status}`);

      const data = await res.json();
      toast.success(data.message || "Perfil actualizado correctamente");
      setIsEditing(false);
      setHasChanges(false);
      setFormData((prev) => ({ ...prev, password: "" }));
    } catch (err) {
      toast.error(err.message || "Error al actualizar el perfil");
    } finally {
      setIsLoading(false);
    }
  };

 return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <p className="text-4xl font-black text-content-light dark:text-content-dark">
          Información Personal
        </p>
      </div>

      <div className="flex flex-col @container items-start gap-6 p-4 mb-8 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark">
        <div className="flex w-full flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-32 h-32 flex-shrink-0"
            role="img"
            aria-label="Avatar del usuario"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnPDzJcMZziYykcoTL8J0llTXjQhuVgoFS5kaRslcUxTveESdKSoIeOWOZkXuY0Tz-MTgebtvZ7QCNLiHPFUq9GtchxXFaj9vudR_T10GJdBqrkYLFBjrFk6o9RZr0ewMDdQuOhT3-Ycr7AHSQs5sEa8HO_1FkaD9bKZO_S82ZQQdeNdwmD6exVcr4YhNUOyVKTc8WRSo_3ezwYk3iE4znU53VV29a2ikgoVrbKeK6Vwe1ShJCMb5nbKClDiQMGADJGhvG8QtlA8s")`,
            }}
          ></div>
          <div className="flex flex-col justify-center flex-1 w-full sm:w-auto">
            <p className="text-[22px] text-center sm:text-start font-bold tracking-[-0.015em] text-content-light dark:text-content-dark">
              {formData.nombre || "Cargando..."}
            </p>
            <p className="text-base text-content-light-500 dark:text-content-dark text-center sm:text-start">
              {formData.email}
            </p>
            <button
              type="button"
              onClick={() => !isEditing ? setIsEditing(true) : handleCancel()}
              className="mt-4 flex max-w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-sm font-bold tracking-[0.015em] w-full @[480px]:w-auto hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
            >
              <span className="truncate">
                {isEditing ? "Cancelar" : "Editar Perfil"}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            readOnly={!isEditing}
            error={errors.nombre}
            required
          />
          <FormField
            label="Correo Electrónico"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            readOnly={!isEditing}
            error={errors.email}
            required
          />
        </div>

        <FormField
          label="Dirección de Envío"
          id="direccion"
          value={formData.direccion}
          onChange={handleChange}
          readOnly={!isEditing}
          error={errors.direccion}
          isTextarea
          rows={3}
        />

        <div className="border-t border-border-light dark:border-border-dark my-6"></div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-content-light dark:text-content-dark">
            Seguridad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Teléfono"
              id="telefono"
              value={formData.telefono}
              onChange={handleChange}
              readOnly={!isEditing}
              error={errors.telefono}
            />
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-base font-medium pb-2 text-content-light dark:text-content-dark"
              >
                Contraseña {isEditing && <span className="text-xs text-content-light-500">(dejar vacío para mantener la actual)</span>}
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  placeholder={isEditing ? "••••••••" : ""}
                  className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2 ${
                    errors.password ? "border-red-500" : "border-border-light dark:border-border-dark"
                  } bg-surface-light dark:bg-surface-dark h-14 p-4 pr-12 text-base font-normal transition-colors ${
                    !isEditing ? "cursor-not-allowed opacity-50" : ""
                  }`}
                />
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-content-light-500 hover:text-content-light"
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <X size={16} /> {errors.password}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          {isEditing && (
            <>
              <button
                type="button"
                onClick={handleCancel}
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-sm font-medium tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                disabled={isLoading || !hasChanges}
                className={`flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-medium tracking-[0.015em] gap-2 transition-colors ${
                  isLoading || !hasChanges
                    ? "bg-primary/50 text-white cursor-not-allowed opacity-50"
                    : "bg-primary text-white hover:bg-primary/90 dark:bg-primary dark:text-content-dark"
                }`}
              >
                <Check size={18} />
                {isLoading ? "Guardando..." : "Guardar Cambios"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const FormField = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  readOnly,
  error,
  required,
  isTextarea,
  rows,
}) => (
  <div className="flex flex-col">
    <label
      htmlFor={id}
      className="text-base font-medium pb-2 text-content-light dark:text-content-dark"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {isTextarea ? (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        rows={rows}
        className={`form-textarea w-full rounded-lg p-4 border-2 ${
          error ? "border-red-500" : "border-border-light dark:border-border-dark"
        } bg-surface-light dark:bg-surface-dark focus:outline-none focus:ring-2 focus:ring-primary/50 text-content-light dark:text-content-dark transition-colors ${
          readOnly ? "cursor-not-allowed opacity-50" : ""
        }`}
      />
    ) : (
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2 ${
          error ? "border-red-500" : "border-border-light dark:border-border-dark"
        } bg-surface-light dark:bg-surface-dark h-14 p-4 text-base font-normal transition-colors ${
          readOnly ? "cursor-not-allowed opacity-50" : ""
        }`}
      />
    )}
    {error && (
      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
        <X size={16} /> {error}
      </p>
    )}
  </div>
);

export default FormProfile;
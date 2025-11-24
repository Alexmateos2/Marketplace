import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff, Check, X } from "lucide-react";
import AVATARS from "../../../shared/utils/avatars.js";

const VALIDATION_RULES = {
  nombre: {
    minLength: 3,
    required: true,
    pattern: /^[a-zA-Z\s]{3,}$/,
    message:
      "El nombre debe tener al menos 3 caracteres y contener solo letras",
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Email inválido",
  },
  telefono: {
    pattern: /^\+?[\d\s\-()]{9,}$/,
    message: "Teléfono inválido (mínimo 9 dígitos)",
  },
  password: {
    minLength: 6,
    message: "La contraseña debe tener al menos 6 caracteres",
  },
};

const API_BASE_URL = "http://localhost:3000";

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
  rows = 3,
  placeholder,
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
        placeholder={placeholder}
        className={`form-textarea w-full rounded-lg p-4 border-2 ${
          error
            ? "border-red-500"
            : "border-border-light dark:border-border-dark"
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
        placeholder={placeholder}
        className={`form-input flex w-full min-w-0 flex-1 rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2 ${
          error
            ? "border-red-500"
            : "border-border-light dark:border-border-dark"
        } bg-surface-light dark:bg-surface-dark h-14 p-4 text-base transition-colors ${
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

const FormProfile = ({ usuario }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    telefono: "",
    password: "",
    avatar: 0,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (usuario) {
      setFormData({
        nombre: usuario.nombre || "",
        email: usuario.email || "",
        direccion: usuario.direccion || "",
        telefono: usuario.telefono || "",
        password: "",
        avatar: usuario.avatar ?? 0,
      });
      setHasChanges(false);
      setErrors({});
    }
  }, [usuario]);

  const validateField = useCallback((id, value) => {
    const rule = VALIDATION_RULES[id];
    if (!rule) return true;

    if (rule.required && !value.trim()) {
      setErrors((prev) => ({ ...prev, [id]: `${id} es requerido` }));
      return false;
    }

    if (value && rule.pattern && !rule.pattern.test(value)) {
      setErrors((prev) => ({ ...prev, [id]: rule.message }));
      return false;
    }

    if (value && rule.minLength && value.length < rule.minLength) {
      setErrors((prev) => ({ ...prev, [id]: rule.message }));
      return false;
    }

    setErrors((prev) => ({ ...prev, [id]: null }));
    return true;
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
      setHasChanges(true);
      validateField(id, value);
    },
    [validateField]
  );

  const changeAvatar = useCallback((value) => {
    setFormData((prev) => ({ ...prev, avatar: value }));
    setShowAvatarPicker(false);
    setHasChanges(true);
  }, []);

  const handleCancel = useCallback(() => {
    if (usuario) {
      setFormData({
        nombre: usuario.nombre || "",
        email: usuario.email || "",
        direccion: usuario.direccion || "",
        telefono: usuario.telefono || "",
        password: "",
        avatar: usuario.avatar ?? 0,
      });
    }
    setIsEditing(false);
    setErrors({});
    setHasChanges(false);
    setShowAvatarPicker(false);
    toast.info("Cambios descartados");
  }, [usuario]);

  const validateForm = useCallback(() => {
    let isValid = true;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (key === "password" && !formData[key]) return;

      const rule = VALIDATION_RULES[key];
      if (!rule) return;

      if (rule.required && !formData[key].trim()) {
        newErrors[key] = `${key} es requerido`;
        isValid = false;
        return;
      }

      if (formData[key] && rule.pattern && !rule.pattern.test(formData[key])) {
        newErrors[key] = rule.message;
        isValid = false;
        return;
      }

      if (
        formData[key] &&
        rule.minLength &&
        formData[key].length < rule.minLength
      ) {
        newErrors[key] = rule.message;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!usuario?.id_usuario) {
        toast.error("Error: ID de usuario no disponible");
        return;
      }

      if (!validateForm()) {
        toast.error("Por favor, revisa los errores en el formulario");
        return;
      }

      setIsLoading(true);
      const dataToSend = { ...formData };
      if (!dataToSend.password) delete dataToSend.password;

      try {
        const res = await fetch(
          `${API_BASE_URL}/usuarios/${usuario.id_usuario}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
          }
        );

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || `Error ${res.status}`);
        }

        const data = await res.json();
        toast.success(data.message || "Perfil actualizado correctamente");
        setIsEditing(false);
        setHasChanges(false);
        setFormData((prev) => ({ ...prev, password: "" }));
        localStorage.setItem("avatar", JSON.stringify(formData.avatar));
      } catch (err) {
        toast.error(err.message || "Error al actualizar el perfil");
      } finally {
        setIsLoading(false);
      }
    },
    [formData, usuario?.id_usuario, validateForm]
  );

  const avatarUrl = AVATARS.find((a) => a.value === formData.avatar)?.url;

  return (
    <div className="max-w-4xl mx-auto ">
      <div className="mb-8">
        <p className="text-4xl font-black text-content-light dark:text-content-dark">
          Información Personal
        </p>
      </div>

      <div className="flex flex-col @container items-start gap-6 p-4 mb-8 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark">
        <div className="flex w-full flex-col sm:flex-row gap-6 items-center sm:items-start">
          {!showAvatarPicker && (
            <div className="relative w-32 h-32">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-32 h-32 flex-shrink-0 border-3 border-primary"
                role="img"
                aria-label="Avatar del usuario"
                style={{ backgroundImage: `url(${avatarUrl})` }}
              />
              {isEditing && (
                <button
                  type="button"
                  onClick={() => setShowAvatarPicker(true)}
                  className="absolute cursor-pointer bottom-0 right-0 bg-primary text-white text-xs px-2 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                >
                  Cambiar
                </button>
              )}
            </div>
          )}

          {isEditing && showAvatarPicker && (
            <div className="flex flex-col">
              <div className="text-content-light font-bold text-center dark:text-content-dark mb-4">
                Selecciona un avatar:
              </div>
              <div className="flex gap-4">
                {AVATARS.map((a) => (
                  <button
                    key={a.value}
                    type="button"
                    onClick={() => changeAvatar(a.value)}
                    className={`w-24 h-24 cursor-pointer rounded-full bg-no-repeat aspect-square bg-cover border-4 transition-all hover:scale-105 ${
                      formData.avatar === a.value
                        ? "border-primary"
                        : "border-border-light dark:border-border-dark opacity-60 hover:opacity-100"
                    }`}
                    style={{ backgroundImage: `url(${a.url})` }}
                    aria-label={`Avatar opción ${a.value}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col justify-center flex-1 w-full sm:w-auto">
            <p className="text-[22px] text-center sm:text-start font-bold tracking-[-0.015em] text-content-light dark:text-content-dark">
              {formData.nombre || "Cargando..."}
            </p>
            <p className="text-base text-content-light-500 dark:text-content-dark text-center sm:text-start">
              {formData.email}
            </p>

            <button
              type="button"
              onClick={() => (!isEditing ? setIsEditing(true) : handleCancel())}
              className="mt-4 flex max-w-[400px] cursor-pointer mx-auto  sm:ml-0 items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-sm font-bold tracking-[0.015em] w-full hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
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
            placeholder="Tu nombre completo"
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
            placeholder="tu@email.com"
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
          placeholder="Tu dirección completa"
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
              placeholder="+34 123 456 789"
            />
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-base font-medium pb-2 text-content-light dark:text-content-dark"
              >
                Contraseña{" "}
                {isEditing && (
                  <span className="text-xs text-content-light-500">
                    (dejar vacío para mantener la actual)
                  </span>
                )}
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  placeholder={
                    isEditing ? "Nueva contraseña (opcional)" : "*****"
                  }
                  className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2 ${
                    errors.password
                      ? "border-red-500"
                      : "border-border-light dark:border-border-dark"
                  } bg-surface-light dark:bg-surface-dark h-14 p-4 pr-12 text-base font-normal transition-colors ${
                    !isEditing ? "cursor-not-allowed opacity-50" : ""
                  }`}
                />
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-content-light-500 hover:text-content-light transition-colors"
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

        <div className="flex justify-center gap-3 py-2 pb-10">
          {isEditing && (
            <>
              <button
                type="button"
                onClick={handleCancel}
                disabled={isLoading}
                className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-sm font-medium tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                disabled={isLoading || !hasChanges}
                className={`flex max-w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold tracking-[0.015em] w-full @[480px]:w-auto gap-2 transition-colors ${
                  isLoading || !hasChanges
                    ? "bg-primary/50 text-white cursor-not-allowed opacity-50"
                    : "bg-primary text-white hover:bg-primary/90 dark:text-content-dark"
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

export default FormProfile;

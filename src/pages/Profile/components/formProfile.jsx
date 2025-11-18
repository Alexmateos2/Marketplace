import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff, Check, X } from "lucide-react";

const AVATARS = [
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnPDzJcMZziYykcoTL8J0llTXjQhuVgoFS5kaRslcUxTveESdKSoIeOWOZkXuY0Tz-MTgebtvZ7QCNLiHPFUq9GtchxXFaj9vudR_T10GJdBqrkYLFBjrFk6o9RZr0ewMDdQuOhT3-Ycr7AHSQs5sEa8HO_1FkaD9bKZO_S82ZQQdeNdwmD6exVcr4YhNUOyVKTc8WRSo_3ezwYk3iE4znU53VV29a2ikgoVrbKeK6Vwe1ShJCMb5nbKClDiQMGADJGhvG8QtlA8s",
    value: 0,
  },
  { url: "./unnamed.png", value: 1 },
];

const API_BASE_URL =  "http://localhost:3000";

const VALIDATION_RULES = {
  nombre: {
    minLength: 3,
    required: true,
    pattern: /^[a-zA-Z\s]{3,}$/,
    message: "El nombre debe tener al menos 3 caracteres y contener solo letras",
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
    minLength: 8,
    message: "La contraseña debe tener al menos 8 caracteres",
  },
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
  rows = 3,
  placeholder,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    {isTextarea ? (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        rows={rows}
        placeholder={placeholder}
        className={`form-textarea flex w-full min-w-0 flex-1 rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2 resize-none
          ${error ? "border-red-500" : "border-border-light dark:border-border-dark"}
          bg-surface-light dark:bg-surface-dark p-4 text-base transition-colors
          ${readOnly ? "cursor-not-allowed opacity-50" : ""}`}
      />
    ) : (
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={placeholder}
        className={`form-input flex w-full min-w-0 flex-1 rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2
          ${error ? "border-red-500" : "border-border-light dark:border-border-dark"}
          bg-surface-light dark:bg-surface-dark h-14 p-4 text-base transition-colors
          ${readOnly ? "cursor-not-allowed opacity-50" : ""}`}
      />
    )}
    {error && (
      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
        <X size={16} />
        {error}
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
      setFormData((prev) => ({
        ...prev,
        nombre: usuario.nombre || "",
        email: usuario.email || "",
        direccion: usuario.direccion || "",
        telefono: usuario.telefono || "",
        password: "",
        avatar: usuario.avatar ?? 0,
      }));
    }
    setIsEditing(false);
    setErrors({});
    setHasChanges(false);
    setShowAvatarPicker(false);
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
      } catch (err) {
        toast.error(err.message || "Error al actualizar el perfil");
      } finally {
        setIsLoading(false);
      }
    },
    [formData, usuario.id_usuario, validateForm]
  );

  const avatarUrl = AVATARS.find((a) => a.value === formData.avatar)?.url;

  return (
    <div className="space-y-6 p-6 max-w-2xl">
      <section>
        <h2 className="text-2xl font-bold mb-4">Información Personal</h2>

        <div className="relative w-32 h-32 mb-4">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-full h-full rounded-full object-cover border-4 border-primary/20"
          />
          {isEditing && (
            <button
              onClick={() => setShowAvatarPicker(true)}
              className="absolute bottom-0 right-0 bg-primary text-white text-xs px-2 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            >
              Cambiar
            </button>
          )}
        </div>

        {isEditing && showAvatarPicker && (
          <div className="mb-4 p-4 bg-surface-light dark:bg-surface-dark rounded-lg border-2 border-primary/20">
            <p className="text-sm font-medium mb-3">Selecciona un avatar:</p>
            <div className="flex gap-4">
              {AVATARS.map((a) => (
                <button
                  key={a.value}
                  onClick={() => changeAvatar(a.value)}
                  className={`w-20 h-20 rounded-full border-4 transition-all hover:scale-105
                    ${
                      formData.avatar === a.value
                        ? "border-primary"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  style={{ backgroundImage: `url(${a.url})`, backgroundSize: "cover", backgroundPosition: "center" }}
                  aria-label="Avatar option"
                />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <p className="text-lg font-semibold text-content-light dark:text-content-dark">
              {formData.nombre || "Cargando..."}
            </p>
            <p className="text-sm text-content-light/70 dark:text-content-dark/70">
              {formData.email}
            </p>
          </div>

          <button
            onClick={() => (!isEditing ? setIsEditing(true) : handleCancel())}
            className="mt-4 flex max-w-[400px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-sm font-bold w-full hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
          >
            {isEditing ? "Cancelar" : "Editar Perfil"}
          </button>
        </div>
      </section>

      {isEditing && (
        <section className="space-y-4">
          <h3 className="text-xl font-bold">Información de Contacto</h3>
          <FormField
            label="Nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            error={errors.nombre}
            required
            placeholder="Tu nombre completo"
          />
          <FormField
            label="Email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
            placeholder="tu@email.com"
          />
          <FormField
            label="Teléfono"
            id="telefono"
            value={formData.telefono}
            onChange={handleChange}
            error={errors.telefono}
            placeholder="+34 123 456 789"
          />
          <FormField
            label="Dirección"
            id="direccion"
            value={formData.direccion}
            onChange={handleChange}
            isTextarea
            rows={3}
            placeholder="Tu dirección completa"
          />
        </section>
      )}

      <section>
        <h3 className="text-xl font-bold mb-4">Seguridad</h3>
        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Contraseña
            {isEditing && (
              <span className="text-xs text-gray-500">
                {" "}
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
              placeholder={isEditing ? "Nueva contraseña (opcional)" : "••••••••"}
              className={`form-input flex w-full min-w-0 flex-1 rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2
                ${
                  errors.password
                    ? "border-red-500"
                    : "border-border-light dark:border-border-dark"
                }
                bg-surface-light dark:bg-surface-dark h-14 p-4 pr-12 text-base transition-colors
                ${!isEditing ? "cursor-not-allowed opacity-50" : ""}`}
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
              <X size={16} />
              {errors.password}
            </p>
          )}
        </div>
      </section>

      {isEditing && (
        <div className="flex gap-3 pt-4 border-t border-border-light dark:border-border-dark">
          <button
            onClick={handleCancel}
            disabled={isLoading}
            className="flex-1 h-10 px-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={isLoading || !hasChanges}
            className="flex-1 h-10 px-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Check size={18} />
            {isLoading ? "Guardando..." : "Guardar Cambios"}
          </button>
        </div>
      )}
    </div>
  );
};

export default FormProfile;
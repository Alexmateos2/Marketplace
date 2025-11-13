import React, { useState } from "react";
import Navbar from "../../shared/navbar/navbar";
import Footer from "../../shared/utils/Footer";
import { NavLink, useNavigate } from "react-router-dom";

const SignUpLayout = () => {
  const [formValue, setFormValue] = useState({
    nombre: "",
    email: "",
    password: "",
    passwordCheck: "",
    direccion: "",
    telefono: "",
  });
  const [isMayusPassword, setIsMayusPassword] = useState(false);
  const [isMayusPasswordCheck, setIsMayusPasswordCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onKeyDown = (e) => {
    const isCaps = e.getModifierState("CapsLock");
    if (e.target.id === "password") setIsMayusPassword(isCaps);
    else if (e.target.id === "passwordCheck") setIsMayusPasswordCheck(isCaps);
  };

  const handleChangeInput = (e) => {
    setFormValue({ ...formValue, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, email, password, direccion, telefono } = formValue;
    setLoading(true);

    if (password !== formValue.passwordCheck) {
      alert("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password, direccion, telefono }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "No se pudo crear el usuario");
      } else {
        console.log("Usuario creado exitosamente:", data);
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
        localStorage.setItem("rol", JSON.stringify(data.rol));
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión al servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-display transition-colors bg-background-light dark:bg-background-dark">
      <Navbar />
      <main className="md:w-full w-4/5 max-w-lg bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-border-light dark:border-border-dark p-6 my-24 mx-auto">
        <div className="flex flex-col gap-2 text-center p-2 mb-8">
          <p className="text-content-light dark:text-content-dark text-3xl font-black leading-tight tracking-[-0.033em]">
            Crea tu cuenta en Tekia
          </p>
          <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal">
            Accede a una selección curada de productos aprobados por expertos.
          </p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium pb-2">
              Nombre
            </p>
            <input
              id="nombre"
              className="form-input flex w-full rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 p-3 text-sm"
              placeholder="Ingresa tu nombre"
              value={formValue.nombre}
              onChange={handleChangeInput}
            />
          </label>

          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium pb-2">
              Correo electrónico
            </p>
            <input
              id="email"
              type="email"
              className="form-input flex w-full rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 p-3 text-sm"
              placeholder="Ingresa tu correo electrónico"
              value={formValue.email}
              onChange={handleChangeInput}
            />
          </label>

          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium pb-2">
              Contraseña
            </p>
            <div className="relative w-full flex flex-col">
              <input
                id="password"
                type="password"
                className="form-input flex w-full rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 p-3 pr-10 text-sm"
                placeholder="Ingresa una contraseña segura"
                value={formValue.password}
                onChange={handleChangeInput}
                onKeyDown={onKeyDown}
              />
              {isMayusPassword && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                  ⚠️ Caps Lock activado
                </p>
              )}
            </div>
          </label>

          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium pb-2">
              Repite la contraseña
            </p>
            <div className="relative w-full flex flex-col">
              <input
                id="passwordCheck"
                type="password"
                className="form-input flex w-full rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 p-3 pr-10 text-sm"
                placeholder="Vuelve a escribir la contraseña"
                value={formValue.passwordCheck}
                onChange={handleChangeInput}
                onKeyDown={onKeyDown}
              />
              {isMayusPasswordCheck && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                  ⚠️ Caps Lock activado
                </p>
              )}
            </div>
          </label>

          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium pb-2">
              Dirección de envío
            </p>
            <textarea
              id="direccion"
              className="form-textarea flex w-full rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark min-h-[96px] p-3 text-sm"
              placeholder="Ingresa tu dirección de envío completa"
              value={formValue.direccion}
              onChange={handleChangeInput}
            ></textarea>
          </label>

          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium pb-2">
              Teléfono
            </p>
            <input
              id="telefono"
              type="tel"
              className="form-input flex w-full rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 p-3 text-sm"
              placeholder="Ej: 674 242 532"
              value={formValue.telefono}
              onChange={handleChangeInput}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-lg h-12 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors mt-2"
          >
            Crear Cuenta
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Al crear una cuenta aceptas nuestros{" "}
            <a className="font-medium text-primary hover:underline" href="#">
              Términos de Servicio
            </a>{" "}
            y{" "}
            <a className="font-medium text-primary hover:underline" href="#">
              Política de Privacidad
            </a>
            .
          </p>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            ¿Ya tienes una cuenta?{" "}
            <NavLink
            to="/login"
            className="font-bold text-primary hover:underline" href="#">
              Iniciar sesión
            </NavLink>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpLayout;

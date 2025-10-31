import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../../shared/utils/Footer";
import Navbar from "../../../shared/navbar/navbar";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const LoginPage = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [isMayus, setIsMayus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onKeyDown = (keyEvent) => {
    if (keyEvent.getModifierState("CapsLock")) {
      setIsMayus(true);
    } else {
      setIsMayus(false);
    }
  };
  const handleChangeInput = (e) => {
    setFormValue({
      ...formValue,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formValue;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Correo o contraseña incorrecta");
      } else {
        console.log("Login exitoso:", data);
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
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
    <div className="dark:bg-background-dark dark:text-white bg-background-light min-h-screen flex flex-col font-display transition-colors">
      <Navbar />

      <main className="flex grow items-center justify-center p-4 sm:p-8 lg:p-12">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-10 lg:p-12 space-y-8 sm:space-y-10">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Welcome Back
            </h1>
            <p className="text-muted-light dark:text-muted-dark text-base sm:text-lg">
              Sign in to your Tekia account.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-sm sm:text-base font-medium text-foreground-light dark:text-foreground-dark"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formValue.email}
                onChange={handleChangeInput}
                placeholder="you@example.com"
                className="mt-2 w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg focus:ring-primary focus:border-primary placeholder:text-gray-500 dark:placeholder:text-subtle-dark/60 dark:text-subtle-dark/80"
                required
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <label
                  htmlFor="password"
                  className="text-sm sm:text-base font-medium text-foreground-light dark:text-foreground-dark"
                >
                  Password
                </label>
                <div className="flex items-center pr-4">
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className={`${
                      formValue.password !== "" ? "block" : "hidden"
                    } text-xl text-content-light hover:underline`}
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formValue.password}
                onChange={handleChangeInput}
                onKeyDown={onKeyDown}
                placeholder="••••••••"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg focus:ring-primary focus:border-primary placeholder:text-gray-500 dark:placeholder:text-subtle-dark/60 dark:text-subtle-dark/80"
                required
              />
              {isMayus && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-2">⚠️ Caps Lock is ON</p>
              )}

              <div className="flex mt-3">
                <Link
                  className="text-sm sm:text-base text-primary hover:underline"
                  to="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white font-bold py-3 sm:py-4 px-4 sm:px-5 rounded-lg hover:bg-primary/90 transition-colors text-base sm:text-lg disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Optional OAuth */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border-light dark:border-border-dark"></div>
            </div>
            <div className="relative flex justify-center text-base">
              <span className="px-3 bg-card-light dark:bg-card-dark text-muted-light dark:text-muted-dark">
                Or continue with
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <button className="flex items-center justify-center gap-2 w-full border border-border-light dark:border-border-dark py-4 px-5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors text-base">
                Google
              </button>
              <button className="flex items-center justify-center gap-2 w-full border border-border-light dark:border-border-dark py-4 px-5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors text-base">
                Apple
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm sm:text-base mt-6">
            <p className="text-muted-light dark:text-muted-dark">
              Don't have an account?{" "}
              <Link
                className="font-medium text-primary hover:underline"
                to="/signup"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;

import React from "react";
import Footer from "../../../shared/Footer";
import Navbar from "../../../shared/navbar/navbar";

const LoginPage = () => {
  return (
    <div className="dark:bg-background-dark dark:text-white bg-background-light min-h-screen flex flex-col font-display">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl shadow-lg p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-light dark:text-muted-dark">
              Sign in to your Tekia account.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label
                className="text-sm font-medium text-foreground-light dark:text-foreground-dark"
                htmlFor="email"
              >
                Email or username
              </label>
              <input
                id="email"
                type="text"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg focus:ring-primary focus:border-primary placeholder:text-gray-500 dark:placeholder:text-subtle-dark/60 dark:text-subtle-dark/80"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center">
                <label
                  className="text-sm font-medium text-foreground-light dark:text-foreground-dark"
                  htmlFor="password"
                >
                  Password
                </label>
                <a className="text-sm text-primary hover:underline" href="#">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg focus:ring-primary focus:border-primary placeholder:text-gray-500 dark:placeholder:text-subtle-dark/60 dark:text-subtle-dark/80"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Log In
            </button>
          </form>

          {/* Optional OAuth Buttons */}
          {/*
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border-light dark:border-border-dark"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card-light dark:bg-card-dark text-muted-light dark:text-muted-dark">
                Or continue with
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <button className="flex items-center justify-center gap-2 w-full border border-border-light dark:border-border-dark py-3 px-4 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                Google
              </button>
              <button className="flex items-center justify-center gap-2 w-full border border-border-light dark:border-border-dark py-3 px-4 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                Apple
              </button>
            </div>
          </div>
          */}

          {/* Sign Up Link */}
          <div className="text-center text-sm mt-4">
            <p className="text-muted-light dark:text-muted-dark">
              Don't have an account?{" "}
              <a className="font-medium text-primary hover:underline" href="#">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;

import React from "react";
import Navbar from "../../shared/navbar/navbar";
import Footer from "../../shared/utils/Footer";

const SignUpLayout = () => {
  return (
    <div className="font-display transition-colors">
      <Navbar />
      <main className="md:w-full w-4/5 max-w-lg bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-border-light dark:border-border-dark p-6 my-24 mx-auto">
        <div className="flex flex-col gap-2 text-center p-2 mb-8">
          <p className="text-content-light dark:text-content-dark text-3xl font-black leading-tight tracking-[-0.033em]">
            Create Your Tekia Account
          </p>
          <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal">
            Get access to a curated selection of expert-approved products.
          </p>
        </div>
        <form className="flex flex-col gap-6">
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal pb-2">
              Full Name
            </p>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-sm font-normal leading-normal"
              placeholder="Enter your full name"
              value=""
            />
          </label>
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal pb-2">
              Email Address
            </p>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-sm font-normal leading-normal"
              placeholder="Enter your email address"
              type="email"
              value=""
            />
          </label>
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal pb-2">
              Password
            </p>
            <div className="relative w-full flex items-center">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 pr-10 text-sm font-normal leading-normal"
                placeholder="Enter a secure password"
                type="password"
                value=""
              />
           
            </div>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal pb-2">
              Confirm Password
            </p>
            <div className="relative w-full flex items-center">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 pr-10 text-sm font-normal leading-normal"
                placeholder="Repite la contraseña"
                type="password"
                value=""
              />
           
            </div>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal pb-2">
              Shipping Address
            </p>
            <textarea
              className="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary min-h-[96px] placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-sm font-normal leading-normal"
              placeholder="Enter your full shipping address"
            ></textarea>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal pb-2">
              Phone Number
            </p>
            <div className="flex w-full items-stretch">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-sm font-normal leading-normal"
                placeholder="Ej: 674 242 532"
                type="tel"
              />
            </div>
          </label>
          <button
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors duration-200 mt-2"
            type="submit"
          >
            <span className="truncate">Create Account</span>
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            By creating an account, you agree to our{" "}
            <a className="font-medium text-primary hover:underline" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="font-medium text-primary hover:underline" href="#">
              Privacy Policy
            </a>
            .
          </p>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Already have an account?{" "}
            <a className="font-bold text-primary hover:underline" href="#">
              Log in
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpLayout;

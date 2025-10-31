import React from "react";
import { useState } from "react";
const FormProfile = ({ usuario }) => {
  const [disabled, setDisabled] = useState(true);
  const { nombre, email, direccion, telefono } = usuario || {nombre:"John Doe",email:"johndoe@gmail.com",direccion:"C/Example 123",telefono:"(+55) 623723721"};

  const changeHandle = () => {
    setDisabled(!disabled);
  };
  return (
    <div className="max-w-4xl mx-auto">
      <div className="lg:hidden flex justify-end items-center mb-6"></div>
      <div className="mb-8">
        <p className="text-4xl font-black text-content-light dark:text-content-dark">
          Personal Information
        </p>
      </div>
      <div className="flex flex-col @container items-start  gap-6 p-4 mb-8 bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark">
        <div className="flex w-full flex-col sm:flex-row gap-6 items-center sm:items-start ">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-32 h-32"
            data-alt="User avatar"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnPDzJcMZziYykcoTL8J0llTXjQhuVgoFS5kaRslcUxTveESdKSoIeOWOZkXuY0Tz-MTgebtvZ7QCNLiHPFUq9GtchxXFaj9vudR_T10GJdBqrkYLFBjrFk6o9RZr0ewMDdQuOhT3-Ycr7AHSQs5sEa8HO_1FkaD9bKZO_S82ZQQdeNdwmD6exVcr4YhNUOyVKTc8WRSo_3ezwYk3iE4znU53VV29a2ikgoVrbKeK6Vwe1ShJCMb5nbKClDiQMGADJGhvG8QtlA8s")',
            }}
          ></div>
          <div className="flex flex-col justify-center flex-1 ">
            <p className="text-[22px] text-center sm:text-start font-bold tracking-[-0.015em] text-content-light dark:text-content-dark">
              {nombre}
            </p>
            <p className="text-base text-content-light-500 dark:text-content-dark">
              {email}
            </p>
            <button
              onClick={changeHandle}
              className="mt-4 flex max-w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-sm font-bold tracking-[0.015em] w-full @[480px]:w-auto hover:bg-primary/20 dark:hover:bg-primary/30"
            >
              <span className="truncate">Edit Profile</span>
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="text-base font-medium pb-2 text-content-light dark:text-content-dark"
            >
              Full Name
            </label>
            <input
              id="fullName"
              readOnly={disabled}
              placeholder={nombre}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-14 placeholder:text-content-light-400 p-4 text-base font-normal"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="emailAddress"
              className="text-base font-medium pb-2 text-content-light dark:text-content-dark"
            >
              Email Address
            </label>
            <input
              id="emailAddress"
              readOnly={disabled}
              placeholder={email}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-14 placeholder:text-content-light-400 p-4 text-base font-normal"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="shippingAddress"
            className="text-base font-medium pb-2 text-content-light dark:text-content-dark"
          >
            Shipping Address
          </label>
          <textarea
            id="shippingAddress"
            readOnly={disabled}
            rows={3}
            className="form-textarea w-full rounded-lg p-4 border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark focus:outline-none focus:ring-2 focus:ring-primary/50 text-content-light dark:text-content-dark"
            placeholder={direccion}
          />
        </div>
        <div className="border-t border-border-light dark:border-border-dark my-6"></div>
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-content-light dark:text-content-dark">
            Security
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="text-base font-medium pb-2 text-content-light dark:text-content-dark"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                readOnly={disabled}
                placeholder={telefono}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-14 placeholder:text-content-light-400 p-4 text-base font-normal"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-base font-medium pb-2 text-content-light dark:text-content-dark"
              >
                Password
              </label>
              <input
                id="password"
                readOnly={disabled}
                type="password"
                placeholder="••••••••"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-border-light dark:border-border-dark bg-white dark:bg-surface-dark h-14 placeholder:text-content-light-400 p-4 text-base font-normal"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={() => setDisabled(true)}
            disabled={disabled}
            className={
              disabled
                ? " hidden"
                : "flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10  px-4 bg-slate dark:bg-background-dark text-content-light   dark:text-content-dark text-sm font-medium leading-normal tracking-[0.015em]"
            }
          >
            <span className="truncate">Cancel</span>
          </button>
          <button
            disabled={disabled}
            onClick={() => setDisabled(true)}
            className="flex min-w-[84px] disabled:cursor-not-allowed disabled:bg-primary/50 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormProfile;

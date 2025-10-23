import React from 'react'
import {
  MdPerson,
  MdReceiptLong,
  MdLogout,
} from "react-icons/md";

const AsideProfile = () => {
  return (
    <aside className="w-80 py-12 bg-white dark:bg-background-dark/50 p-6 hidden lg:flex flex-col justify-between border-r border-border-light dark:border-border-dark min-h-screen">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-12 h-12"
                data-alt="User avatar"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnPDzJcMZziYykcoTL8J0llTXjQhuVgoFS5kaRslcUxTveESdKSoIeOWOZkXuY0Tz-MTgebtvZ7QCNLiHPFUq9GtchxXFaj9vudR_T10GJdBqrkYLFBjrFk6o9RZr0ewMDdQuOhT3-Ycr7AHSQs5sEa8HO_1FkaD9bKZO_S82ZQQdeNdwmD6exVcr4YhNUOyVKTc8WRSo_3ezwYk3iE4znU53VV29a2ikgoVrbKeK6Vwe1ShJCMb5nbKClDiQMGADJGhvG8QtlA8s")',
                }}
              ></div>
              <div>
                <h1 className="text-base font-bold text-content-light dark:text-content-dark">
                  John Doe
                </h1>
                <p className="text-sm text-content-light-500 dark:text-content-dark-400">
                  <a href="mailto:john.doe@email.com">john.doe@email.com</a>
                </p>
              </div>
            </div>

            <nav className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-192px)]">
              <a
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
                href="#"
              >
                <MdPerson className="material-symbols-outlined" />
                <span className="text-sm font-medium">
                  Personal Information
                </span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate text-content-light-600 dark:text-content-dark"
                href="#"
              >
                <MdReceiptLong className="material-symbols-outlined" />
                <span className="text-sm font-medium">Order History</span>
              </a>
            </nav>
          </div>
         
            <button className="mt-auto flex items-center justify-center w-full h-10 px-4 rounded-lg bg-slate-100 dark:bg-background-dark text-content-light-600 dark:text-content-dark text-sm font-medium cursor-pointer">
              <MdLogout className="material-symbols-outlined mr-2" />
              Logout
            </button>
          
        </aside>
  )
}

export default AsideProfile

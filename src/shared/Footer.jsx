import React from 'react'

const Footer = () => {
  return (
   <footer className="border-t border-border-light bg-surface-light dark:border-border-dark dark:bg-surface-dark">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-subtle-light dark:text-subtle-dark">
            © 2025 Tekia. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              className="text-sm text-subtle-light dark:text-subtle-dark hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm text-subtle-light  dark:text-subtle-dark  hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer

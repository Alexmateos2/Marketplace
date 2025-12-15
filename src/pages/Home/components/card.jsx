import React from "react";

// Card de Why choose us

function Card({ title, text, icon }) {
  return (
    <div className="group relative flex flex-col items-center p-6 bg-surface-light dark:bg-surface-dark/50 rounded-xl border border-border-light dark:border-border-dark/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">

    
      
      <div className="relative space-y-4 flex flex-col items-center">
 
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <svg
            className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d={icon}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>

        <h3 className="text-lg font-bold text-center">{title}</h3>

        <p className="text-center text-sm text-subtle-light dark:text-subtle-dark group-hover:text-subtle-light dark:group-hover:text-subtle-dark transition-colors duration-300">
          {text}
        </p>

        <div className="h-1 w-0 bg-gradient-to-r from-primary to-primary/60 rounded-full group-hover:w-12 transition-all duration-300 mt-2" />
      </div>
    </div>
  );
}

export default Card;
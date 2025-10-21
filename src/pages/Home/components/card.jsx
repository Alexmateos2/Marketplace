import React from "react";
function Card({ title, text, icon }) {
  return (
    <div className="flex flex-col items-center p-6 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <svg
          className="h-8 w-8"
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
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-center text-sm text-subtle-light dark:text-subtle-dark">
        {text}
      </p>
    </div>
  );
}
export default Card;
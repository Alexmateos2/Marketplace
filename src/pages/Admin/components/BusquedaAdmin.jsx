import React, { useState } from "react";

const BusquedaAdmin = ({ data = [], onFilterChange }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    const filteredData = data.filter((item) =>
      // fallback seguro para nombres nulos
      (item.nombre || "invitado").toLowerCase().includes(value)
    );

    // si no hay coincidencias, devolver todo el array
    onFilterChange(filteredData.length > 0 ? filteredData : data);
  };

  return (
    <div className="relative w-full max-w-lg">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-subtle-light dark:text-content-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Busca por nombre"
          onChange={onChangeInput}
          value={inputValue}
          className="w-full h-12 rounded-lg border border-subtle-light bg-background-light dark:border-gray-700 dark:bg-background-dark pl-10 pr-4 py-2 text-sm placeholder-subtle-light dark:placeholder-content-dark focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
      </div>
    </div>
  );
};

export default BusquedaAdmin;

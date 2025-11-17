import React from 'react'
import { NavLink } from 'react-router-dom';

function CategoriaDestacada() {
  const categories = [
    { title: "Laptops", image: "../unnamed(6).png" },
    { title: "Audio", image: "../unnamed(7).png" },
    { title: "Wearables", image: "../unnamed(8).png" },
    { title: "Accesorios", image: "../unnamed(9).png" },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 px-8 sm:px-0 gap-6 sm:grid-cols-4 sm:gap-6">
        {categories.map((cat) => (
          <NavLink
          to={`products/${cat.title}`}
            key={cat.title}
            className="group relative overflow-hidden rounded-lg"
            href="#"
          >
            <img
              alt={cat.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={cat.image}
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white">
              {cat.title}
            </h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
export default CategoriaDestacada

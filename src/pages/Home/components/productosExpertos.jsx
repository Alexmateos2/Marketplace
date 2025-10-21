import React from "react";
function ProductosExpertos() {
  const items = [
    {
      title: "Laptop Pro 16",
      desc: "Powerful performance",
      image: "../public/unnamed(2).png",
    },
    {
      title: "Wireless Headphones X50",
      desc: "Immersive sound",
      image: "../public/unnamed(3).png",
    },
    {
      title: "Smartwatch Series 7",
      desc: "Advanced tracking",
      image: "../public/unnamed(4).png",
    },
    {
      title: "Portable Speaker SoundWave",
      desc: "Compact power",
      image: "../public/unnamed(5).png",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1  px-8 sm:px-0 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-lg bg-surface-light shadow-sm transition-shadow hover:shadow-md dark:bg-surface-dark"
          >
            <img
              alt={item.title}
              className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105 "
              src={item.image}
            />
            <div className="px-4 py-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-subtle-light dark:text-subtle-dark">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductosExpertos;
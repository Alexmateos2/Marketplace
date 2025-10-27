import React from 'react'

import Pagination from './pagination'
const ProductsHero = ({ category, currentPage, itemsPerPage ,onPageChange}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="text-left">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {category || "All Products"}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Discover {category ? category.toLowerCase() : 'items'} curated by our community of experts.
        </p>
      </div>
      <div className="hidden lg:block lg:flex items-center justify-end ">

        <Pagination
          category={category}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          // onPageChange prop debería llegar a ProductsHero para que funcione bien:
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}


export default ProductsHero

import React from 'react'

import Pagination from '../../../shared/utils/pagination'
const ProductsHero = ({ category,search, currentPage, itemsPerPage ,onPageChange,totalItems}) => {
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
          search={search}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={onPageChange}
          totalItems={totalItems}
        />
      </div>
    </div>
  )
}


export default ProductsHero

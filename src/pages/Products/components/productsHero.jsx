import React from 'react'
import PaginationTop  from '../../../shared/PaginationTop'

const ProductsHero = ({name}) => {
  return (
    <div className="flex items-center justify-between mb-8">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {name || " All Products"}
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Discover {name ? name.toLowerCase() :' items'} curated by our community of experts.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-end">
           <PaginationTop />
          </div>
        </div>
  )
}

export default ProductsHero

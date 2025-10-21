import React from 'react'

const Pagination = () => {
  return (
      <div className="flex items-center justify-center mt-8 lg:hidden">
              <nav aria-label="Pagination" className="flex items-center gap-2">
                <a className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-500 dark:text-gray-400" href="#">
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fillRule="evenodd"></path>
                  </svg>
                </a>
                <a className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold text-sm" href="#">1</a>
                <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300 font-medium text-sm" href="#">2</a>
                <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300 font-medium text-sm" href="#">3</a>
                <span className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-300">...</span>
                <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300 font-medium text-sm" href="#">8</a>
              </nav>
            </div>
  )
}

export default Pagination

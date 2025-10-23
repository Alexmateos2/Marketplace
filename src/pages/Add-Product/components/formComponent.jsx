import React from "react";

const FormComponent = () => {
  return (
    <>
      <form className="space-y-8">
        <div>
          <label
            htmlFor="product-image"
            className="block text-sm font-medium mb-2"
          >
            Product Image
          </label>
          <div className="mt-1 flex justify-center p-5 sm:p-10 border-3 border-border-light dark:border-border-dark border-dashed rounded-lg">
            <div className="space-y-1 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto h-12 w-12 text-subtext-light dark:text-subtext-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <div className="flex text-sm text-subtext-light dark:text-subtext-dark">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-card-light dark:bg-card-dark rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary "
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only "
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-content-light dark:text-content-dark">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="product-name" className="block text-sm font-medium">
              Product Name
            </label>
            <input
              id="product-name"
              name="product-name"
              type="text"
              placeholder="e.g. Wireless Over-Ear Headphones"
              className="mt-1 block w-full py-2 pl-3 rounded-lg border
               border-border-light dark:border-border-dark bg-background-light
                dark:bg-background-dark focus:border-primary focus:ring-primary sm:text-sm
                placeholder:text-content-light dark:placeholder:text-content-dark placeholder:text-sm "
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium">
              Price
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
                <span className="text-subtext-light dark:text-subtext-dark sm:text-sm">
                  $
                </span>
              </div>
              <input
                id="price"
                name="price"
                type="text"
                placeholder="299.00"
                className="block w-full rounded-lg border border-border-light dark:border-border-dark
                 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary 
                 pl-7 py-2 sm:text-sm placeholder:text-content-light dark:placeholder:text-content-dark placeholder:text-sm "
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="A brief description of the product."
            className="mt-1 py-2 pl-3 block w-full rounded-lg border border-border-light 
            dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary 
            focus:ring-primary sm:text-sm placeholder:text-content-light dark:placeholder:text-content-dark placeholder:text-sm "
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Specifications</h3>
          <div id="specifications-container" className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Attribute (e.g. Connectivity)"
                className="flex-1 block py-2 w-full rounded-lg border border-border-light
                 dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary
                  pl-3 focus:ring-primary sm:text-sm
                  placeholder:text-sm  placeholder:text-content-light dark:placeholder:text-content-dark placeholder:text-sm "
              />
              <input
                type="text"
                placeholder="Value (e.g. Bluetooth 5.0)"
                className="flex-1 block w-full py-2 pl-3 rounded-lg
                 border border-border-light dark:border-border-dark 
                 bg-background-light dark:bg-background-dark focus:border-primary
                  focus:ring-primary sm:text-sm 
                  placeholder:text-content-light dark:placeholder:text-content-dark placeholder:text-sm "
              />
              <button
                type="button"
                className="p-2 text-subtext-light dark:text-subtext-dark hover:text-red-500
                 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            type="button"
            id="add-spec-btn"
            className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                fillRule="evenodd"
              />
            </svg>
            Add Specification
          </button>
        </div>

        <div>
          <label htmlFor="expert-review" className="block text-sm font-medium">
            Expert Review
          </label>
          <textarea
            id="expert-review"
            name="expert-review"
            rows={6}
            placeholder="Share your detailed thoughts on the product."
            className="mt-1 py-2 pl-3 block w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary sm:text-sm
             placeholder:text-content-light dark:placeholder:text-content-dark placeholder:text-sm "
          />
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            className="px-6 py-2 text-sm font-medium rounded-lg text-subtext-light dark:text-subtext-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center rounded-lg border border-transparent bg-primary px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Add Product
          </button>
        </div>
      </form>
    </>
  );
};

export default FormComponent;

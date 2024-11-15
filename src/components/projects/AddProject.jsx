function AddProject() {
  return (
    <div
      id="add-project"
      className="hs-overlay hidden size-full fixed start-0 z-[80] overflow-x-auto overflow-y-auto"
      role="dialog"
      tabIndex="-1"
      aria-labelledby="add-project-label"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="bg-white rounded-xl shadow ">
          <div className="relative h-40 rounded-t-xl bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
            <div className="absolute top-0 end-0 p-4">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none :bg-neutral-800 "
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                Upload Header
              </button>
            </div>
          </div>

          <div className="pt-0 p-4 sm:pt-0 sm:p-7">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="sr-only">Product photo</label>

                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-5">
                  <img
                    className="-mt-8 relative z-10 inline-block size-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white "
                    src="https://preline.co/assets/img/160x160/img1.jpg"
                    alt="Avatar"
                  />

                  <div className="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                      </svg>
                      Upload Logo
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-project-name"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                >
                  Project Name
                </label>

                <input
                  id="af-submit-app-project-name"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="af-submit-project-url"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Owner
                </label>

                <select
                  id="af-submit-app-category"
                  className="py-2 px-3 pe-9 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <option>Select</option>
                  <option>Ecommerce</option>
                  <option>Finance</option>
                  <option>Marketplace</option>
                  <option>Social</option>
                  <option>Others</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-description"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                >
                  Description
                </label>

                <textarea
                  id="af-submit-app-description"
                  className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows="6"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-x-2 p-4 rounded-b-xl sm:px-7 border-t bg-gray-50 ">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 "
              data-hs-overlay="#add-project"
            >
              Cancel
            </button>
            <a
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Save Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProject;

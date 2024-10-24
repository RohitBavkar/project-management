function AddProject() {
  return (
    <div className="max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Card */}
      <div className="bg-white rounded-xl shadow">
        <div className="relative h-40 rounded-t-xl bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
          <div className="absolute top-0 end-0 p-4">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
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
              Upload header
            </button>
          </div>
        </div>

        <div className="pt-0 p-4 sm:pt-0 sm:p-7">
          {/* Grid */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-5">
                <img
                  className="-mt-8 relative z-10 inline-block size-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white"
                  src="https://preline.co/assets/img/160x160/img1.jpg"
                  alt="Avatar"
                />

                <div className="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
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
                  {/* <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Delete
                  </button> */}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="projectName"
                className="inline-block text-sm font-medium text-gray-800 mt-2.5"
              >
                Project Name
              </label>

              <input
                id="projectName"
                type="text"
                className="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter project name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="projectOwner"
                className="inline-block text-sm font-medium text-gray-800 mt-2.5"
              >
                Owner
              </label>

              <select
                id="projectOwner"
                className="py-2 px-3 pe-9 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                <option defaultValue>Select Owner</option>
                <option>Ecommerce</option>
                <option>Finance</option>
                <option>Marketplace</option>
                <option>Social</option>
                <option>Others</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="projectDesc"
                className="inline-block text-sm font-medium text-gray-800 mt-2.5"
              >
                Description
              </label>

              <textarea
                id="projectDesc"
                className="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                rows="6"
                placeholder="A detailed summary will better explain your project to the audiences."
              ></textarea>
            </div>
          </div>
          {/* End Grid */}

          <div className="mt-5 flex justify-end gap-x-2">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
            >
              Cancel
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Add Project
            </button>
          </div>
        </div>
      </div>
      {/* End Card */}
    </div>
  );
}

export default AddProject;

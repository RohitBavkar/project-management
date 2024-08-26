function MyProjects({ onNewProjectClick, projects }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden ">
              {/* <!-- Header --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 ">
                    My Projects
                  </h2>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 "
                      href="#"
                    >
                      View all
                    </a>

                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
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
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      New Project
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Header --> */}

              {/* <!-- Table --> */}
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th scope="col" className="ps-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                          Project Name
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                          Description
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                          Status
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                          Portfolio
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                          Created
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                          Due Date
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-end"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 ">
                  <tr>
                    <td className="size-px whitespace-nowrap">
                      <div className="ps-6 py-3">
                        <div className="flex items-center gap-x-3">
                          <div className="grow">
                            <span className="block text-sm font-semibold text-gray-800 ">
                              Christina Bersh
                            </span>
                            <span className="block text-sm text-gray-500 ">
                              christina@site.com
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <div className="px-6 py-3">
                        <span className="block text-sm font-semibold text-gray-800 ">
                          Director
                        </span>
                        <span className="block text-sm text-gray-500 ">
                          Human resources
                        </span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <div className="px-6 py-3">
                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full ">
                          <svg
                            className="size-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                          Active
                        </span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <div className="px-6 py-3">
                        <div className="flex items-center gap-x-3">
                          <span className="text-xs text-gray-500 ">1/5</span>
                          <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden ">
                            <div
                              className="flex flex-col justify-center overflow-hidden bg-gray-800 "
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <div className="px-6 py-3">
                        <span className="text-sm text-gray-500 ">
                          28 Dec, 12:12
                        </span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <div className="px-6 py-3">
                        <span className="text-sm text-gray-500 ">
                          28 Dec, 12:12
                        </span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <div className="px-6 py-1.5">
                        <a
                          className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium "
                          href="#"
                        >
                          Edit
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <!-- End Table --> */}

              {/* <!-- Footer --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 ">
                <div>
                  <p className="text-sm text-gray-600 ">
                    <span className="font-semibold text-gray-800 ">
                      Total Rows Count Comes Here
                    </span>{" "}
                    results
                  </p>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <button
                      type="button"
                      className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 "
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
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Prev
                    </button>

                    <button
                      type="button"
                      className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 "
                    >
                      Next
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Footer --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyProjects;

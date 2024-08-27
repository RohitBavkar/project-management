import noProjectImg from "../assets/no-projects.png";

function NoProject({ onNewProjectClick }) {
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
                    No Project Selected
                  </h2>
                </div>
                <div>
                  <div className="inline-flex gap-x-2">
                    <a
                      onClick={onNewProjectClick}
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
              {/* <!-- Form --> */}
              <img
                src={noProjectImg}
                className="w-40 h-40 object-contain mx-auto my-10"
              />
              <h2 className="text-3xl font-bold text-stone-500 text-center">
                No Project Selected
              </h2>
              <p className="text-stone-400 text-xl text-center my-10">
                Select a project or get started with new one
              </p>
              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NoProject;

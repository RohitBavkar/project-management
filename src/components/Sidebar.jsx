import MenuItem from "./MenuItem";
import noProjectImg from "../assets/no-projects.png";

function Sidebar({ onButtonClick }) {
  return (
    <aside
      className="hs-overlay  [--auto-close:lg]
    hs-overlay-open:translate-x-0
    -translate-x-full transition-all duration-300 transform
    w-[260px] h-full
    hidden
    fixed inset-y-0 start-0 z-[60]
    bg-white border-e border-gray-200
    lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
    "
      role="dialog"
      tabIndex="-1"
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col h-full max-h-full">
        <div className="px-6 pt-4">
          {/* <!-- Logo --> */}
          <a
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="#"
          >
            <img
              className="shrink-0 size-[38px] rounded-full"
              src={noProjectImg}
              alt="Avatar"
            />
          </a>
          {/* <!-- End Logo --> */}
        </div>

        {/* <!-- Menu Items --> */}
        <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
          <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap">
            <ul className="flex flex-col space-y-1">
              <MenuItem
                name="Dashboard"
                svg={
                  <svg
                    className="size-4"
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
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                }
              />

              <MenuItem
                name="New Project"
                onButtonClick={onButtonClick}
                svg={
                  <svg
                    className="size-4"
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
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                }
              />

              <MenuItem
                name="My Projects"
                svg={
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
                    <rect
                      width="20"
                      height="14"
                      x="2"
                      y="7"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                }
              />
            </ul>
          </nav>
        </div>
        {/* <!-- End Menu Items --> */}
      </div>
    </aside>
  );
}
export default Sidebar;

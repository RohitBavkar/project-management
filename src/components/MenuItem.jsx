function MenuItem({ name, svg, onButtonClick }) {
  return (
    <li>
      <button
        onClick={onButtonClick}
        type="button"
        className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        aria-expanded="true"
        aria-controls="users-accordion"
      >
        {svg}
        {name}
      </button>
    </li>
  );
}
export default MenuItem;

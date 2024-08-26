function MenuItem({ name, svg, onButtonClick }) {
  return (
    <li>
      <button
        onClick={onButtonClick}
        type="button"
        className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 "
      >
        {svg}
        {name}
      </button>
    </li>
  );
}
export default MenuItem;

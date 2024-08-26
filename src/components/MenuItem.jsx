function MenuItem({ name, svg }) {
  return (
    <li>
      <button
        type="button"
        class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
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

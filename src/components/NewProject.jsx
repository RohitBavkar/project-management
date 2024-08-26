import Input from "./Input";
function NewProject() {
  return (
    <section className="w-4/5 p-20">
      <div>
        <Input label="Title"></Input>
        <Input label="Due Date"></Input>
        <Input label="Description" textarea></Input>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6 sm:max-w-lg">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
        >
          Save
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          Cancel
        </button>
      </div>
    </section>
  );
}
export default NewProject;

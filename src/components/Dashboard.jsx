import noProjectImg from "../assets/no-projects.png";
function Dashboard({ onNewProjectClick }) {
  return (
    <section className="w-4/5 text-center mt-40">
      <img src={noProjectImg} className="w-40 h-40 object-contain mx-auto" />
      <h2 className="text-3xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4 text-xl">
        Select a project or get started with new one
      </p>
      <p className="mt-8">
        <button
          onClick={onNewProjectClick}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 focus:outline-none"
        >
          New Project
        </button>
      </p>
    </section>
  );
}
export default Dashboard;

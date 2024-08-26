import MyProjects from "./MyProjects";
import NoProject from "./NoProject";
function Dashboard({ onNewProjectClick, projects }) {
  return (
    <div className="w-full lg:ps-64">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* <NoProject onNewProjectClick={onNewProjectClick} /> */}
        <MyProjects />
      </div>
    </div>
  );
}
export default Dashboard;

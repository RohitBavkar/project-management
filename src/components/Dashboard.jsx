import MyProjects from "./MyProjects";
function Dashboard({ onNewProjectClick, projects }) {
  return (
    <MyProjects onNewProjectClick={onNewProjectClick} projects={projects} />
  );
}
export default Dashboard;

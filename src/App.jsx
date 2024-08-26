import { useState } from "react";
import Dashboard from "./components/Dashboard";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  const [project, setProject] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  function handleNewProject(projectData) {
    setProject((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  console.log(project);
  let content;
  if (project.selectedProjectID === null) {
    content = <NewProject handleNewProject={handleNewProject} />;
  } else if (project.selectedProjectID === undefined) {
    content = <Dashboard onNewProjectClick={handleAddProject} />;
  } else {
  }
  return (
    <main className="my-8 flex">
      <Sidebar onButtonClick={handleAddProject} />

      {content}
    </main>
  );
}

export default App;

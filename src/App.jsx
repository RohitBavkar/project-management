import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import NoProject from "./components/NoProject";
import Dashboard from "./components/Dashboard";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleNewProjectClick() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  function handleNewProjectCreation(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectID: "new",
        projects: [...prevState.projects, newProject],
      };
    });
  }
  let content;
  if (projectState.selectedProjectID === null) {
    content = <NewProject onSaveClick={handleNewProjectCreation} />;
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProject onNewProjectClick={handleNewProjectClick} />;
  } else {
    content = (
      <Dashboard
        onNewProjectClick={handleNewProjectClick}
        projects={projectState.projects}
      />
    );
  }
  console.log(projectState);
  return (
    <>
      <Header />
      <Breadcrumb />
      <Sidebar />

      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">{content}</div>
      </div>
    </>
  );
}

export default App;

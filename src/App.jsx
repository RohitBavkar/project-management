import { useState } from "react";
import Dashboard from "./components/Dashboard";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  const [project, setProject] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleAddProject() {}
  return (
    <main className="my-8 flex">
      <Sidebar />
      <Dashboard />
    </main>
  );
}

export default App;

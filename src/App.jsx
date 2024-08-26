import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex">
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;

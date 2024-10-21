import { useState } from "react";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Sidebar />
      <Container />
    </>
  );
}

export default App;

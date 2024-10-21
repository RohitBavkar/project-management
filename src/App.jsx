import { useState } from "react";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Sidebar />
      <Container />
      <Footer />
    </>
  );
}

export default App;

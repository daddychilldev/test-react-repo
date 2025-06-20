import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <Content />
      </div>
    </>
  );
}

export default App;

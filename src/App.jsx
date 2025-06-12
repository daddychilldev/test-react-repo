import React from "react";
import Navbar from "./assets/components/Navbar";
import "./App.css";
import Content from "./assets/components/Content";

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

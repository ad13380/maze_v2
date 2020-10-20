import React from "react";
import PathFindingVisualizer from "./containers/PathFindingVisualizer";
import Title from "./components/Title/Title";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Title data-test="title-component" />
      <PathFindingVisualizer />
    </div>
  );
};

export default App;

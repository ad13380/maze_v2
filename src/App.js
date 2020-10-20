import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PathFindingVisualizer from "./containers/PathFindingVisualizer/PathFindingVisualizer";
import Home from "./containers/Home/Home";
import Tutorial from "./containers/Tutorial/Tutorial";
import Title from "./components/Title/Title";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Title data-test="title-component" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/visualise" component={PathFindingVisualizer} />
          <Route path="/tutorial" component={Tutorial} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

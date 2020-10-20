import React from "react";
import "./Selector.css";

const Selector = (props) => {
  const { children, handleChangeAlgorithm } = props;

  return (
    <div className="dropdown selector-styling">
      <button
        className="btn btn-link dropdown-toggle link-styling"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {children}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a
          className="dropdown-item"
          href="#/"
          onClick={handleChangeAlgorithm}
          data-test="dijkstra-selector-component"
        >
          Dijkstra
        </a>
        <a
          className="dropdown-item"
          href="#/"
          onClick={handleChangeAlgorithm}
          data-test="aStarMan-selector-component"
        >
          A* Manhattan
        </a>
        <a
          className="dropdown-item"
          href="#/"
          onClick={handleChangeAlgorithm}
          data-test="aStarEuc-selector-component"
        >
          A* Euclidean
        </a>
        <a
          className="dropdown-item"
          href="#/"
          onClick={handleChangeAlgorithm}
          data-test="aStarEuc-selector-component"
        >
          Breadth-First Search
        </a>
        <a
          className="dropdown-item"
          href="#/"
          onClick={handleChangeAlgorithm}
          data-test="aStarEuc-selector-component"
        >
          Depth-First Search
        </a>
      </div>
    </div>
  );
};

export default Selector;

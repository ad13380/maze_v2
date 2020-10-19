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
        <a className="dropdown-item" href="#/" onClick={handleChangeAlgorithm}>
          Dijkstra
        </a>
        <a className="dropdown-item" href="#/" onClick={handleChangeAlgorithm}>
          A* Manhattan
        </a>
        <a className="dropdown-item" href="#/" onClick={handleChangeAlgorithm}>
          A* Euclidean
        </a>
      </div>
    </div>
  );
};

export default Selector;

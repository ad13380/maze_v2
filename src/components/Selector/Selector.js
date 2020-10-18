import React from "react";
import "./Selector.css";

const Selector = (props) => {
  return (
    <div class="dropdown selector-styling">
      <button
        class="btn btn-link dropdown-toggle link-styling"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.children}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">
          Dijkstra
        </a>
        <a class="dropdown-item" href="#">
          A* Euclidean
        </a>
        <a class="dropdown-item" href="#">
          A* Manhattan
        </a>
      </div>
    </div>
  );
};

export default Selector;

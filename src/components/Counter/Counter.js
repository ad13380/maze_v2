import React from "react";
import "./Counter.css";

const Counter = (props) => {
  return (
    <div className="outer-container" data-test="counter-component">
      <div className="inner-container">
        <div className="counter-title" data-test="counter-title">
          Visited Nodes: <br />
          Shortest Path Nodes:
        </div>
        <div className="counter-numbers" data-test="counter-numbers">
          {props.isPathClear ? "0" : props.visitedNodesInOrder.length} <br />
          {props.isPathClear ? "0" : props.shortestPathNodesInOrder.length}
        </div>
      </div>
    </div>
  );
};

export default Counter;

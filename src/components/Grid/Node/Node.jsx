import React from "react";
import "./Node.css";

const Node = (props) => {
  const {
    type,
    isStart,
    isFinish,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
    row,
    col,
    nodeDrag,
  } = props;

  // converting this to a reducer causes a noticable hit in animation performance
  const getNodeClass = () => {
    let nodeClass = "node ";

    switch (nodeDrag.nodeType) {
      case "start":
        nodeClass += "start-drag ";
        break;
      case "finish":
        nodeClass += "finish-drag ";
        break;
    }

    if (isStart) {
      return (nodeClass += "node-start");
    } else if (isFinish) {
      return (nodeClass += "node-finish");
    }

    switch (type) {
      case "path":
        return (nodeClass += "node-shortest-path");
      case "visited":
        return (nodeClass += "node-visited");
      case "wall":
        return (nodeClass += "node-wall");
      default:
        return (nodeClass += "node-empty");
    }
  };

  return (
    <div
      className={getNodeClass()}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      onMouseUp={() => handleMouseUp(row, col)}
    ></div>
  );
};

export default Node;

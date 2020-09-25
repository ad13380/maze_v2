import React from "react";
import Node from "./Node/Node";
import "./Grid.css";

const Grid = (props) => {
  return (
    <div className="grid">
      {props.grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((node) => {
              const { row, col, type, isStart, isFinish, nodeDrag } = node;
              return (
                <Node
                  key={`node-${row}-${col}`}
                  row={row}
                  col={col}
                  type={type}
                  isStart={isStart}
                  isFinish={isFinish}
                  handleMouseDown={props.handleMouseDown}
                  handleMouseEnter={props.handleMouseEnter}
                  handleMouseUp={props.handleMouseUp}
                  nodeDrag={nodeDrag}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;

import React, { useState, useEffect } from "react";
import Grid from "../components/Grid/Grid";
import Button from "../components/Button/Button";
import Error from "../components/Error/Error";
import Counter from "../components/Counter/Counter";
import Title from "../components/Title/Title";
import { dijkstra, shortestPath } from "../models/algorithms/dijkstra";
import { useInitialGrid } from "../hooks/useInitialGrid";
import { useNewStartFinish } from "../hooks/useNewStartFinish";
import { useClearVisitedNodes } from "../hooks/useClearVisitedNodes";
import { useSetWallNode } from "../hooks/useSetWallNode";
import { useSetDragNode } from "../hooks/useSetDragNode";
var _ = require("lodash");

const GRID_ROWS = 20;
const GRID_COLS = 40;

const PathFindingVisualizer = () => {
  const [grid, setGrid] = useState([]);
  const [startNodeLoc, setStartNodeLoc] = useState({ row: 10, col: 12 });
  const [finishNodeLoc, setFinishNodeLoc] = useState({ row: 10, col: 28 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSolvable, setIsSolvable] = useState(true);
  const [isMousePressed, setIsMousePressed] = useState(false);
  const [nodeDrag, setNodeDrag] = useState({ isDragging: false, nodeType: "" });
  const [isPathClear, setIsPathClear] = useState(true);
  const [visitedNodesInOrder, setVisitedNodesInOrder] = useState([]);
  const [shortestPathNodesInOrder, setShortestPathNodesInOrder] = useState([]);

  const [getInitialGrid] = useInitialGrid();
  const [getNewStartFinish] = useNewStartFinish();
  const [getClearVisitedNodes] = useClearVisitedNodes();
  const [getSetWallNode] = useSetWallNode();
  const [getSetDragNode] = useSetDragNode();

  useEffect(() => {
    const initialGrid = getInitialGrid(
      GRID_ROWS,
      GRID_COLS,
      startNodeLoc,
      finishNodeLoc,
      nodeDrag
    );
    setGrid(initialGrid);
  }, []);

  useEffect(() => {
    if (!visitedNodesInOrder.length || !shortestPathNodesInOrder.length) return;
    if (!visitedNodesInOrder[0]) {
      setIsSolvable(false);
      return;
    }

    setIsSolvable(true);
    const updatedGrid = _.cloneDeep(grid);
    const asyncAnimate = async () => {
      setIsAnimating(true);
      await animate(updatedGrid, visitedNodesInOrder, "visited", 20);
      await animate(updatedGrid, shortestPathNodesInOrder, "path", 70);
      setIsAnimating(false);
    };
    asyncAnimate();
  }, [visitedNodesInOrder, shortestPathNodesInOrder]);

  const handleMouseDown = (row, col) => {
    if (isAnimating || nodeDrag.isDragging) return;
    if (grid[row][col].isStart) {
      startDraggingNode("start");
      return;
    }
    if (grid[row][col].isFinish) {
      startDraggingNode("finish");
      return;
    }
    const updatedGrid = getSetWallNode(grid, row, col);
    setIsMousePressed(true);
    setGrid(updatedGrid);
  };

  const handleMouseEnter = (row, col) => {
    if (grid[row][col].type === "wall" || !isMousePressed) return;
    const updatedGrid = getSetWallNode(grid, row, col);
    setGrid(updatedGrid);
  };

  const handleMouseUp = (row, col) => {
    if (nodeDrag.isDragging) {
      if (nodeDrag.nodeType === "start") {
        setStartNodeLoc({ row: row, col: col });
        endDraggingNode(row, col, "start", startNodeLoc);
      } else {
        setFinishNodeLoc({ row: row, col: col });
        endDraggingNode(row, col, "finish", finishNodeLoc);
      }
      setNodeDrag({ isDragging: false, nodeType: "" });
    }
    setIsMousePressed(false);
  };

  const handleRunAlgorithm = async () => {
    const updatedGrid = _.cloneDeep(grid);
    const startNode = updatedGrid[startNodeLoc.row][startNodeLoc.col];
    const finishNode = updatedGrid[finishNodeLoc.row][finishNodeLoc.col];
    setVisitedNodesInOrder(dijkstra(updatedGrid, startNode, finishNode));
    setShortestPathNodesInOrder(shortestPath(finishNode));
  };

  const handleClearScreen = () => {
    setIsPathClear(true);
    const updatedGrid = getInitialGrid(
      GRID_ROWS,
      GRID_COLS,
      startNodeLoc,
      finishNodeLoc,
      nodeDrag
    );
    setGrid(updatedGrid);
  };

  const handleClearVisited = () => {
    setIsPathClear(true);
    const updatedGrid = getClearVisitedNodes(grid, visitedNodesInOrder);
    setGrid(updatedGrid);
  };

  const startDraggingNode = (nodeType) => {
    setNodeDrag({ isDragging: true, nodeType: nodeType });
    const updatedGrid = getSetDragNode(grid, {
      isDragging: true,
      nodeType: nodeType,
    });
    setGrid(updatedGrid);
  };

  const endDraggingNode = (row, col, nodeType, endNodeLoc) => {
    let updatedGrid = getNewStartFinish(
      grid,
      endNodeLoc,
      { newRow: row, newCol: col },
      `is${nodeType.charAt(0).toUpperCase() + nodeType.slice(1)}`
    );
    updatedGrid = getSetDragNode(updatedGrid, {
      isDragging: false,
      nodeType: "",
    });
    setGrid(updatedGrid);
  };

  const animate = async (updatedGrid, nodeArray, type, delay) => {
    setIsPathClear(false);
    let i = 0;
    return await new Promise((resolve) => {
      const intervalID = setInterval(() => {
        const { row, col } = nodeArray[i];
        updatedGrid[row][col].type = type;
        setGrid([...updatedGrid]);
        if (++i === nodeArray.length) {
          clearInterval(intervalID);
          resolve();
        }
      }, delay);
    });
  };

  return (
    <>
      <Title />
      {isSolvable ? (
        <Counter
          isPathClear={isPathClear}
          visitedNodesInOrder={visitedNodesInOrder}
          shortestPathNodesInOrder={shortestPathNodesInOrder}
        />
      ) : (
        <Error />
      )}
      <Button handleOnClick={handleClearScreen} onDisable={isAnimating}>
        Clear Screen
      </Button>
      <Button handleOnClick={handleClearVisited} onDisable={isAnimating}>
        Clear Path
      </Button>
      <Button handleOnClick={handleRunAlgorithm} onDisable={!isPathClear}>
        Run Algorithm
      </Button>
      <br />
      <Grid
        grid={grid}
        handleMouseDown={handleMouseDown}
        handleMouseEnter={handleMouseEnter}
        handleMouseUp={handleMouseUp}
      />
    </>
  );
};

export default PathFindingVisualizer;
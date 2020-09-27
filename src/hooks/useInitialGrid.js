export const useInitialGrid = () => {
  const getInitialGrid = (
    gridRows,
    gridCols,
    startNodeLoc,
    finishNodeLoc,
    nodeDrag
  ) => {
    const initalGrid = [];
    for (let row = 0; row < gridRows; row++) {
      const currentRow = [];
      for (let col = 0; col < gridCols; col++) {
        currentRow.push(
          createNodeProps(col, row, startNodeLoc, finishNodeLoc, nodeDrag)
        );
      }
      initalGrid.push(currentRow);
    }
    return initalGrid;
  };

  const createNodeProps = (
    col,
    row,
    startNodeLoc,
    finishNodeLoc,
    nodeDrag
  ) => ({
    col,
    row,
    isStart: row === startNodeLoc.row && col === startNodeLoc.col,
    isFinish: row === finishNodeLoc.row && col === finishNodeLoc.col,
    distance: Infinity,
    type: "",
    previousNode: null,
    nodeDrag: nodeDrag,
  });

  return [getInitialGrid];
};

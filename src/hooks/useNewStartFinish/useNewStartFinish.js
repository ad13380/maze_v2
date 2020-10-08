var _ = require("lodash");

export const useNewStartFinish = () => {
  const getNewStartFinish = (
    grid,
    nodeLoc,
    newNodeLoc,
    startFinishAttribute
  ) => {
    if (nodeLoc.row === newNodeLoc.newRow && nodeLoc.col === newNodeLoc.newCol)
      return grid;
    const { row, col } = nodeLoc;
    const { newRow, newCol } = newNodeLoc;
    const updatedGrid = _.cloneDeep(grid);
    updatedGrid[row][col][startFinishAttribute] = false;
    updatedGrid[newRow][newCol][startFinishAttribute] = true;
    updatedGrid[row][col].type = "";
    updatedGrid[newRow][newCol].type = "";
    return updatedGrid;
  };
  return [getNewStartFinish];
};

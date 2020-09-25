var _ = require("lodash");

export const useNewStartFinish = () => {
  const getNewStartFinish = (grid, nodeLoc, newNodeLoc, dragType) => {
    if (nodeLoc.row === newNodeLoc.row && nodeLoc.col === newNodeLoc.col)
      return;
    const { row, col } = nodeLoc;
    const { newRow, newCol } = newNodeLoc;
    const updatedGrid = _.cloneDeep(grid);
    updatedGrid[row][col][dragType] = false;
    updatedGrid[newRow][newCol][dragType] = true;
    updatedGrid[row][col].type = "";
    updatedGrid[newRow][newCol].type = "";
    return updatedGrid;
  };
  return [getNewStartFinish];
};

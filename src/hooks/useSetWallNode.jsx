var _ = require("lodash");

export const useSetWallNode = () => {
  const getSetWallNode = (grid, row, col) => {
    const updatedGrid = _.cloneDeep(grid);
    const node = updatedGrid[row][col];
    if (!node.isStart & !node.isFinish) {
      node.type = node.type === "wall" ? "" : "wall";
      updatedGrid[row][col] = node;
    }
    return updatedGrid;
  };
  return [getSetWallNode];
};

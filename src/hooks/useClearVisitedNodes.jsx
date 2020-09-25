var _ = require("lodash");

export const useClearVisitedNodes = () => {
  const getClearVisitedNodes = (grid, visitedNodes) => {
    if (!visitedNodes[0]) return grid;

    const updatedGrid = _.cloneDeep(grid);
    visitedNodes.forEach((node) => {
      const { row, col } = node;
      if (
        updatedGrid[row][col].type === "visited" ||
        updatedGrid[row][col].type === "path"
      ) {
        updatedGrid[row][col].type = "";
      }
    });
    return updatedGrid;
  };
  return [getClearVisitedNodes];
};

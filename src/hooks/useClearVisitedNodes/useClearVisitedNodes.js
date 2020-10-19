var _ = require("lodash");

export const useClearVisitedNodes = () => {
  const getClearVisitedNodes = (grid) => {
    const updatedGrid = _.cloneDeep(grid);
    updatedGrid.forEach((row) => {
      row.forEach((node) => {
        const { row, col } = node;
        if (
          updatedGrid[row][col].type === "visited" ||
          updatedGrid[row][col].type === "path"
        ) {
          updatedGrid[row][col].type = "";
        }
      });
    });
    return updatedGrid;
  };
  return [getClearVisitedNodes];
};

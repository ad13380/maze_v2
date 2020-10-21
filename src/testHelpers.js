export const getNodeTypeTotal = (grid, nodeType) => {
  let counter = 0;
  grid.forEach((row) => {
    row.forEach((node) => {
      if (node.type === nodeType) counter++;
    });
  });
  return counter;
};

export const generateTestGrid = (type = "") => {
  // generate 6 x 6 grid
  return new Array(6).fill("").map((val, row) =>
    new Array(6).fill("").map((val, col) => ({
      row: row,
      col: col,
      isStart: false,
      isFinish: false,
      distance: Infinity,
      type: type,
      previousNode: null,
    }))
  );
};

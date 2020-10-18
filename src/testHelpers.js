export const generateGrid = (nodeType) => {
  // generate 3 x 3 grid
  return new Array(3).fill("").map(() =>
    new Array(3).fill("").map(() => ({
      type: nodeType,
      isStart: false,
      isFinish: false,
      nodeDrag: {},
    }))
  );
};

export const getNodeTypeTotal = (grid, nodeType) => {
  let counter = 0;
  grid.forEach((row) => {
    row.forEach((node) => {
      if (node.type === nodeType) counter++;
    });
  });
  return counter;
};

export const generateTestGrid = () => {
  // generate 6 x 6 grid
  return new Array(6).fill("").map((val, row) =>
    new Array(6).fill("").map((val, col) => ({
      row,
      col,
      isStart: false,
      isFinish: false,
      distance: Infinity,
      type: "",
      previousNode: null,
    }))
  );
};

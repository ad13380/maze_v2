export const generateGrid = (nodeType) => {
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

export const generateDijkstraGrid = () => {
  // generate 10 x 10 grid
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

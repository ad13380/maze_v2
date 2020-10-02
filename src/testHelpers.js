export const generateGrid = (nodeType) => {
  return new Array(3).fill("").map(() =>
    new Array(3).fill("").map(() => ({
      type: nodeType,
      isStart: false,
      isFinish: false,
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

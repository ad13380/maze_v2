import { useClearVisitedNodes } from "./useClearVisitedNodes";

describe("useClearVisitedNodes", () => {
  let grid;
  let updatedGrid;
  const [getClearVisitedNodes] = useClearVisitedNodes();

  // selects the diagonal nodes
  const visitedNodes = [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
  ];

  // generates a 3x3 grid
  const generateGrid = (nodeType) => {
    return new Array(3).fill("").map(() =>
      new Array(3).fill("").map(() => ({
        type: nodeType,
      }))
    );
  };

  const getNodeTypeTotal = (grid, nodeType) => {
    let counter = 0;
    grid.forEach((row) => {
      row.forEach((node) => {
        if (node.type === nodeType) counter++;
      });
    });
    return counter;
  };

  it("returns original grid if there are no visited nodes", () => {
    grid = generateGrid("wall");
    updatedGrid = getClearVisitedNodes(grid, []);
    expect(updatedGrid).toEqual(grid);
  });

  it("does not change node type for wall nodes", () => {
    grid = generateGrid("wall");
    updatedGrid = getClearVisitedNodes(grid, visitedNodes);
    expect(getNodeTypeTotal(updatedGrid, "wall")).toEqual(9);
  });

  it("does not change node type for empty nodes", () => {
    grid = generateGrid("");
    updatedGrid = getClearVisitedNodes(grid, visitedNodes);
    expect(getNodeTypeTotal(updatedGrid, "")).toEqual(9);
  });

  it("changes visited node type to empty node type", () => {
    grid = generateGrid("visited");
    updatedGrid = getClearVisitedNodes(grid, visitedNodes);
    expect(getNodeTypeTotal(updatedGrid, "visited")).toEqual(6);
  });

  it("changes path node type to empty node type", () => {
    grid = generateGrid("path");
    updatedGrid = getClearVisitedNodes(grid, visitedNodes);
    expect(getNodeTypeTotal(updatedGrid, "path")).toEqual(6);
  });
});

import { MazeRecursive } from "./MazeRecursive";
import { expectedMazeResult } from "./mazeRecursiveTestData";
import { generateTestGrid } from "../../testHelpers";

describe("MazeRecursive", () => {
  let mazeRecursive;
  let grid = generateTestGrid();
  // add start nodes
  grid[3][2].isStart = true;
  // add finish node
  grid[3][4].isFinish = true;

  beforeEach(() => {
    mazeRecursive = new MazeRecursive(grid, grid[3][2], grid[3][4]);
    // mock Math.random value
    jest.spyOn(global.Math, "random").mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });

  it("generates a maze", () => {
    const mazeNodes = mazeRecursive.getMaze();
    for (let i = 0; i < mazeNodes.length; i++) {
      expect(mazeNodes[i].row).toEqual(expectedMazeResult[i].row);
      expect(mazeNodes[i].col).toEqual(expectedMazeResult[i].col);
    }
  });
});

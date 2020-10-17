import { MazeRecursive } from "./MazeRecursive";
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
  });

  it("true", () => {
    mazeRecursive.getMaze().forEach((node) => {
      const { row, col } = node;
      console.log(row, col);
    });
    expect(true).toEqual(true);
  });
});

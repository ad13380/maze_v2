import { useSetWallNode } from "./useSetWallNode";
import { generateTestGrid } from "../../testHelpers";

describe("useSetWallNode", () => {
  let grid;
  let updatedGrid;
  const [getSetWallNode] = useSetWallNode();

  it("sets an existing wall node to an empty node", () => {
    grid = generateTestGrid("wall");
    updatedGrid = getSetWallNode(grid, 1, 1);
    expect(updatedGrid[1][1].type).toEqual("");
  });

  it("sets an empty node to a wall node", () => {
    grid = generateTestGrid("");
    updatedGrid = getSetWallNode(grid, 1, 1);
    expect(updatedGrid[1][1].type).toEqual("wall");
  });

  describe("for a start or end node", () => {
    it("does not change the node type", () => {
      grid = generateTestGrid("");
      grid[1][1].isStart = true;
      grid[2][2].isFinish = true;
      updatedGrid = getSetWallNode(grid, 1, 1);
      updatedGrid = getSetWallNode(grid, 2, 2);
      expect(updatedGrid[1][1].type).toEqual("");
      expect(updatedGrid[2][2].type).toEqual("");
    });
  });
});

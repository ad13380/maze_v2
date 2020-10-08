import { useNewStartFinish } from "./useNewStartFinish";
import { generateGrid } from "../../testHelpers";

describe("useNewStartFinish", () => {
  const [getNewStartFinish] = useNewStartFinish();
  let grid;
  let updatedGrid;
  const oldNodeLoc = { row: 0, col: 0 };
  const newNodeLoc = { newRow: 2, newCol: 2 };

  beforeEach(() => {
    grid = generateGrid("visited");
  });

  describe("for old node location", () => {
    it("sets the node type to empty", () => {
      updatedGrid = getNewStartFinish(grid, oldNodeLoc, newNodeLoc, "isStart");
      expect(updatedGrid[0][0].type).toEqual("");
    });

    it("sets the startFinishAttribute to false", () => {
      updatedGrid = getNewStartFinish(grid, oldNodeLoc, newNodeLoc, "isStart");
      expect(updatedGrid[0][0].isStart).toEqual(false);
    });
  });

  describe("for new node location", () => {
    it("sets the node type to empty", () => {
      updatedGrid = getNewStartFinish(grid, oldNodeLoc, newNodeLoc, "isFinish");
      expect(updatedGrid[2][2].type).toEqual("");
    });

    it("sets the startFinishAttribute to true", () => {
      updatedGrid = getNewStartFinish(grid, oldNodeLoc, newNodeLoc, "isFinish");
      expect(updatedGrid[2][2].isFinish).toEqual(true);
    });
  });

  describe("when old and new node locations are the same", () => {
    it("does not change the node type", () => {
      updatedGrid = getNewStartFinish(
        grid,
        { row: 1, col: 1 },
        { newRow: 1, newCol: 1 },
        "isFinish"
      );
      expect(updatedGrid[1][1].type).toEqual("visited");
    });
  });
});

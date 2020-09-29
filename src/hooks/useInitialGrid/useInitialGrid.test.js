import { useInitialGrid } from "./useInitialGrid";

describe("useInitialGrid", () => {
  const [getInitialGrid] = useInitialGrid();
  let initialGrid;
  let gridProps = [3, 4, { row: 1, col: 1 }, { row: 2, col: 2 }];

  beforeEach(() => {
    initialGrid = getInitialGrid(...gridProps);
  });

  it("returns a 2d grid of the correct dimensions", () => {
    expect(initialGrid.length).toEqual(3);
    expect(initialGrid[0].length).toEqual(4);
  });

  it("correctly positions the start node", () => {
    expect(initialGrid[1][1].isStart).toBeTruthy();
    expect(initialGrid[1][1].isFinish).toBeFalsy();
  });

  it("correctly positions the finish node", () => {
    expect(initialGrid[2][2].isFinish).toBeTruthy();
    expect(initialGrid[2][2].isStart).toBeFalsy();
  });

  describe("with default attributes", () => {
    it("has a distance of infinity", () => {
      expect(initialGrid[0][0].distance).toEqual(Infinity);
    });

    it("has a previous node of null", () => {
      expect(initialGrid[0][0].previousNode).toEqual(null);
    });

    it("has an empty node type", () => {
      expect(initialGrid[0][0].type).toEqual("");
    });
  });
});

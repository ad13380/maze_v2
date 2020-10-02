import { dijkstra } from "./dijkstra";
import { expectedDijkstraResult } from "./dijkstraTestData";
import { generateDijkstraGrid } from "../../testHelpers";

describe("dijkstra", () => {
  let grid = generateDijkstraGrid();
  it("returns an array of visited nodes in search order", () => {
    // add start nodes
    grid[3][2].isStart = true;
    // add finish node
    grid[3][4].isFinish = true;

    // add wall
    grid[2][3].type = "wall";
    grid[3][3].type = "wall";
    grid[4][3].type = "wall";
    let visitedNodesInOrder = dijkstra(grid, grid[3][2], grid[3][4]);
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      expect(visitedNodesInOrder[i].row).toEqual(expectedDijkstraResult[i].row);
      expect(visitedNodesInOrder[i].col).toEqual(expectedDijkstraResult[i].col);
    }
  });
});

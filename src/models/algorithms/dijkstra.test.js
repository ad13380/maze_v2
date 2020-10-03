import { dijkstra, shortestPath } from "./dijkstra";
import { expectedDijkstraResult, expectedPathResult } from "./dijkstraTestData";
import { generateDijkstraGrid } from "../../testHelpers";

describe("dijkstra", () => {
  let grid = generateDijkstraGrid();
  // add start nodes
  grid[3][2].isStart = true;
  // add finish node
  grid[3][4].isFinish = true;

  // add wall
  grid[2][3].type = "wall";
  grid[3][3].type = "wall";
  grid[4][3].type = "wall";

  const visitedNodesInOrder = dijkstra(grid, grid[3][2], grid[3][4]);

  it("returns an array of visited nodes in search order", () => {
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      expect(visitedNodesInOrder[i].row).toEqual(expectedDijkstraResult[i].row);
      expect(visitedNodesInOrder[i].col).toEqual(expectedDijkstraResult[i].col);
    }
  });

  it("returns an array of the shortest path nodes in order", () => {
    const finishNode = visitedNodesInOrder.slice(-1)[0];
    const shortestPathNodesInOrder = shortestPath(finishNode);
    for (let i = 0; i < shortestPathNodesInOrder.length; i++) {
      shortestPathNodesInOrder[i].row = expectedPathResult[i].row;
      shortestPathNodesInOrder[i].col = expectedPathResult[i].col;
    }
  });
});

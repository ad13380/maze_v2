import { Dijkstra } from "./Dijkstra";
import { expectedDijkstraResult, expectedPathResult } from "./dijkstraTestData";
import { generateTestGrid } from "../../testHelpers";

describe("dijkstra", () => {
  describe("for a solvable maze", () => {
    let grid = generateTestGrid();
    // add start nodes
    grid[3][2].isStart = true;
    // add finish node
    grid[3][4].isFinish = true;

    // add wall
    grid[2][3].type = "wall";
    grid[3][3].type = "wall";
    grid[4][3].type = "wall";

    const dijkstra = new Dijkstra(grid, grid[3][2], grid[3][4]);
    const visitedNodesInOrder = dijkstra.getVisitedNodes();

    it("returns an array of visited nodes in search order", () => {
      for (let i = 0; i < visitedNodesInOrder.length; i++) {
        expect(visitedNodesInOrder[i].row).toEqual(
          expectedDijkstraResult[i].row
        );
        expect(visitedNodesInOrder[i].col).toEqual(
          expectedDijkstraResult[i].col
        );
      }
    });

    it("returns an array of the shortest path nodes in order", () => {
      const finishNode = visitedNodesInOrder.slice(-1)[0];
      const shortestPathNodesInOrder = dijkstra.getShortestPath(finishNode);
      for (let i = 0; i < shortestPathNodesInOrder.length; i++) {
        expect(shortestPathNodesInOrder[i].row).toEqual(
          expectedPathResult[i].row
        );
        expect(shortestPathNodesInOrder[i].col).toEqual(
          expectedPathResult[i].col
        );
      }
    });
  });

  describe("for an unsolvable maze", () => {
    let grid = generateTestGrid();
    // add start nodes
    grid[0][0].isStart = true;
    // add finish node
    grid[3][4].isFinish = true;

    // add wall
    grid[0][1].type = "wall";
    grid[1][1].type = "wall";
    grid[1][0].type = "wall";

    const dijkstra = new Dijkstra(grid, grid[0][0], grid[3][4]);
    const visitedNodesInOrder = dijkstra.getVisitedNodes();
    it("returns false", () => {
      expect(visitedNodesInOrder).toEqual([false]);
    });
  });
});

import { BreadthFirstSearch } from "./BreadthFirstSearch";
import {
  expectedBFSResult,
  expectedPathResult,
} from "./breadthFirstSearchTestData";
import { generateTestGrid } from "../../../testHelpers";

describe("breadth first search", () => {
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

    const bfs = new BreadthFirstSearch(grid, grid[3][2], grid[3][4]);
    const visitedNodesInOrder = bfs.getVisitedNodes();

    it("returns an array of visited nodes in search order", () => {
      for (let i = 0; i < visitedNodesInOrder.length; i++) {
        expect(visitedNodesInOrder[i].row).toEqual(expectedBFSResult[i].row);
        expect(visitedNodesInOrder[i].col).toEqual(expectedBFSResult[i].col);
      }
    });

    it("returns an array of the shortest path nodes in order", () => {
      const finishNode = visitedNodesInOrder.slice(-1)[0];
      const shortestPathNodesInOrder = bfs.getShortestPath(finishNode);
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

    const bfs = new BreadthFirstSearch(grid, grid[0][0], grid[3][4]);
    const visitedNodesInOrder = bfs.getVisitedNodes();
    it("returns false", () => {
      expect(visitedNodesInOrder).toEqual([false]);
    });
  });
});

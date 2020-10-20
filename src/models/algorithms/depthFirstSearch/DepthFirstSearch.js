export class DepthFirstSearch {
  constructor(grid, startNode, finishNode) {
    this.grid = grid;
    this.startNode = startNode;
    this.finishNode = finishNode;
  }

  getShortestPath(finishNode) {
    const shortestPathNodes = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      shortestPathNodes.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return shortestPathNodes;
  }

  getVisitedNodes() {
    const queue = [this.startNode];
    const visitedNodesInOrder = [];
    while (!!queue.length) {
      const currentNode = queue.pop();
      if (currentNode.type === "wall") continue;

      visitedNodesInOrder.push(currentNode);
      if (currentNode === this.finishNode) return visitedNodesInOrder;

      if (currentNode.type !== "visited") {
        currentNode.type = "visited";
        this.addUnvisitedNeighbours(currentNode, queue);
      }
    }
    return [false];
  }

  addUnvisitedNeighbours(node, queue) {
    const unvisitedNeighbours = this.getUnvisitedNeighbours(node);
    unvisitedNeighbours.forEach((neighbour) => {
      neighbour.previousNode = node;
      queue.push(neighbour);
    });
  }

  getUnvisitedNeighbours(node) {
    const neighbours = [];
    const { col, row } = node;
    if (row > 0) neighbours.push(this.grid[row - 1][col]);
    if (row < this.grid.length - 1) neighbours.push(this.grid[row + 1][col]);
    if (col > 0) neighbours.push(this.grid[row][col - 1]);
    if (col < this.grid[0].length - 1) neighbours.push(this.grid[row][col + 1]);
    return neighbours.filter((neighbour) => neighbour.type !== "visited");
  }
}

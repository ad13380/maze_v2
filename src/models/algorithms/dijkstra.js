export class Dijkstra {
  constructor(grid, startNode, finishNode) {
    this.grid = grid;
    this.startNode = startNode;
    this.finishNode = finishNode;
  }

  getVisitedNodes() {
    this.startNode.distance = 0;
    const visitedNodesInOrder = [];
    let unvisitedNodes = this.getAllNodes();

    while (!!unvisitedNodes.length) {
      unvisitedNodes = this.sortNodesByDistance(unvisitedNodes);
      const currentNode = unvisitedNodes.shift();
      if (currentNode.type === "wall") continue;

      if (currentNode.distance === Infinity) return [false];

      currentNode.type = "visited";
      visitedNodesInOrder.push(currentNode);
      if (currentNode === this.finishNode) return visitedNodesInOrder;
      this.updateUnvisitedNeighbours(currentNode);
    }
  }

  getAllNodes() {
    return this.grid.reduce((acc, val) => acc.concat(val));
  }

  sortNodesByDistance(nodes) {
    return nodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  }

  updateUnvisitedNeighbours(node) {
    const unvisitedNeighbours = this.getUnvisitedNeighbours(node);
    unvisitedNeighbours.forEach((neighbour) => {
      neighbour.distance = node.distance + 1;
      neighbour.previousNode = node;
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

  getShortestPath(finishNode) {
    const shortestPathNodes = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      shortestPathNodes.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return shortestPathNodes;
  }
}

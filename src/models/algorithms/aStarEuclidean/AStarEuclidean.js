export class AStarEuclidean {
  constructor(grid, startNode, finishNode) {
    this.grid = grid;
    this.startNode = startNode;
    this.finishNode = finishNode;
  }

  getVisitedNodes() {
    this.startNode.distance = 0;
    this.startNode.comDistance = this.getEuclideanHeuristic(this.startNode);
    const visitedNodesInOrder = [];
    let openSet = [this.startNode];

    while (!!openSet.length) {
      openSet = this.sortNodesByComDistance(openSet);
      const currentNode = openSet.shift();
      if (currentNode.type === "wall") continue;

      currentNode.type = "visited";
      visitedNodesInOrder.push(currentNode);
      if (currentNode === this.finishNode) return visitedNodesInOrder;

      this.addUnvisitedNeighbours(currentNode, openSet);
    }
    return [false];
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

  getEuclideanHeuristic(node) {
    const { row: finalRow, col: finalCol } = this.finishNode;
    const { row, col } = node;
    return (row - finalRow) ** 2 + (col - finalCol) ** 2;
  }

  sortNodesByComDistance(nodes) {
    return nodes.sort((nodeA, nodeB) => nodeA.comDistance - nodeB.comDistance);
  }

  addUnvisitedNeighbours(node, openSet) {
    const unvisitedNeighbours = this.getUnvisitedNeighbours(node);
    unvisitedNeighbours.forEach((neighbour) => {
      this.updateNeighbour(neighbour, node);
      if (!openSet.includes(neighbour)) {
        openSet.push(neighbour);
      }
    });
  }

  updateNeighbour(neighbourNode, currentNode) {
    neighbourNode.distance = currentNode.distance + 1;
    neighbourNode.comDistance =
      neighbourNode.distance + this.getEuclideanHeuristic(neighbourNode);
    neighbourNode.previousNode = currentNode;
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

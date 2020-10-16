export function mazeRecursive(grid, startNode, finishNode) {
  let nodeArray = [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
    { row: 3, col: 2 },
    { row: 4, col: 2 },
    { row: 5, col: 2 },
  ];

  let nodesInOrder = [];

  nodeArray.forEach((nodeLoc) => {
    let node = grid[nodeLoc.row][nodeLoc.col];
    node.type = "wall";
    nodesInOrder.push(node);
  });

  return nodesInOrder;
}

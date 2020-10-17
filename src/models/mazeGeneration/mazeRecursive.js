export class MazeRecursive {
  constructor(grid, startNode, finishNode) {
    this.grid = grid;
    this.rowNum = grid.length;
    this.colNum = grid[0].length;
    this.startNode = startNode;
    this.finishNode = finishNode;
    this.nodesInOrder = [];
  }

  getMaze() {
    this.addOuterWalls(this.rowNum, this.colNum);
    this.addInnerWalls(false, 1, this.colNum - 1, 1, this.rowNum - 1);
    return this.nodesInOrder;
  }

  addOuterWalls() {
    for (let i = 0; i < this.rowNum; i++) {
      if (i === 0 || i === this.rowNum - 1) {
        for (let j = 0; j < this.colNum; j++) {
          this.addNodeToArray(i, j);
        }
      } else {
        this.addNodeToArray(i, 0);
        this.addNodeToArray(i, this.colNum - 1);
      }
    }
  }

  addInnerWalls(skew, minX, maxX, minY, maxY) {
    if (skew) {
      if (maxX - minX < 2) return;

      const y = this.randomEvenNumber(minY + 1, maxY - 1);
      this.addHorizontalWall(minX, maxX, y);
      this.addInnerWalls(!skew, minX, maxX, minY, y - 1);
      this.addInnerWalls(!skew, minX, maxX, y + 1, maxY);
    } else {
      if (maxY - minY < 2) return;

      const x = this.randomEvenNumber(minX + 1, maxX - 1);
      this.addVerticalWall(minY, maxY, x);
      this.addInnerWalls(!skew, minX, x - 1, minY, maxY);
      this.addInnerWalls(!skew, x + 1, maxX, minY, maxY);
    }
  }

  addHorizontalWall(minX, maxX, i) {
    const gateLoc = this.randomOddNumber(minX, maxX);
    for (let j = minX; j <= maxX; j++) {
      if (j !== gateLoc) this.addNodeToArray(i, j);
    }
  }

  addVerticalWall(minY, maxY, j) {
    const gateLoc = this.randomOddNumber(minY, maxY);
    for (let i = minY; i <= maxY; i++) {
      if (i !== gateLoc) this.addNodeToArray(i, j);
    }
  }

  randomEvenNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.floor(randomNumber / 2) * 2;
  }

  randomOddNumber(min, max) {
    let randomOddNumber = this.randomEvenNumber(min, max) - 1;
    if (randomOddNumber < min) randomOddNumber += 2;
    return randomOddNumber;
  }

  addNodeToArray(row, col) {
    if (this.isStartOrFinish(row, col)) return;

    const node = this.grid[row][col];
    node.type = "wall";
    this.nodesInOrder.push(node);
  }

  isStartOrFinish(row, col) {
    const isStart = row === this.startNode.row && col === this.startNode.col;
    const isFinish = row === this.finishNode.row && col === this.finishNode.col;
    return isStart || isFinish;
  }
}

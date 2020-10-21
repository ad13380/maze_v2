import { useSetDragNode } from "./useSetDragNode";
import { generateTestGrid } from "../../testHelpers";

describe("useSetDragNode", () => {
  let grid = generateTestGrid("");
  let updatedGrid;
  const updatedNodeDrag = {
    isDragging: true,
    nodeType: "start",
  };
  const [getSetDragNode] = useSetDragNode();

  it("updates the node drag type for every node", () => {
    updatedGrid = getSetDragNode(grid, updatedNodeDrag);
    updatedGrid.forEach((row) => {
      row.forEach((node) => {
        expect(node.nodeDrag).toEqual(updatedNodeDrag);
      });
    });
  });
});

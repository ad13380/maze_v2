import { useClearVisitedNodes } from "./useClearVisitedNodes";
import { generateTestGrid, getNodeTypeTotal } from "../../testHelpers";

describe("useClearVisitedNodes", () => {
  let grid;
  let updatedGrid;
  const [getClearVisitedNodes] = useClearVisitedNodes();

  it("does not change node type for wall nodes", () => {
    grid = generateTestGrid("wall");
    updatedGrid = getClearVisitedNodes(grid);
    expect(getNodeTypeTotal(updatedGrid, "wall")).toEqual(36);
  });

  it("does not change node type for empty nodes", () => {
    grid = generateTestGrid("");
    updatedGrid = getClearVisitedNodes(grid);
    expect(getNodeTypeTotal(updatedGrid, "")).toEqual(36);
  });

  it("changes visited node type to empty node type", () => {
    grid = generateTestGrid("visited");
    updatedGrid = getClearVisitedNodes(grid);
    expect(getNodeTypeTotal(updatedGrid, "visited")).toEqual(0);
  });

  it("changes path node type to empty node type", () => {
    grid = generateTestGrid("path");
    updatedGrid = getClearVisitedNodes(grid);
    expect(getNodeTypeTotal(updatedGrid, "path")).toEqual(0);
  });
});

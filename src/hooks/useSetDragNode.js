export const useSetDragNode = () => {
  const getSetDragNode = (grid, updatedNodeDrag) => {
    return grid.map((row) => {
      return row.map((node) => {
        node.nodeDrag = updatedNodeDrag;
        return node;
      });
    });
  };

  return [getSetDragNode];
};

export function nodeClassReducer(state, action) {
  let nodeClass = "node ";

  switch (action.nodeDrag.nodeType) {
    case "start":
      nodeClass += "start-drag";
      break;
    case "finish":
      nodeClass += "finish-drag";
      break;
    default:
      break;
  }

  if (action.isStart) return (nodeClass += "node-start");
  if (action.isFinish) return (nodeClass += "node-finish");

  switch (action.type) {
    case "path":
      return (nodeClass += "node-shortest-path");
    case "visited":
      return (nodeClass += "node-visited");
    case "wall":
      return (nodeClass += "node-wall");
    default:
      return (nodeClass += "node-empty");
  }
}

import React from "react";
import Grid from "./Grid";
import { shallow } from "enzyme";

describe("<Grid  />", () => {
  let wrapper;
  let gridComponent;
  let nodeComponent;
  const initalProps = {
    grid: new Array(41).fill("").map(() => new Array(21).fill("")),
  };

  beforeEach(() => {
    wrapper = shallow(<Grid {...initalProps} />);
    gridComponent = wrapper.find("[data-test='grid-component']");
    nodeComponent = wrapper.find("[data-test='node-component']");
  });

  it("renders without error", () => {
    expect(gridComponent).toHaveLength(1);
  });

  it("displays a 40 by 20 grid of nodes", () => {
    expect(nodeComponent).toHaveLength(861);
  });
});

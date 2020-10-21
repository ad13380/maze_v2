import React from "react";
import PathFindingVisualizer from "./PathFindingVisualizer";
import { shallow } from "enzyme";

describe("<PathFindingVisualizer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PathFindingVisualizer />);
  });

  it("renders the counter", () => {
    const counter = wrapper.find("[data-test='counter-component']");
    expect(counter).toHaveLength(1);
  });

  it("renders the clear screen button", () => {
    const clearScreenButton = wrapper.find(
      "[data-test='clear-screen-button-component']"
    );
    expect(clearScreenButton).toHaveLength(1);
  });

  it("renders the clear path button", () => {
    const clearPathButton = wrapper.find(
      "[data-test='clear-path-button-component']"
    );
    expect(clearPathButton).toHaveLength(1);
  });

  it("renders the run algo button", () => {
    const runAlgoButton = wrapper.find(
      "[data-test='run-algo-button-component']"
    );
    expect(runAlgoButton).toHaveLength(1);
  });

  it("renders the home button", () => {
    const homeButton = wrapper.find("[data-test='home-button-component']");
    expect(homeButton).toHaveLength(1);
  });

  it("renders the grid", () => {
    const grid = wrapper.find("[data-test='grid-component']");
    expect(grid).toHaveLength(1);
  });
});

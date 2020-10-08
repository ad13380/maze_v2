import React from "react";
import PathFindingVisualizer from "./PathFindingVisualizer";
import { shallow } from "enzyme";

describe("<PathFindingVisualizer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PathFindingVisualizer />);
  });

  it("redners the page title", () => {
    const titleComponent = wrapper.find("[data-test='title-component']");
    expect(titleComponent).toHaveLength(1);
  });

  it("redners the counter", () => {
    const counter = wrapper.find("[data-test='counter-component']");
    expect(counter).toHaveLength(1);
  });

  it("redners the clear screen button", () => {
    const clearScreenButton = wrapper.find(
      "[data-test='clear-screen-button-component']"
    );
    expect(clearScreenButton).toHaveLength(1);
  });

  it("redners the clear path button", () => {
    const clearPathButton = wrapper.find(
      "[data-test='clear-path-button-component']"
    );
    expect(clearPathButton).toHaveLength(1);
  });

  it("redners the run algo button", () => {
    const runAlgoButton = wrapper.find(
      "[data-test='run-algo-button-component']"
    );
    expect(runAlgoButton).toHaveLength(1);
  });

  it("redners the grid", () => {
    const grid = wrapper.find("[data-test='grid-component']");
    expect(grid).toHaveLength(1);
  });
});

import React from "react";
import Title from "./Title";
import { shallow } from "enzyme";

describe("<Title />", () => {
  let wrapper;
  let titleComponent;

  beforeEach(() => {
    wrapper = shallow(<Title />);
    titleComponent = wrapper.find("div");
  });

  it("renders without error", () => {
    expect(titleComponent).toHaveLength(1);
  });

  it("displays the title", () => {
    expect(titleComponent.contains("Maze Pathfinder")).toBeTruthy();
  });
});

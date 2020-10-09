import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("for drawing a maze wall", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("allows you to remove an existing maze wall node", () => {
    wrapper.find("#node-9-11").simulate("mouseDown");
    wrapper.find("#node-9-12").simulate("mouseDown");
    wrapper.find("#node-9-11").simulate("mouseDown");
    expect(wrapper.find(".node-wall").length).toEqual(1);
  });

  it("allows you to click and drag the cursor", () => {
    wrapper.find("#node-9-10").simulate("mouseEnter");
    wrapper.find("#node-9-11").simulate("mouseEnter");
    wrapper.find("#node-9-11").simulate("mouseDown");
    wrapper.find("#node-9-12").simulate("mouseEnter");
    wrapper.find("#node-9-13").simulate("mouseEnter");
    wrapper.find("#node-9-13").simulate("mouseUp");
    wrapper.find("#node-9-14").simulate("mouseEnter");
    expect(wrapper.find(".node-wall").length).toEqual(3);
  });
});

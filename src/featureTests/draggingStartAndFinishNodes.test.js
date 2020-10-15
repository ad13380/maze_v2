import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("dragging a node", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("allows you to drag the start node to a new location", () => {
    expect(wrapper.find(".node-start").prop("id")).toEqual("node-10-12");
    wrapper.find("#node-10-12").simulate("mouseDown");
    wrapper.find("#node-10-13").simulate("mouseEnter");
    wrapper.find("#node-10-14").simulate("mouseEnter");
    wrapper.find("#node-10-15").simulate("mouseEnter");
    wrapper.find("#node-10-15").simulate("mouseUp");
    expect(wrapper.find(".node-start").prop("id")).toEqual("node-10-15");
  });

  it("allows you to drag the finish node to a new location", () => {
    expect(wrapper.find(".node-finish").prop("id")).toEqual("node-10-28");
    wrapper.find("#node-10-28").simulate("mouseDown");
    wrapper.find("#node-9-28").simulate("mouseEnter");
    wrapper.find("#node-8-28").simulate("mouseEnter");
    wrapper.find("#node-7-28").simulate("mouseEnter");
    wrapper.find("#node-7-28").simulate("mouseUp");
    expect(wrapper.find(".node-finish").prop("id")).toEqual("node-7-28");
  });
});
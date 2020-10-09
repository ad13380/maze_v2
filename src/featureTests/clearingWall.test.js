import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("when clicking clear screen button", () => {
  const wrapper = mount(<App />);
  const clearScreenButton = wrapper.find(
    '[data-test="clear-screen-button-component"]'
  );

  it("clears wall nodes", () => {
    wrapper.find("#node-9-11").simulate("mouseDown");
    wrapper.find("#node-10-11").simulate("mouseDown");
    wrapper.find("#node-11-11").simulate("mouseDown");
    expect(wrapper.find(".node-wall").length).toEqual(3);
    clearScreenButton.simulate("click");
    expect(wrapper.find(".node-wall").length).toEqual(0);
  });
});

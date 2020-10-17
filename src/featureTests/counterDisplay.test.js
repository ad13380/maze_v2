import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("for a solvable maze", () => {
  const wrapper = mount(<App />);
  const runAlgoButton = wrapper.find('[data-test="run-algo-button-component"]');

  it("renders the total visited and path nodes", () => {
    // draw a maze
    wrapper.find("#node-9-11").simulate("mouseDown");
    wrapper.find("#node-9-12").simulate("mouseDown");
    wrapper.find("#node-9-13").simulate("mouseDown");
    wrapper.find("#node-10-11").simulate("mouseDown");
    wrapper.find("#node-10-13").simulate("mouseDown");
    wrapper.find("#node-11-11").simulate("mouseDown");

    runAlgoButton.simulate("click");
    expect(wrapper.find(".counter-numbers").text()).toContain("443 19");
  });
});

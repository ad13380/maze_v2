import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "../App";

describe("for an unsolvable maze", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/visualise"]}>
      <App />
    </MemoryRouter>
  );
  const runAlgoButton = wrapper.find('[data-test="run-algo-button-component"]');

  it("renders an error", () => {
    // draw an unsolvable maze
    wrapper.find("#node-9-11").simulate("mouseDown");
    wrapper.find("#node-9-12").simulate("mouseDown");
    wrapper.find("#node-9-13").simulate("mouseDown");
    wrapper.find("#node-10-11").simulate("mouseDown");
    wrapper.find("#node-10-13").simulate("mouseDown");
    wrapper.find("#node-11-11").simulate("mouseDown");
    wrapper.find("#node-11-12").simulate("mouseDown");
    wrapper.find("#node-11-13").simulate("mouseDown");

    runAlgoButton.simulate("click");
    expect(wrapper.text()).toContain("This maze can't be solved");
  });
});

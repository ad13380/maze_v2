import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "../App";

describe("for a solvable maze", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/visualise"]}>
      <App />
    </MemoryRouter>
  );
  const runAlgoButton = wrapper.find('[data-test="run-algo-button-component"]');

  it("renders the total visited and path nodes", () => {
    // move start and finish closer together
    wrapper.find("#node-10-12").simulate("mouseDown");
    wrapper.find("#node-10-24").simulate("mouseEnter");
    wrapper.find("#node-10-24").simulate("mouseUp");

    runAlgoButton.simulate("click");
    expect(wrapper.find(".counter-numbers").text()).toContain("37 5");
  });
});

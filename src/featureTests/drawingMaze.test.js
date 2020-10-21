import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "../App";

describe("for drawing a maze wall", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/visualise"]}>
        <App />
      </MemoryRouter>
    );
  });

  it("allows you to remove an existing maze wall node", () => {
    // draw 2 wall nodes
    wrapper.find("#node-9-11").simulate("mouseDown");
    wrapper.find("#node-9-12").simulate("mouseDown");
    // remove a single wall node
    wrapper.find("#node-9-11").simulate("mouseDown");
    expect(wrapper.find(".node-wall").length).toEqual(1);
  });

  it("allows you to click and drag the cursor", () => {
    // click and drag wall nodes
    wrapper.find("#node-9-11").simulate("mouseDown");
    wrapper.find("#node-9-12").simulate("mouseEnter");
    wrapper.find("#node-9-13").simulate("mouseEnter");
    wrapper.find("#node-9-13").simulate("mouseUp");
    expect(wrapper.find(".node-wall").length).toEqual(3);
  });
});

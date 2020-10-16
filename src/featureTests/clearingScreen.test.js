import React from "react";
import { mount } from "enzyme";
import { wait } from "@testing-library/react";
import App from "../App";

jest.useFakeTimers();

describe("when clicking clear screen button", () => {
  let wrapper;
  let runAlgoButton;
  let clearScreenButton;

  beforeEach(() => {
    wrapper = mount(<App />);
    runAlgoButton = wrapper.find('[data-test="run-algo-button-component"]');
    clearScreenButton = wrapper.find(
      '[data-test="clear-screen-button-component"]'
    );
  });

  const updateGrid = async () => {
    jest.runAllTimers();
    await wait(() => {
      wrapper.update();
    });
  };

  it("clears visited nodes", async () => {
    // move start and finish nearer together
    wrapper.find("#node-10-12").simulate("mouseDown");
    wrapper.find("#node-10-25").simulate("mouseEnter");
    wrapper.find("#node-10-25").simulate("mouseUp");
    // run algorithm
    runAlgoButton.simulate("click");
    // render visited nodes
    await updateGrid();
    // render path nodes
    await updateGrid();
    // click clear path button
    clearScreenButton.simulate("click");
    expect(wrapper.find(".node-visited").length).toEqual(0);
  });

  it("clears path nodes", async () => {
    // move start and finish nearer together
    wrapper.find("#node-10-12").simulate("mouseDown");
    wrapper.find("#node-10-25").simulate("mouseEnter");
    wrapper.find("#node-10-25").simulate("mouseUp");
    // run algorithm
    runAlgoButton.simulate("click");
    // render visited nodes
    await updateGrid();
    // render path nodes
    await updateGrid();
    // click clear path button
    clearScreenButton.simulate("click");
    expect(wrapper.find(".node-shortest-path").length).toEqual(0);
  });

  it("clears wall nodes", async () => {
    // move start and finish nearer together
    wrapper.find("#node-10-12").simulate("mouseDown");
    wrapper.find("#node-10-25").simulate("mouseEnter");
    wrapper.find("#node-10-25").simulate("mouseUp");
    // draw 3 wall nodes
    wrapper.find("#node-9-11").simulate("mouseDown");
    wrapper.find("#node-9-12").simulate("mouseDown");
    wrapper.find("#node-9-13").simulate("mouseDown");
    // run algorithm
    runAlgoButton.simulate("click");
    // render visited nodes
    await updateGrid();
    // render path nodes
    await updateGrid();
    // click clear path button
    clearScreenButton.simulate("click");
    expect(wrapper.find(".node-wall").length).toEqual(0);
  });
});

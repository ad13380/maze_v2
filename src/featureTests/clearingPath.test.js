import React from "react";
import { mount } from "enzyme";
import { act, wait, render } from "@testing-library/react";
import App from "../App";

jest.useFakeTimers();

describe("when clicking clear path button", () => {
  const wrapper = mount(<App />);
  const runAlgoButton = wrapper.find('[data-test="run-algo-button-component"]');
  const clearPathButton = wrapper.find(
    '[data-test="clear-path-button-component"]'
  );

  const updateGrid = async () => {
    jest.runAllTimers();
    await wait(() => {
      wrapper.update();
    });
  };

  it("clears path and visited nodes", async () => {
    wrapper.find("#node-10-12").simulate("mouseDown");
    wrapper.find("#node-10-26").simulate("mouseEnter");
    wrapper.find("#node-10-26").simulate("mouseUp");
    runAlgoButton.simulate("click");

    // draw visited nodes
    await updateGrid();

    // draw path nodes
    await updateGrid();

    console.log(wrapper.find(".node-visited").length);
    console.log(wrapper.find(".node-shortest-path").length);
    clearPathButton.simulate("click");
    console.log(wrapper.find(".node-visited").length);
    console.log(wrapper.find(".node-shortest-path").length);
    expect(wrapper.find(".node-shortest-path").length).toEqual(0);
  });
});

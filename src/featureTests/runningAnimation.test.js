import React from "react";
import { mount } from "enzyme";
import { wait } from "@testing-library/react";
import App from "../App";

jest.useFakeTimers();

describe("when animating", () => {
  let wrapper;
  let runAlgoButton;

  beforeEach(() => {
    wrapper = mount(<App />);
    runAlgoButton = wrapper.find('[data-test="run-algo-button-component"]');
  });

  const updateGrid = async () => {
    jest.runAllTimers();
    await wait(() => {
      wrapper.update();
    });
  };

  it("renders visited and path nodes", async () => {
    // move start and finish nearer together
    wrapper.find("#node-10-12").simulate("mouseDown");
    wrapper.find("#node-10-25").simulate("mouseEnter");
    wrapper.find("#node-10-25").simulate("mouseUp");
    // draw maze
    wrapper.find("#node-9-26").simulate("mouseDown");
    wrapper.find("#node-10-26").simulate("mouseDown");
    wrapper.find("#node-11-26").simulate("mouseDown");
    // run algorithm
    runAlgoButton.simulate("click");
    // render visited nodes
    await updateGrid();
    // render path nodes
    await updateGrid();
    // click clear path button
    expect(wrapper.find(".node-visited").length).toEqual(79);
    expect(wrapper.find(".node-shortest-path").length).toEqual(6);
  });

  it("does not allow you to create additional wall nodes", async () => {
    // move start and finish nearer together
    wrapper.find("#node-10-12").simulate("mouseDown");
    wrapper.find("#node-10-25").simulate("mouseEnter");
    wrapper.find("#node-10-25").simulate("mouseUp");
    // run algorithm
    runAlgoButton.simulate("click");
    // draw maze
    wrapper.find("#node-9-26").simulate("mouseDown");
    wrapper.find("#node-10-26").simulate("mouseDown");
    wrapper.find("#node-11-26").simulate("mouseDown");
    // render visited nodes
    await updateGrid();
    // render path nodes
    await updateGrid();
    expect(wrapper.find(".node-wall").length).toEqual(0);
  });
});

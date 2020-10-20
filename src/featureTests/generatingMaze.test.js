import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import { wait } from "@testing-library/react";
import App from "../App";

jest.useFakeTimers();

describe("when clicking generate maze button", () => {
  let wrapper;
  let generateMazeButton;
  let runAlgoButton;
  let clearScreenButton;
  let clearPathButton;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/visualise"]}>
        <App />
      </MemoryRouter>
    );
    generateMazeButton = wrapper.find(
      '[data-test="generate-maze-button-component"]'
    );
    runAlgoButton = wrapper.find('[data-test="run-algo-button-component"]');
    clearScreenButton = wrapper.find(
      '[data-test="clear-screen-button-component"]'
    );
    clearPathButton = wrapper.find('[data-test="clear-path-button-component"]');
  });

  const updateGrid = async () => {
    jest.runAllTimers();
    await wait(() => {
      wrapper.update();
    });
  };

  it("generates a maze", async () => {
    generateMazeButton.simulate("click");
    // render wall nodes
    await updateGrid();
    expect(wrapper.find(".node-wall").length).toBeGreaterThan(0);
  });

  it("does not allow you to run algorithm while generating maze", async () => {
    generateMazeButton.simulate("click");
    // run algorithm
    runAlgoButton.simulate("click");
    // render wall nodes
    await updateGrid();
    expect(wrapper.find(".node-visited").length).toEqual(0);
    expect(wrapper.find(".node-shortest-path").length).toEqual(0);
  });

  it("is cleared by clicking clear screen button", async () => {
    generateMazeButton.simulate("click");
    // render wall nodes
    await updateGrid();
    // click clear path button
    clearScreenButton.simulate("click");
    expect(wrapper.find(".node-wall").length).toEqual(0);
  });

  it("is not cleared by clicking clear path button", async () => {
    generateMazeButton.simulate("click");
    // render wall nodes
    await updateGrid();
    // click clear path button
    clearPathButton.simulate("click");
    expect(wrapper.find(".node-wall").length).toBeGreaterThan(0);
  });
});

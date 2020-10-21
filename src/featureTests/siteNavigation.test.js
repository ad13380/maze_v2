import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "../App";
import Home from "../containers/Home/Home";
import Tutorial from "../containers/Tutorial/Tutorial";
import PathFindingVisualizer from "../containers/PathFindingVisualizer/PathFindingVisualizer";

describe("for navigating the site", () => {
  let wrapper;
  let visitTutorialButton;
  let visitVisualiseButton;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    visitTutorialButton = wrapper.find('[data-test="tutorial-page-button"]');
    visitVisualiseButton = wrapper.find('[data-test="visualise-page-button"]');
  });

  it("allows you to navigate to the tutorial page from the home page ", () => {
    expect(wrapper.find(Home).length).toEqual(1);
    expect(wrapper.find(Tutorial).length).toEqual(0);
    visitTutorialButton.simulate("click", { button: 0 });
    expect(wrapper.find(Home).length).toEqual(0);
    expect(wrapper.find(Tutorial).length).toEqual(1);
  });

  it("allows you to navigate to the home page from the tutorial page ", () => {
    visitTutorialButton.simulate("click", { button: 0 });
    expect(wrapper.find(Tutorial).length).toEqual(1);
    wrapper
      .find('[data-test="home-button-component"]')
      .simulate("click", { button: 0 });
    expect(wrapper.find(Home).length).toEqual(1);
  });

  it("allows you to navigate to the visualise page from the home page ", () => {
    expect(wrapper.find(Home).length).toEqual(1);
    expect(wrapper.find(PathFindingVisualizer).length).toEqual(0);
    visitVisualiseButton.simulate("click", { button: 0 });
    expect(wrapper.find(Home).length).toEqual(0);
    expect(wrapper.find(PathFindingVisualizer).length).toEqual(1);
  });

  it("allows you to navigate to the home page from the visualise page ", () => {
    visitVisualiseButton.simulate("click", { button: 0 });
    expect(wrapper.find(PathFindingVisualizer).length).toEqual(1);
    wrapper
      .find('[data-test="home-button-component"]')
      .simulate("click", { button: 0 });
    expect(wrapper.find(Home).length).toEqual(1);
  });
});

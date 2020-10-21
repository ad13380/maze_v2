import React from "react";
import Home from "./Home";
import { shallow } from "enzyme";

describe("<Home />", () => {
  let wrapper;
  let visitVisualiseButton;
  let visitTutorialButton;
  let subheader;
  let githubLink;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("renders the subheader", () => {
    subheader = wrapper.find("h3");
    expect(subheader.text()).toEqual(
      "An Interactive Pathfinding Algorithm Visualiser"
    );
  });

  it("renders the visualise page button", () => {
    visitVisualiseButton = wrapper.find('[data-test="visualise-page-button"]');
    expect(visitVisualiseButton.length).toEqual(1);
  });

  it("renders the tutorial page button", () => {
    visitTutorialButton = wrapper.find('[data-test="tutorial-page-button"]');
    expect(visitTutorialButton.length).toEqual(1);
  });

  it("renders a github link", () => {
    githubLink = wrapper.find("a");
    expect(githubLink.length).toEqual(1);
    expect(githubLink.prop("href")).toEqual("https://github.com/ad13380/");
  });
});

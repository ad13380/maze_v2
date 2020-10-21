import React from "react";
import Tutorial from "./Tutorial";
import { shallow } from "enzyme";

describe("<Tutorial/>", () => {
  let wrapper;
  let carouselComponent;
  let homeButton;

  beforeEach(() => {
    wrapper = shallow(<Tutorial />);
  });

  it("renders the carousel component", () => {
    carouselComponent = wrapper.find('[data-test="carousel-component"]');
    expect(carouselComponent.length).toEqual(1);
  });

  it("renders the home button", () => {
    homeButton = wrapper.find('[data-test="home-button-component"]');
    expect(homeButton.length).toEqual(1);
  });
});

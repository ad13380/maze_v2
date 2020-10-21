import React from "react";
import Selector from "./Selector";
import { shallow } from "enzyme";

describe("<Selector />", () => {
  let wrapper;
  let selectorComponent;
  let selectAStarManButton;
  const mockEventHandler = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Selector handleChangeAlgorithm={mockEventHandler} />);
    selectorComponent = wrapper.find('[data-test="selector-component"]');
    selectAStarManButton = wrapper.find(
      '[data-test="aStarMan-selector-component"]'
    );
  });

  it("renders without error", () => {
    expect(selectorComponent).toHaveLength(1);
  });

  it("lists all 5 algorithms", () => {
    expect(selectorComponent.text()).toEqual(
      "DijkstraA* ManhattanA* EuclideanBreadth-First SearchDepth-First Search"
    );
  });

  it("selecting an algorithm triggers an event handler", () => {
    selectAStarManButton.simulate("click");
    expect(mockEventHandler.mock.calls.length).toBe(1);
  });
});

import React from "react";
import Error from "./Error";
import { shallow } from "enzyme";

describe("<Error />", () => {
  let wrapper;
  let errorComponent;

  beforeEach(() => {
    wrapper = shallow(<Error />);
  });

  it("renders without error", () => {
    errorComponent = wrapper.find(`[data-test='error-component']`);
    expect(errorComponent).toHaveLength(1);
  });

  it("displays an error message", () => {
    errorComponent = wrapper.find(`[data-test='error-message']`).text();
    expect(errorComponent).toEqual("This maze can't be solved");
  });

  it("displays a hint", () => {
    errorComponent = wrapper.find(`[data-test='error-hint']`).text();
    expect(errorComponent).toEqual(
      "Hint: click on an existing wall node to remove it, or drag and drop the start and end nodes to different locations"
    );
  });
});

import React from "react";
import Button from "./Button";
import { shallow } from "enzyme";

describe("<Button />", () => {
  let wrapper;
  let buttonComponent;
  const initalProps = { children: "Button text" };

  beforeEach(() => {
    wrapper = shallow(<Button {...initalProps} />);
    buttonComponent = wrapper.find(`[data-test='button-component']`);
  });

  it("renders without error", () => {
    expect(buttonComponent).toHaveLength(1);
  });

  it("displays the correct button text", () => {
    expect(buttonComponent.text()).toEqual("Button text");
  });
});

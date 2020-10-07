import React from "react";
import { mount } from "enzyme";
import { act } from "@testing-library/react";
import App from "../App";

jest.useFakeTimers();

describe("when clicking clear path button", () => {
  const wrapper = mount(<App />);
  const runAlgoButton = wrapper.find('[data-test="run-algo-button-component"]');
  const clearScreenButton = wrapper.find(
    '[data-test="clear-screen-button-component"]'
  );

  it("clears path and visited nodes", () => {
    act(() => {
      runAlgoButton.simulate("click");
      jest.runAllTimers();
      wrapper.update();
    });
    console.log(wrapper.instance());
  });
});

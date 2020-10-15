import React from "react";
import { mount } from "enzyme";
import { act, waitFor } from "@testing-library/react";
import App from "../App";

jest.useFakeTimers();

describe("when clicking clear path button", () => {
  const wrapper = mount(<App />);
  const runAlgoButton = wrapper.find('[data-test="run-algo-button-component"]');
  const clearPathButton = wrapper.find(
    '[data-test="clear-path-button-component"]'
  );

  it("clears path and visited nodes", async () => {
    runAlgoButton.simulate("click");
    act(() => {
      jest.runOnlyPendingTimers();
    });
    clearPathButton.simulate("click");
    expect(wrapper.find(".node-visited").length).toEqual(0);
  });
});

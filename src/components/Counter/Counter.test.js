import React from "react";
import Counter from "./Counter";
import { shallow } from "enzyme";

describe("<Counter />", () => {
  const initalProps = { isPathClear: true };
  const postAnimationProps = {
    isPathClear: false,
    visitedNodesInOrder: new Array(99),
    shortestPathNodesInOrder: new Array(10),
  };

  describe("on initial render", () => {
    it("renders without error", () => {
      const wrapper = shallow(<Counter {...initalProps} />);
      const counterComponent = wrapper.find(`[data-test='counter-component']`);
      expect(counterComponent).toHaveLength(1);
    });

    it("displays the correct titles", () => {
      const wrapper = shallow(<Counter {...initalProps} />);
      const text = wrapper.find(`[data-test='counter-title']`).text();
      expect(text).toEqual("Visited Nodes: Shortest Path Nodes:");
    });

    it("has initial total visited nodes and shortest path count of 0", () => {
      const wrapper = shallow(<Counter {...initalProps} />);
      const text = wrapper.find(`[data-test='counter-numbers']`).text();
      expect(text).toEqual("0 0");
    });
  });

  describe("on post animation", () => {
    it("displays the total visited nodes and shortest path count", () => {
      const wrapper = shallow(<Counter {...postAnimationProps} />);
      const text = wrapper.find(`[data-test='counter-numbers']`).text();
      expect(text).toEqual("99 10");
    });
  });
});

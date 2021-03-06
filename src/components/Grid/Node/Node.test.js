import React from "react";
import Node from "./Node";
import { shallow } from "enzyme";

describe("<Node />", () => {
  let wrapper;
  let nodeComponent;
  let nodeProps;
  const mouseDownMock = jest.fn();
  const mouseEnterMock = jest.fn();
  const mouseUpMock = jest.fn();

  beforeEach(() => {
    nodeProps = {
      nodeDrag: {
        nodeType: "",
      },
      isStart: false,
      isFinish: false,
      type: "",
      handleMouseDown: () => mouseDownMock(),
      handleMouseEnter: () => mouseEnterMock(),
      handleMouseUp: () => mouseUpMock(),
    };
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders without error", () => {
    wrapper = shallow(<Node {...nodeProps} />);
    nodeComponent = wrapper.find("div");
    expect(nodeComponent).toHaveLength(1);
  });

  describe("for events", () => {
    it("responds to a mouse down", () => {
      wrapper = shallow(<Node {...nodeProps} />);
      nodeComponent = wrapper.find("div").simulate("mouseDown");
      expect(mouseDownMock).toHaveBeenCalledTimes(1);
    });

    it("responds to a mouse enter", () => {
      wrapper = shallow(<Node {...nodeProps} />);
      nodeComponent = wrapper.find("div").simulate("mouseEnter");
      expect(mouseEnterMock).toHaveBeenCalledTimes(1);
    });

    it("responds to a mouse up", () => {
      wrapper = shallow(<Node {...nodeProps} />);
      nodeComponent = wrapper.find("div").simulate("mouseUp");
      expect(mouseUpMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("for start and end nodes", () => {
    it("assigns the correct start node class", () => {
      nodeProps.isStart = true;
      wrapper = shallow(<Node {...nodeProps} />);
      nodeComponent = wrapper.find("div");
      expect(nodeComponent.hasClass("node node-start")).toBeTruthy();
    });

    it("assigns the correct finish node class", () => {
      nodeProps.isFinish = true;
      wrapper = shallow(<Node {...nodeProps} />);
      nodeComponent = wrapper.find("div");
      expect(nodeComponent.hasClass("node node-finish")).toBeTruthy();
    });
  });

  describe("for node type", () => {
    it("assigns the correct empty node class", () => {
      wrapper = shallow(<Node {...nodeProps} />);
      nodeComponent = wrapper.find("div");
      expect(nodeComponent.hasClass("node node-empty")).toBeTruthy();
    });

    it("assigns the correct wall node class", () => {
      nodeProps.type = "wall";
      wrapper = shallow(<Node {...nodeProps} />);
      nodeComponent = wrapper.find("div");
      expect(nodeComponent.hasClass("node node-wall")).toBeTruthy();
    });

    it("assigns the correct path node class", () => {
      nodeProps.type = "path";
      wrapper = shallow(<Node {...nodeProps} />);
      nodeComponent = wrapper.find("div");
      expect(nodeComponent.hasClass("node-shortest-path")).toBeTruthy();
    });

    it("assigns the correct visited node class", () => {
      nodeProps.type = "visited";
      wrapper = shallow(<Node {...nodeProps} />);
      nodeComponent = wrapper.find("div");
      expect(nodeComponent.hasClass("node node-visited")).toBeTruthy();
    });
  });

  describe("for dragging nodes", () => {
    it("assigns the correct start drag node class", () => {
      nodeProps.nodeDrag.nodeType = "start";
      wrapper = shallow(<Node {...nodeProps} />);
      nodeComponent = wrapper.find("div");
      expect(nodeComponent.hasClass("node start-drag")).toBeTruthy();
    });

    it("assigns the correct finish drag node class", () => {
      nodeProps.nodeDrag.nodeType = "finish";
      wrapper = shallow(<Node {...nodeProps} />);
      nodeComponent = wrapper.find("div");
      expect(nodeComponent.hasClass("node finish-drag")).toBeTruthy();
    });
  });
});

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import { wait } from "@testing-library/react";
import App from "../App";

jest.useFakeTimers();

describe("when animating", () => {
  let wrapper;
  let runAlgoButton;
  let selectDijkstraButton;
  let selectAStarManButton;
  let selectAStarEucButton;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/visualise"]}>
        <App />
      </MemoryRouter>
    );
    runAlgoButton = wrapper.find('[data-test="run-algo-button-component"]');
    selectDijkstraButton = wrapper.find(
      '[data-test="dijkstra-selector-component"]'
    );
    selectAStarManButton = wrapper.find(
      '[data-test="aStarMan-selector-component"]'
    );
    selectAStarEucButton = wrapper.find(
      '[data-test="aStarEuc-selector-component"]'
    );
  });

  const updateGrid = async () => {
    jest.runAllTimers();
    await wait(() => {
      wrapper.update();
    });
  };

  describe("renders visited and path nodes", () => {
    it("after selecting Dijkstra algorithm", async () => {
      // move start and finish closer together
      wrapper.find("#node-10-12").simulate("mouseDown");
      wrapper.find("#node-10-25").simulate("mouseEnter");
      wrapper.find("#node-10-25").simulate("mouseUp");
      // draw maze
      wrapper.find("#node-9-26").simulate("mouseDown");
      wrapper.find("#node-10-26").simulate("mouseDown");
      wrapper.find("#node-11-26").simulate("mouseDown");
      // select Dijkstra
      selectDijkstraButton.simulate("click");
      // run algorithm
      runAlgoButton.simulate("click");
      // render visited nodes
      await updateGrid();
      // render path nodes
      await updateGrid();
      expect(wrapper.find(".node-visited").length).toEqual(79);
      expect(wrapper.find(".node-shortest-path").length).toEqual(6);
    });

    it("after selecting A* Manhattan algorithm", async () => {
      wrapper.find("#node-10-12").simulate("mouseDown");
      wrapper.find("#node-10-25").simulate("mouseEnter");
      wrapper.find("#node-10-25").simulate("mouseUp");
      wrapper.find("#node-9-26").simulate("mouseDown");
      wrapper.find("#node-10-26").simulate("mouseDown");
      wrapper.find("#node-11-26").simulate("mouseDown");
      // select A* Manhattan
      selectAStarManButton.simulate("click");
      runAlgoButton.simulate("click");
      await updateGrid();
      await updateGrid();
      expect(wrapper.find(".node-visited").length).toEqual(13);
      expect(wrapper.find(".node-shortest-path").length).toEqual(6);
    });

    it("after selecting A* Euclidean algorithm", async () => {
      wrapper.find("#node-10-12").simulate("mouseDown");
      wrapper.find("#node-10-25").simulate("mouseEnter");
      wrapper.find("#node-10-25").simulate("mouseUp");
      wrapper.find("#node-9-26").simulate("mouseDown");
      wrapper.find("#node-10-26").simulate("mouseDown");
      wrapper.find("#node-11-26").simulate("mouseDown");
      // select A* Euclidean
      selectAStarEucButton.simulate("click");
      runAlgoButton.simulate("click");
      await updateGrid();
      await updateGrid();
      expect(wrapper.find(".node-visited").length).toEqual(2);
      expect(wrapper.find(".node-shortest-path").length).toEqual(6);
    });
  });

  it("does not allow you to create additional wall nodes", async () => {
    wrapper.find("#node-10-12").simulate("mouseDown");
    wrapper.find("#node-10-25").simulate("mouseEnter");
    wrapper.find("#node-10-25").simulate("mouseUp");
    runAlgoButton.simulate("click");
    // draw maze attempt
    wrapper.find("#node-9-26").simulate("mouseDown");
    wrapper.find("#node-10-26").simulate("mouseDown");
    wrapper.find("#node-11-26").simulate("mouseDown");
    await updateGrid();
    await updateGrid();
    expect(wrapper.find(".node-wall").length).toEqual(0);
  });
});

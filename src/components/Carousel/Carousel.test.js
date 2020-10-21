import React from "react";
import Carousel from "./Carousel";
import { shallow } from "enzyme";

describe("<Carousel />", () => {
  let wrapper;
  let carouselComponent;

  beforeEach(() => {
    wrapper = shallow(<Carousel />);
    carouselComponent = wrapper.find('[data-test="carousel-component"]');
  });

  it("renders without error", () => {
    expect(carouselComponent).toHaveLength(1);
  });

  it("only displays one tutorial section at a time", async () => {
    expect(wrapper.find(".active").text()).toEqual(
      'What Is a Pathfinding Algorithm?At its core, a pathfinding algorithm seeks to find the shortest path between two points in a "graph". A graph in this sense can be thought of as a series of vertices (or nodes) that are connected through edges (or links). The algorithms in this application are adapted for a 2D grid, whereby each square within the grid represents a node, and each node is connected to its neighbours through one of its four sides. Therefore, a node can be traversed by moving left, right, up or down - but not diagonally. The "cost" of traveling from one node to another is 1, the cost of traveling through a maze wall is Infinity.'
    );
  });
});

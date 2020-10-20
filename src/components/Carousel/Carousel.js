import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide carousel-component"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h4>Drawing a Maze</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis n
          </p>
          <img class="d-block" src="images/generate-maze.gif" />
        </div>
        <div class="carousel-item">
          <img class="d-block" src="images/generate-maze.gif" />
          <p>two</p>
        </div>
        <div class="carousel-item">
          <img class="d-block" src="images/generate-maze.gif" />
          <p>three</p>
        </div>
      </div>
      <a
        class="carousel-control-prev dark"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;

import React from "react";
import "./Tutorial.css";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Button from "../../components/Button/Button";

const Tutorial = () => {
  return (
    <div class="tutorial-wrapper">
      <Carousel data-test="carousel-component" />
      <Link to="/">
        <Button data-test="home-button-component" onDisable={false}>
          ← Home
        </Button>
      </Link>
    </div>
  );
};

export default Tutorial;

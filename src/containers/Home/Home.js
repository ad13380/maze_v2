import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <h3>An Interactive Pathfinding Algorithm Visualiser</h3>
        <Link to="/visualise">
          <button className="neomorphic" data-test="visualise-page-button">
            Visualise
          </button>
        </Link>
        <Link to="/tutorial">
          <button className="neomorphic" data-test="tutorial-page-button">
            How To Use
          </button>
        </Link>
        <a id="github-link" href="https://github.com/ad13380/">
          Github: Anthony Donovan
        </a>
      </div>
    </>
  );
};

export default Home;

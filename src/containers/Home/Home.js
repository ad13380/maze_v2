import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/visualise">
        <button data-test="visualise-page-button">Visualise</button>
      </Link>
      <br />
      <Link to="/tutorial">
        <button data-test="tutorial-page-button">How To Use</button>
      </Link>
      <br />
      <a href="https://github.com/ad13380/">Github: Anthony Donovan</a>
    </>
  );
};

export default Home;

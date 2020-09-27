import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={"btn btn-outline-dark button-styling"}
      onClick={props.handleOnClick}
      disabled={props.onDisable}
    >
      {props.children}
    </button>
  );
};

export default Button;

import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-message">This maze can't be solved</div>
      <div className="error-hint">
        Hint: click on an existing wall node to remove it, or drag and drop the
        start <br />
        and end nodes to different locations
      </div>
    </div>
  );
};

export default Error;

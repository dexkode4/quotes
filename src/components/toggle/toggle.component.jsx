import React from "react";

export const Toggle = ({ handleClick, bg }) => (
  <button className="btn" onClick={handleClick} style={bg}>
    New Quote
  </button>
);

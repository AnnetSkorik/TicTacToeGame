import React from "react";
import classes from "./../../src/index.css";

const Square = (props) => {
  return (
    <div className={classes}>
      <button className="square" onClick={props.onClick}>{props.value}</button>
    </div>
  );
};

export default Square;

import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import CardWidget from "../CardWidget";

const ItemCount = ({ stock, onAdd, contador, onRest, children }) => {
 
  return (
    <>
      <div className="counter-box">
        <div
          className="icon-count"
          onClick={() => {
            onRest();
          }}
        >
          <CardWidget className="cardIcon" icon={"remove_circle_outline"} />
        </div>
        <span className="num-count">{contador}</span>
        <div
          className="icon-count"
          id="btn-add-js"
          onClick={() => {
            onAdd(stock, contador);
          }}
        >
          <CardWidget className="cardIcon" icon={"add_circle_outline"} />
        </div>
      </div>
      <div className="btn-buy">{children}</div>
    </>
  );
};

export default ItemCount;

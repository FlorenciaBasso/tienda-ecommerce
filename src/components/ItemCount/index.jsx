import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import CardWidget from "../CardWidget";
import { Button } from "@material-ui/core";

const ItemCount = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const increment = (contador) => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const decrement = (contador) => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  return (
    <>
      <div className="counter-box">
        <div className="icon-count" onClick={() => decrement(contador)}>
          <CardWidget className="cardIcon" icon={"remove_circle_outline"} />
        </div>
        <span className="num-count">{contador}</span>
        <div
          className="icon-count"
          id="btn-add-js"
          onClick={() => increment(contador)}
        >
          <CardWidget className="cardIcon" icon={"add_circle_outline"} />
        </div>
      </div>
      <div
        onClick={() => onAdd(contador)}
        className="btn btn-sm btn-primary btn-block btn-buy"
      >
        Agregar al carrito
      </div>
    </>
  );
};

export default ItemCount;

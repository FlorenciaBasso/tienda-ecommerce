import "./style.scss";
import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Grid from "@material-ui/core/Grid";

const Cart = () => {

  const {cart, setCart} = useContext(CartContext);
  console.log("estas en el carrito");
  console.log(cart);

  return (
    <>
      <Grid item lg={12}>
        hola
      </Grid>
    </>
  );
};

export default Cart;
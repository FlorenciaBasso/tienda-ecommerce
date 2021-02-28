import "./style.scss";
import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import ListCarrito from "../ListCarrito";

const Cart = (product) => {

  const {cart, setCart} = useContext(CartContext);
//   console.log("estas en el carrito");
//   console.log(cart);

  const [listaCarrito, setProducts] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);
  
	React.useEffect(() => {
	  setIsLoading(true);
	  const carritoPromise = new Promise((resolve, reject) => {
		setTimeout(() => resolve(cart), 1000);
	  });
  
	  carritoPromise.then((result) => {
		setProducts(result);
		setIsLoading(false);
	  });
	}, []);
  
	if (isLoading) {
	  return(
		<Container maxWidth="lg">
			<Grid item xs={12}>
				<h2 className="title">Cargando carrito..</h2>
			</Grid>
    	</Container>
	  )
	}


  return (
    <>
    <Container maxWidth="lg">
      <Grid item lg={12}>
        <ListCarrito products={listaCarrito} className="product-container"/>
      </Grid>
    </Container>
    </>
  );
};

export default Cart;
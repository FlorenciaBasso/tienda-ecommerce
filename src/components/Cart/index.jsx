import "./style.scss";
import { Container, Grid } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      let myTotal = 0;

      cart.forEach((order) => {
        myTotal = myTotal + order.item.price * order.quantity;
      });

      setTotal(myTotal);
    };
    getTotal();
  }, [cart]);

  const deleteProduct = (id) => {
    const filteredCart = cart.filter((order) => order.item.id !== id);
    setCart(filteredCart);
  };

  if (cart.length === 0) {
    return (
		<Container maxWidth="lg">
        <Grid item xs={12}>
          <h2 className="title">El carrito está vacío..</h2>
          <p>Mire los productos disponibles.</p>
          <Link to="/" className="btn btn-sm btn-primary btn-back">Ir a la Home</Link>
        </Grid>
    </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Grid item xs={12}>
        <h1 className="title">Bienvenid@ al carrito!</h1>
      </Grid>
      <Grid container spacing={2}>
        {cart.map((itemCart) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={itemCart.item.id}>
              <div className="cartItem">
                <div className="cart-header">
                  <img src={itemCart.item.src} alt={itemCart.item.title} className="cart-item"></img>
                </div>
                <p className="cart-cant">{itemCart.quantity}</p>
                <p className="cart-title">{itemCart.item.title}</p>
                <p className="cart-price">${itemCart.item.price}</p>
                <button className="btn btn-sm btn-primary btn-delete" onClick={() => deleteProduct(itemCart.item.id)}>Borrar</button>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={12}>
        <b className="total">Total de tu compra: $ {total}</b>
        <Link className="btn btn-sm btn-primary btn-buy">Continuar con la compra</Link>
      </Grid>

    </Container>
  );
};

export default Cart;
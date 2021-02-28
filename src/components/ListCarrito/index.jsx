import './style.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Item from '../../components/Item';
import CardWidget from '../CardWidget';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ListCarrito = ({products}) => {
const {cart, setCart} = useContext(CartContext);
console.log(cart);
  return (
    <Container maxWidth="lg">
      {
        cart === "" ? "No tienes productos en tu carrito. Link" : 
        <Grid container spacing={6}>
            {products.map((cart) => {
              return(
                <Grid item xs={12} sm={6} md={4} key={cart.id}>
                    <p>Producto: {[0].title}</p>
                    <p>Descartar producto</p>
                    <CardWidget className="cardIcon" icon={"remove_circle_outline"} />
                </Grid>
              )
            })}
          </Grid>
      }
    </Container>
  );

}

export default ListCarrito;
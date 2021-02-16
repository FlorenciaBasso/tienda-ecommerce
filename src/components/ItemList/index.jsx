import './style.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Item from '../../components/Item';
import { Link } from 'react-router-dom';

const ItemList = ({products}) => {
  return (
    <>
    <Container maxWidth="lg">
     <Grid container spacing={6}>
        {products.map((product) => {
          return(
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Item product={product}>
                <Link className="btn btn-sm btn-primary btn-buy" to={`/item/${product.id}`}>Comprar</Link>
              </Item>
            </Grid>
          )
        })}
      </Grid>
    </Container>
    </>
  );

}

export default ItemList;
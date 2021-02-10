import './style.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Item from '../../components/Item';

const ItemList = ({products}) => {
  return (
    <>
    <Container maxWidth="lg">
     <Grid container spacing={6}>
        {products.map((product) => {
          return(
            <>     
              <Grid item xs={12} sm={6} md={4}>
                <Item key={product.id} product={product}>
                  <button className="btn btn-sm btn-primary btn-buy">Comprar</button>
                </Item>
              </Grid>
            </>
          )
        })}
      </Grid>
    </Container>
    </>
  );

}

export default ItemList;
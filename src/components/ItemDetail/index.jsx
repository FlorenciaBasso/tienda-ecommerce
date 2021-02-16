import './style.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '../Card';
import { Link } from 'react-router-dom';

const ItemDetail = ({details}) => {
  return (
    <>
    <Container maxWidth="lg">
        {details.map((item) => {
          return(
            <Grid item xs={12} key={item.id} >
              <Card item={item}>
                <Link className="btn btn-sm btn-primary" to={`/checkout/${item.id}`}>Comprar</Link>
              </Card>
            </Grid>
          )
        })}
    </Container>
    </>
  );

}

export default ItemDetail;



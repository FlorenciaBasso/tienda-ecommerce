import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ItemDetailContainer from './container/ItemDetailContainer';

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos!'}/>
      <ItemDetailContainer titleProduct={'Detalle de producto:'}/>
      <Container maxWidth="lg">
        <Grid item xs={12}>
          
        </Grid>
      </Container>
    </>
  );
}
export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos!'}/>
      <Container maxWidth="lg">
        <Grid item xs={12}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a commodo turpis. Maecenas quis odio sem.</p>
          <p>Suspendisse dictum placerat risus, eu convallis est bibendum quis. Proin consectetur ultricies lorem eget elementum.</p>
        </Grid>
      </Container>
    </>
  );
}
export default App;
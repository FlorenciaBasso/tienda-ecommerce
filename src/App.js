import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import CategoryListContainer from './container/CategoryListContainer';
// import GlobalContext from './context/GlobalContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    {/* <GlobalContext.Provider> */}
      <BrowserRouter>  
      <NavBar></NavBar>      
      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting={'Bienvenidos!'}/>
        </Route>
        <Route path="/categoria/:categoriaID">
          <CategoryListContainer/>
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer titleProduct={'Detalle de producto:'}/>
        </Route>        
        <Route path="/cart">
          {/* <Form></Form> */}
        </Route>   
      </Switch>
      </BrowserRouter>
    {/* </GlobalContext.Provider> */}
    </>
  );
}
export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import CategoryListContainer from './container/CategoryListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <>
      <CartProvider>
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
              <Cart></Cart>
            </Route>   
        </Switch>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}
export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar';
import Form from './components/Form';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import CategoryListContainer from './container/CategoryListContainer';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import CardWidget from './components/CardWidget';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navBar-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="navBar">
                  <NavLink to="/">
                    <div className="navLogo">
                      <img src="img/logo.png" alt="Logo Samsung"/>
                    </div>
                  </NavLink>
                  <ul className="navList">
                    <li>
                      <NavLink className="navLink" activeclassname="active" to={`/`}>
                        <CardWidget icon={'store'}/>
                        <span className="navItem">Productos</span>
                      </NavLink>
                    </li>
                    <li>
                      {/* <NavLink className="navLink" activeclassname="active" to={`/category/${category.name}`}> */}
                      <NavLink className="navLink" activeclassname="active" to={`/categoria/5`}>
                        <CardWidget icon={'local_offer'}/>
                        <span className="navItem">Categorias</span>
                      </NavLink>
                    </li>
                    <li>
                      <Link className="navLink" activeclassname="active" to={`/categoria/4`}>
                        <CardWidget icon={'shopping_cart'}/>
                        <span className="navItem">Mis compras</span>
                      </Link>
                    </li>                    
                    <li>
                      <button className="btn btn-primary btn-sm btn-sesion">Iniciar sesión</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
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
        <Route path="/contacto">
          <Form></Form>
        </Route>   
      </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
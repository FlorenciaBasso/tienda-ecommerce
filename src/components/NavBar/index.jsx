import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardWidget from '../CardWidget';
import { BrowserRouter, Link, NavLink, Switch } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <nav className="navBar-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="navBar">
                  <Link exact path="/">
                    <div className="navLogo">
                      <img src="img/logo.png" alt="Logo Samsung"/>
                    </div>
                  </Link>
                  {/* <NavLink to="/category/2323">link</NavLink>
                  <Link to={`/contacto`}>contacto</Link> */}
                  <ul className="navList">
                    <li>
                      <NavLink className="navLink" activeClassName="active" to={`/`}>
                        <CardWidget icon={'home'}/>
                        <span className="navItem">Inicio</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="navLink" activeClassName="active" to={`/`}>
                        <CardWidget icon={'store'}/>
                        <span className="navItem">Productos</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="navLink" activeClassName="active" to={`/category/2323`}>
                        <CardWidget icon={'local_offer'}/>
                        <span className="navItem">Categorias</span>
                      </NavLink>
                    </li>
                    <li>
                      <Link className="navLink" activeClassName="active" to={`/contacto`}>
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
      </Switch>
    </BrowserRouter>

    </>
  );
}

export default NavBar;
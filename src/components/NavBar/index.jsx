import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardWidget from '../CardWidget';

const NavBar = () => {
  return (
    <>
      <nav className="navBar-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="navBar">
                <a href="#" className="navLogo">
                  <img src="img/logo.png" alt="Logo Samsung"/>
                </a>
                <ul className="navList">
                  <li>
                    <a href="#" className="navLink">
                      <CardWidget icon={'home'}/>
                      <span className="navItem">Inicio</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="navLink">
                      <CardWidget icon={'store'}/>
                      <span className="navItem">Productos</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="navLink">
                      <CardWidget icon={'local_offer'}/>
                      <span className="navItem">Ofertas</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="navLink">
                      <CardWidget icon={'shopping_cart'}/>
                      <span className="navItem">Mis compras</span>
                    </a>
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

    </>
  );
}

export default NavBar;
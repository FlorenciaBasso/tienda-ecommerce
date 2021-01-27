import './NavBar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
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
                  <a href="#" className="navLink">Home</a>
                </li>
                <li>
                  <a href="#" className="navLink">Productos</a>
                </li>
                <li>
                  <a href="#" className="navLink">Nosotros</a>
                </li>
                <li>
                  <a href="#" className="navLink">Ofertas</a>
                </li>
                <li>
                  <button className="btn btn-primary">Iniciar sesión</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
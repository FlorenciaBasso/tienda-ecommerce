import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import CardWidget from "../CardWidget";
import { Link, NavLink } from "react-router-dom";
import categoryList from "../../mocks/categoryList";
import { Dropdown, DropdownButton } from "bootstrap";

const NavBar = () => {
  return (
    <>
      <nav className="navBar-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="navBar">
                <Link to="/">
                  <div className="navLogo">
                    <img src="img/logo.png" alt="Logo Samsung" />
                  </div>
                </Link>
                <ul className="navList">
                  <li>
                    <NavLink
                      className="navLink"
                      activeClassName="active"
                      to={`/`}
                    >
                      <CardWidget icon={"home"} />
                      <span className="navItem">Inicio</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="navLink"
                      activeClassName="active"
                      to={`/`}
                    >
                      <CardWidget icon={"store"} />
                      <span className="navItem">Productos</span>
                    </NavLink>
                  </li>
                  {categoryList.map((categoria) => {
                    return (
                      <>
                        <li key={categoria.id}>
                          <NavLink
                            className="navLink"
                            activeClassName="active"
                            to={`/categoria/${categoria.id}`}
                          >
                            <CardWidget icon={"local_offer"} />
                            <span className="navItem">{categoria.nombre}</span>
                          </NavLink>
                        </li>
                      </>
                    );
                  })}

                  <li>
                    <NavLink
                      className="navLink"
                      activeClassName="active"
                      to={`/contacto`}
                    >
                      <CardWidget icon={"shopping_cart"} />
                      <span className="navItem">Mis compras</span>
                    </NavLink>
                  </li>
                  <li>
                    <button className="btn btn-primary btn-sm btn-sesion">
                      Iniciar sesión
                    </button>
                  </li>
                  
                  {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </DropdownButton> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

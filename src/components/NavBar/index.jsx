import "./style.scss";
import CardWidget from "../CardWidget";
import CartWidget from "../CartWidget";
import { Link, NavLink } from "react-router-dom";
import categoryList from "../../mocks/categoryList";

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
                  <li className="dropdown">
                    <button
                      className="btn btn-primary btn-sm dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categorías
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {categoryList.map((categoria) => {
                        return (
                          <NavLink
                            key={categoria.id}
                            className="dropdown-item"
                            activeClassName="active"
                            to={`/categoria/${categoria.id}`}
                          >
                            <span className="navItem">{categoria.nombre}</span>
                          </NavLink>
                        );
                      })}
                    </div>
                  </li>
                  {/*  */}

                  <li>
                    <NavLink
                      className="navLink"
                      activeClassName="active"
                      to={`/cart`}
                    >
                      <CartWidget/>                     
                      <span className="navItem">Mis compras</span>
                    </NavLink>
                  </li>
                  <li>
                    <button className="btn btn-primary btn-sm btn-sesion">
                      Iniciar sesión
                    </button>
                  </li>
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

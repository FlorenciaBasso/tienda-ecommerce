import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ItemCount from "../ItemCount";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const [showButton, setShowButton] = useState(false);
  const [cart, setCart] = useState([]);

  const onAdd = (contador) => {
    console.log(`Se agregaron ${contador} productos al carrito`);
    setShowButton(true);

    const order = { item: item, quantity: contador };
    setCart([...cart, order]);
  };

  return (
    <>
      <Grid item lg={12}>
        <div className="card-item">
          <h3 className="card-title">{item.title}</h3>
          <div className="card-flex">
            <img src={item.src} alt={item.title} className="img-item"></img>
            <div className="card-info">
              <h4 className="title-description">Descripción:</h4>
              <p className="card-description">{item.description}</p>
              <h4 className="title-description">Color:</h4>
              <p className="card-color">{item.color}</p>
              <h4 className="title-description">Modelo:</h4>
              <p className="card-modelo">{item.modelo}</p>
              <h4 className="title-description">Stock:</h4>
              <p className="card-stock">{item.stock}</p>
              <h4 className="title-description">Precio:</h4>
              <p className="card-price">${item.price}</p>
              <h4 className="title-description">Medios de Pago:</h4>
              <p className="card-mediosPago">{item.mediosPago}</p>
              <h4 className="title-description">Vendedor:</h4>
              <p className="card-vendedor">{item.vendedor}</p>

              <ItemCount stock={item.stock} onAdd={onAdd} />

              {showButton && (
                <Link className="btn btn-sm btn-primary btn-block" to={`/cart`}>Ir al carrito</Link>
              )}
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Card;

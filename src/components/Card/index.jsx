import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ItemCount from "../ItemCount";
import { Link } from "@material-ui/core";

const Card = ({ item}) => {
	// onAdd(stock) {
	// // Hemos recibido un evento del ItemCount
	// }

	// const [valorCount, setValorCount] = useState(1);
	
	
	const [contador, setContador] = useState(1);
  //valor, y funcion que setea el valor
	const mostrarEvento = (e) => {
		setContador(e.target.value);
	  console.log(e.target.value);
	};

  const onAdd = (stock, contador) => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const onRest = (contador) => {
    if (contador > 0) {
      setContador(contador - 1);
    }
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
              <ItemCount setInitial={setContador}
                stock={item.stock}
                contador={contador}
                onAdd={onAdd}
                onRest={onRest}
              >
				{/* {isBotonAdd ? 
				<Link className="btn btn-sm btn-primary" to={`/cart/${item.id}`}>Agregar al carrito</Link> :
				<Link className="btn btn-sm btn-primary" to={`/cart/${item.id}`}>Terminar mi compra</Link>
				} */}
                
              </ItemCount>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Card;

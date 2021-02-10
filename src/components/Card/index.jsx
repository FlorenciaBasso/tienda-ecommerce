import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemCount from '../ItemCount';

const Card = ({item, children}) => {

	const [contador, setContador] = useState(1)
	//valor, y funcion que setea el valor

	const onAdd = (stock) => {
		if(contador < stock){
			setContador(contador+1);
		}
	}
	const onRest = () => {
		if(contador > 0){
			setContador(contador-1);
		}
	}

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
					<ItemCount stock={item.stock} contador={contador} onAdd={onAdd} onRest={onRest}/>
					<div className="btn-buy">
						{children}
					</div>
				</div>
			</div>
        </div>
	</Grid>
    </>
  );
}

export default Card;
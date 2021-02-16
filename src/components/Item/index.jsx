import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
// import ItemCount from '../ItemCount';

const Item = ({product, children}) => {

	// const [contador, setContador] = useState(1)
	// //valor, y funcion que setea el valor

	// const onAdd = (stock) => {
	// 	if(contador < stock){
	// 		setContador(contador+1);
	// 	}
	// }
	// const onRest = () => {
	// 	if(contador > 0){
	// 		setContador(contador-1);
	// 	}
	// }

  return (
		<div className="card">
			{/* <div className="cardHeader">				
				<ItemCount stock={product.stock} contador={contador} onAdd={onAdd} onRest={onRest}/>
			</div> */}
			<ul>
				<li className="cardItem">Producto: <span>{product.product}</span></li>
				<li className="cardItem">Precio: <span>${product.price}</span></li>
				<li className="cardItem">Vendedor: <span>{product.vendedor}</span></li>
			</ul>
			<div className="cardFooter">				
				{children}
			</div>
		</div>
  );
}

export default Item;
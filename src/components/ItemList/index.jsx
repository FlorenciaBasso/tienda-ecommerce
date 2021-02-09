import './style.scss';
// import React, {useEffect, useState} from 'react';
import Item from '../../components/Item';

const ItemList = () => {
  // const [carrito, setCarrito] = useState([]);

  const array = [
    {id: 1, product: "Zapatilla", price: "4000", vendedor: "Cristian", stock: "7", name: "Zapatilla"},
    {id: 2, product: "Remera", price: "3000", vendedor: "Marcelo", stock: "8", name: "Remera"},
    {id: 3, product: "Camisa", price: "10000", vendedor: "Mariela", stock: "5", name: "Camisa"},
    {id: 4, product: "Gorra", price: "3000", vendedor: "Marcelo", stock: "8", name: "Gorra"},
    {id: 5, product: "Ojotas", price: "2000", vendedor: "Mercedes", stock: "3", name: "Ojotas"},
  ];
	return(
	<>
    {array.map((element, index) => {
      return (
        <Item key={index}>
          {element}
          {/* <button className="btn btn-sm btn-primary" onClick={() => {
            setCarrito([...carrito, {name: '{name}'}])
          }}>Comprar</button> */}
        </Item>
      )
    })}
	</>
  )

}

export default ItemList;
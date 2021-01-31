import './style.scss';
import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/Card';

const ItemListContainer = ({greeting}) => {
	const [carrito, setCarrito] = useState([]);

	useEffect(() => {
		console.log('Se monto el componente');
		return()=> {
			console.log('se esta por morir')
		}
	}, [])
	console.log('se esta por renderizar');

	// 	if(carrito.length == 0){
	// 		return()=>{
	// 			// `
	// 			// <p className="list-carrito">El carrito está vacío.</p>
	// 			// `
	// 		} 
	// 	}else{
	// 		return()=>{
	// 			// `
	// 			// <p className="list-carrito">{carrito}</p>
	// 			// `
	// 		}
	// 	}

	return(
	<>
		<Container maxWidth="lg">
			<Grid item xs={12}>
				<h1 className="title">{greeting}</h1>
			</Grid>
			<Grid container spacing={6}>
				<Grid item xs={12} sm={6} md={4}>
					<Card product="Zapatilla" price="4000" vendedor="Cristian" icon="add_circle_outline">
						<button className="btn btn-sm btn-primary" onClick={() => { 
							setCarrito([...carrito, 'Zapatilla, '])
						}}>Agregar producto</button>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card product="Remera" price="3000" vendedor="Marcelo" icon="add_circle_outline">
						<button className="btn btn-sm btn-primary" onClick={() => {
							setCarrito([...carrito,'Remera, '])
						}}>Agregar producto</button>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card product="Camisa" price="10000" vendedor="Mariela" icon="add_circle_outline">
						<button className="btn btn-sm btn-primary" onClick={() => {
							setCarrito([...carrito, 'Camisa, '])
						}}>Agregar producto</button>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card product="Ojotas" price="2000" vendedor="Tomas" icon="add_circle_outline">
						<button className="btn btn-sm btn-primary" onClick={() => {
							setCarrito([...carrito, 'Ojotas, '])
						}}>Agregar producto</button>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card product="Mayas" price="7000" vendedor="Ramiro" icon="add_circle_outline">
						{/* <button className="btn btn-md btn-primary" onClick={() => {setCarrito('Vendido')}}>Cambiar Estado</button> */}
						<button className="btn btn-sm btn-primary" onClick={() => {
							setCarrito([...carrito, {name: 'Mayas'}])
						}}>Agregar producto</button>
					</Card>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<h3 className='title-list'>Lista de productos:</h3>
				<p className="list-carrito">{carrito}</p>
			</Grid>
		</Container>
	</>
  )

}

export default ItemListContainer;
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
	console.log({carrito});

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
					<Card product="Zapatilla" price="4000" vendedor="Cristian" stock="7">
						<button className="btn btn-sm btn-primary" onClick={() => { 
							setCarrito([...carrito, {name: 'Zapatilla'}])
						}}>Comprar</button>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card product="Remera" price="3000" vendedor="Marcelo" stock="8">
						<button className="btn btn-sm btn-primary" onClick={() => {
							setCarrito([...carrito,{name: 'Remera'}])
						}}>Comprar</button>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card product="Camisa" price="10000" vendedor="Mariela" stock="10">
						<button className="btn btn-sm btn-primary" onClick={() => {
							setCarrito([...carrito, {name: 'Camisa'}])
						}}>Comprar</button>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card product="Ojotas" price="2000" vendedor="Tomas" stock="5">
						<button className="btn btn-sm btn-primary" onClick={() => {
							setCarrito([...carrito, {name: 'Ojotas'}])
						}}>Comprar</button>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card product="Mallas" price="7000" vendedor="Ramiro" stock="12">
						{/* <button className="btn btn-md btn-primary" onClick={() => {setCarrito('Vendido')}}>Cambiar Estado</button> */}
						<button className="btn btn-sm btn-primary" onClick={() => {
							setCarrito([...carrito, {name: 'Mallas'}])
						}}>Comprar</button>
						
						{/* Paso por prop una funcion */}
					</Card>
				</Grid>
			</Grid>
		</Container>
	</>
  )

}

export default ItemListContainer;
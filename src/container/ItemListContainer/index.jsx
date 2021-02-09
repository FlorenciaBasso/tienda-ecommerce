import './style.scss';
import * as React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ItemList from '../../components/ItemList';
import productList from '../../mocks/productList';

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);
  
	React.useEffect(() => {
	  setIsLoading(true);
	  const myPromise = new Promise((resolve, reject) => {
		setTimeout(() => resolve(productList), 2000);
	  });
  
	  myPromise.then((result) => {
		setProducts(result);
		setIsLoading(false);
	  });
	}, []);
  
	if (isLoading) {
	  return(
		<Container maxWidth="lg">
			<Grid item xs={12}>
				<h2 className="title">Cargando productos..</h2>
			</Grid>
    	</Container>
	  )
	}
  
	return (
	  <>
		<Container maxWidth="lg">
			<Grid item xs={12}>
				<h2 className="title">{greeting}</h2>
			</Grid>
    	</Container>
		<ItemList products={products} />
	  </>
	);
  };
export default ItemListContainer;
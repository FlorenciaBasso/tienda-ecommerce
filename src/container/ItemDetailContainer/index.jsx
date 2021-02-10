import './style.scss';
import * as React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ItemDetail from '../../components/ItemDetail';
import product1 from '../../mocks/product1';

const ItemDetailContainer = ({ titleProduct }) => {
	const [details, setDetails] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);
  
	React.useEffect(() => {
	  setIsLoading(true);
	  const getItems = new Promise((resolve, reject) => {
		setTimeout(() => resolve(product1), 2000);
	  });
  
	  getItems.then((result) => {
		setDetails(result);
		setIsLoading(false);
	  });
	}, []);
  
	if (isLoading) {
	  return(
		<Container maxWidth="lg">
			<Grid item xs={12}>
				<h2 className="title">Cargando item..</h2>
			</Grid>
    	</Container>
	  )
	}
  
	return (
	  <>
		<Container maxWidth="lg">
			<Grid item xs={12}>
				<h2 className="title">{titleProduct}</h2>
			</Grid>
    	</Container>
		<ItemDetail details={details} />
	  </>
	);
  };
export default ItemDetailContainer;
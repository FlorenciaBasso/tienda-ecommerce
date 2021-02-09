import './style.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ItemList from '../../components/ItemList';

const ItemListContainer = (props) => {
	const promesa = new Promise ((resolve, reject) => {
		setTimeout( () => {
			resolve(ItemList)
		}, 2000);
	});
	
	promesa.then( e => {
		console.log(e);
	});
	return(
		<>
			<Container maxWidth="lg">
				<Grid item xs={12}>
					<h1 className="title">{props.greeting}</h1>
				</Grid>
				<ItemList></ItemList>
			</Container>
		</>
	)

}

export default ItemListContainer;
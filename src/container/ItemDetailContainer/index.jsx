import "./style.scss";
import * as React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ItemDetail from "../../components/ItemDetail";
import productsDetail from "../../mocks/productsDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ titleProduct }) => {
  const [details, setDetails] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const {id} =  useParams();

  React.useEffect(() => {
    setIsLoading(true);
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => resolve(productsDetail), 2000);
    });

    getItems.then((result) => {
      let selectProduct = result.filter((product) => product.id === Number(id));
      setDetails(selectProduct);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return (
      <Container maxWidth="lg">
        <Grid item xs={12}>
          <h2 className="title">Cargando item..</h2>
        </Grid>
      </Container>
    );
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

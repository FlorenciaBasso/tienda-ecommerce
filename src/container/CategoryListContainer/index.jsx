import { Container, Grid } from "@material-ui/core";
import * as React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import productList from "../../mocks/productList";

const CategoryListContainer = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const { categoriaID } = useParams();

  React.useEffect(() => {
    setIsLoading(true);
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(productList), 2000);
    });

    myPromise.then((result) => {
      let filterProducts = result.filter(
        (product) => product.idCategoria === Number(categoriaID)
      );
      setProducts(filterProducts);
      setIsLoading(false);
    });
  }, [categoriaID]);

  if (isLoading) {
    return (
      <Container maxWidth="lg">
        <Grid item xs={12}>
          <h2 className="title">Cargando productos..</h2>
        </Grid>
      </Container>
    );
  }
  return (
    <>
      <Container maxWidth="lg">
        <Grid item xs={12}>
            <h2 className="title">Categoria</h2>
            <ItemList products={products} />
        </Grid>
      </Container>
    </>
  );
};
export default CategoryListContainer;

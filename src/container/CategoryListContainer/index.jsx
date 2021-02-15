import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productList from '../../mocks/productList';

const CategoryListContainer = () => {
    const { categoriaID } = useParams();
    const arrayProductos = [productList];
    useEffect(() => {
        
        let productosAMostrar = arrayProductos.map(producto => {
            if(producto.idCategoria=== categoriaID){
                return producto
            }else{
                return null;
            }
        })
        console.log(productosAMostrar)
        return () => {

        }
    }, [categoriaID]);
    return <h1>Estas en la categoria: {categoriaID}</h1>;
}
export default CategoryListContainer;
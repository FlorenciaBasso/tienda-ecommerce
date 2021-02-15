import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryListContainer = () => {
    const { categoriaID } = useParams();
    const arrayProductos = [
        { id: 1, name: "toto", price: 2929, idCategoria: 4 },
        { id: 2, name: "toto2", price: 2929, idCategoria: 4 },
        { id: 3, name: "toto3", price: 2929, idCategoria: 5 }
    ];
    useEffect(() => {
        
        let productosAMostrar = arrayProductos.map(producto => {
            if(producto.idCategoria.toString() === categoriaID){
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
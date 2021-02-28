import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "@material-ui/core/Icon";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useEffect } from "react";

const CartWidget = ({ icon }) => {
  const { cart } = useContext(CartContext);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const getTotalProducts = () => {
      let totalProduct = 0;

      cart.forEach((order) => {
        totalProduct = totalProduct + order.quantity;
      });

      setCartQuantity(totalProduct);
    };
    getTotalProducts();
  }, [cart]);
  return (
    <div className="box-shop">
      <Icon className="icon-shop">shopping_cart</Icon>
      {cartQuantity > 0 && <span className="icon-number"> {cartQuantity}</span>}
    </div>
  );
};

export default CartWidget;

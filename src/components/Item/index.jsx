import "./style.scss";

const Item = ({ product, children }) => {
  return (
    <div className="card">
      <ul>
        <li className="cardItem">
          Producto: <span>{product.product}</span>
        </li>
        <li className="cardItem">
          Precio: <span>${product.price}</span>
        </li>
        <li className="cardItem">
          Vendedor: <span>{product.vendedor}</span>
        </li>
      </ul>
      <div className="cardFooter">{children}</div>
    </div>
  );
};

export default Item;

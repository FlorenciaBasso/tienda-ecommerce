import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import CardWidget from '../CardWidget';

const Card = ({product, price, vendedor, children}) => {
  return (
    <>
		<div className="card">
			<div className="cardHeader">				
				<CardWidget className="cardIcon" icon={'add_circle_outline'}/>
			</div>
			<ul>
				<li className="cardItem">Producto: <span>{product}</span></li>
				<li className="cardItem">Precio: <span>${price}</span></li>
				<li className="cardItem">Vendedor: <span>{vendedor}</span></li>
			</ul>
			<div className="cardFooter">				
				{children}
			</div>
		</div>

		
    </>
  );
}

export default Card;
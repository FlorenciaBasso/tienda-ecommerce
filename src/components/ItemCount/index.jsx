import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardWidget from '../CardWidget';

const ItemCount = ({stock, contador, onAdd, onRest}) => {
    return(
        <>
        <div className="counter-box">
            <div className="icon-count" onClick={() => {onRest (stock) }}>
                <CardWidget className="cardIcon" icon={'remove_circle_outline'}/>
            </div>
            <span className="num-count">{contador}</span>
            {(contador < stock) ? 
                <div className="icon-count" onClick={() => { onAdd(stock) }}>
                    <CardWidget className="cardIcon" icon={'add_circle_outline'}/>
                </div>
                : null
            }
        </div>
        </>
    )
}

export default ItemCount;
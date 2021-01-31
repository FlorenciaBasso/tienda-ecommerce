import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '@material-ui/core/Icon';

const CardWidget = ({icon}) => {
  return (
    <>
      <Icon>{icon}</Icon>
    </>
  );
}

export default CardWidget;
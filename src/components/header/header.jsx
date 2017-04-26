import { Link } from 'react-router';

import Icon from 'components/icon/icon';
import ShoppingCartIcon from 'components/header/shopping-cart/header-shopping-cart';

import ArrowLeft from 'images/arrow-left.svg';

import './header.scss';

const header = ({ arrowVisible, category }) => {
  const arrow = arrowVisible ? (
    <Link to={category}>
      <Icon id={ArrowLeft} />
    </Link>
  ) : null;

  return (
    <header className='header'>
      <div className='header__icon'>
        {arrow}
      </div>
      <div className='header__title'>
        <Link to='/'>
          SHOP
        </Link>
      </div>
      <ShoppingCartIcon />
    </header>
  );
};

export default header;
import { Link } from 'react-router';

import Icon from 'components/icon/icon';

import ShoppingCart from 'images/shopping-cart.svg';
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
      <Link to='/cart'>
        <Icon id={ShoppingCart} />
      </Link>
    </header>
  );
};

export default header;
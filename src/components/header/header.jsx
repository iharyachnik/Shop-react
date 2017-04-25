import { Link } from 'react-router';

import Icon from 'components/icon/icon';

import ShoppingCart from 'images/shopping-cart.svg';

import './header.scss';

const header = () => {
  return (
    <header className='header'>
      <div className='header__title'>
        <Link to='/'>
          SHOP
        </Link>
      </div>
      <Link to='/cart'>
        <Icon
          id={ShoppingCart}
        />
      </Link>
    </header>
  );
};

export default header;
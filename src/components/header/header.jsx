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
      <Icon
        id={ShoppingCart}
      />
    </header>
  );
};

export default header;
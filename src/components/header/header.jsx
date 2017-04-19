import { Link } from 'react-router';

import './header.scss';

const header = () => {
  return (
    <header className='header'>
      <div className='header__title'>
        <Link to='/'>
          SHOP
        </Link>
      </div>
      <div className='header__basket'>Basket</div>
    </header>
  );
};

export default header;
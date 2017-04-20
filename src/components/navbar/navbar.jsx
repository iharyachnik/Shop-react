import { Link } from 'react-router';

import { CATEGORY_CONSTANTS_ENUM, CATEGORY_CONSTANTS, CATEGORY_NAMES } from 'config/category.constants';

import './navbar.scss';

const navbar = () => {
  return (
    <nav className='navbar'>
      {
        Object.keys(CATEGORY_CONSTANTS_ENUM).map(category => {
          return (
            <Link
              to={CATEGORY_CONSTANTS[category]}
              className='navbar__link'
              activeClassName='navbar__link--active'
            >
              {CATEGORY_NAMES[category]}
            </Link>
          );
        })
      }
    </nav>
  )
}

export default navbar;
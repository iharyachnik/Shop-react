import { Link } from 'react-router';

import { CATEGORY_CONSTANTS, CATEGORY_NAMES } from 'config/category.constants';

import './navbar.scss';

const navbar = () => {
  return (
    <nav className='navbar'>
      {
        Object.keys(CATEGORY_CONSTANTS).map(category => {
          return (
            <Link
              to={category}
              className='navbar__link'
              activeClassName='navbar__link--active'
              key={category}
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
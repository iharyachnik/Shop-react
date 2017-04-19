import { Link } from 'react-router';

import './navbar.scss';

const navbar = () => {
  return (
    <nav className='navbar'>
      <Link
        to='/mens-outerwear'
        className='navbar__link'
        activeClassName='navbar__link--active'
      >
        Men's Outerwear
      </Link>
      <Link
        to='/ladies-outerwear'
        className='navbar__link'
        activeClassName='navbar__link--active'
      >
        Ladies Outerwear
      </Link>
      <Link
        to='/mens-tshirts'
        className='navbar__link'
        activeClassName='navbar__link--active'
      >
        Men's T-Shirts
      </Link>
      <Link
        to='/ladies-tshirts'
        className='navbar__link'
        activeClassName='navbar__link--active'
      >
        Ladies T-Shirts
      </Link>
    </nav>
  )
}

export default navbar;
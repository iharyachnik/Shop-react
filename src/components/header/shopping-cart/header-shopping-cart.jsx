import { Link } from 'react-router';
import { connect } from 'react-redux';

import Icon from 'components/icon/icon';

import ShoppingCartIcon from 'images/shopping-cart.svg';

import './header-shopping-cart.scss';

class HeaderShoppingCart extends React.Component {
  render() {
    const { amountOfItems } = this.props;

    const label = amountOfItems ? (
      <span className='header-shopping-cart__label'>
        {amountOfItems}
      </span>
    ) : null;

    return (
      <div className='header-shopping-cart'>
        <Link to='/cart'>
          <Icon
            id={ShoppingCartIcon}
            className='header-shopping-cart__icon'
          />
        </Link>
        {label}
      </div>
    );
  }
}

export default connect(
  ({ ShoppingCart }) => ({
    amountOfItems: ShoppingCart.getTotalQuantity(),
  })
)(HeaderShoppingCart);


import { Link } from 'react-router';

import Select from 'components/select/select';
import Icon from 'components/icon/icon';

import { getDetailsUrl, formatPrice } from 'utils';
import { QUANTITY_CONSTANTS } from 'config/shopping-cart.constants';

import Cross from 'images/cross.svg';

import './shopping-cart-item.scss';

class ShoppingCartItem extends React.Component {
  render() {
    const { item, deleteProduct } = this.props;

    const product = item.getProduct();

    const price = formatPrice(product.getPrice());
    const to = getDetailsUrl(product.getCategory(), product.getId());

    return (
      <div className='shopping-cart-item'>
        <div className='shopping-cart-item__image'>
          <Link to={to}>
            <img src={product.getImageUrl()} />
          </Link>
        </div>
        <div className='shopping-cart-item__title'>
          <Link to={to}>
            {product.getTitle()}
          </Link>
        </div>
        <div className='shopping-cart-item__quantity'>
          <Select
            options={QUANTITY_CONSTANTS}
            selectedValue={item.getQuantity()}
            onChange={() => null}
            name='quantity'
            label='Qty:'
            className='shopping-cart-item__select'
            containerClassName='shopping-cart-item__quantity-container'
          />
        </div>
        <div className='shopping-cart-item__size'>
          Size:
          <span>{item.getSize()}</span>
        </div>
        <div className='shopping-cart-item__price'>
          {price}
        </div>
        <div>
          <Icon
            id={Cross}
            className='shopping-cart-item__cross'
            onClick={() => deleteProduct(product)}
          />
        </div>
      </div>
    );
  }
}

export default ShoppingCartItem;
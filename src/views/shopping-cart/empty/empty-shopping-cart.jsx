import Icon from 'components/icon/icon';
import Layout from 'components/layout/layout';

import ShoppingCartIcon from 'images/shopping-cart.svg';

const EmptyShoppingCart = () => {
  return (
    <Layout
      withoutNavbar={true}
      withoutFooter={true}
    >
      <div className='shopping-cart shopping-cart--empty'>
        <div className='shopping-cart__header shopping-cart__header--empty'>
          Your
          <Icon
            id={ShoppingCartIcon}
            className='shopping-cart__icon'
          />
          is empty.
        </div>
      </div>
    </Layout>
  );
}

export default EmptyShoppingCart;
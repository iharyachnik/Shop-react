import Layout from 'components/layout/layout';
import Icon from 'components/icon/icon';

import ShoppingCartIcon from 'images/shopping-cart.svg';

import './shopping-cart.scss';

const ShoppingCart = () => {
  return (
    <Layout
      withoutNavbar={true}
      withoutFooter={true}
    >
      <div className='shopping-cart'>
        Your
        <Icon
          id={ShoppingCartIcon}
          className='shopping-cart__icon'
        />
        is empty.
      </div>
    </Layout>
  );
};

export default ShoppingCart
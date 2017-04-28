import { connect } from 'react-redux';

import Layout from 'components/layout/layout';
import Button from 'components/button/button';
import Input from 'components/input/input';
import CheckoutSummary from 'views/checkout/summary/checkout-summary';
import EmptyShoppingCart from 'views/shopping-cart/empty/empty-shopping-cart';
import Select from 'components/select/select';

import { COUNTRIES, MONTHS, YEARS } from 'config/checkout.constants';

import './checkout.scss';

class Checkout extends React.Component {
  render() {
    const { items, totalPrice } = this.props;

    if (!items.size) {
      return (
        <EmptyShoppingCart />
      );
    }

    return (
      <Layout
        withoutNavbar={true}
        withoutFooter={true}
      >
        <div className='checkout'>
          <div className='checkout-header'>
            <h1>Checkout</h1>
            <span>Shop is a demo app - form data will not be sent</span>
          </div>
          <form className='checkout-form'>
            <div className='checkout-form-section'>
              <h2>Account Information</h2>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='Email'
                  required={true}
                />
              </div>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='Phone Number'
                  required={true}
                />
              </div>
              <h2>Shipping Address</h2>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='Address'
                  required={true}
                />
              </div>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='City'
                />
              </div>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='State/Province'
                />
                <Input
                  placeholder='Zip/Postal Code'
                />
              </div>
              <div className='checkout-form-section__row'>
                <Select
                  options={COUNTRIES}
                  selectedValue={COUNTRIES[0]}
                  name='country'
                  label='Country'
                  containerClassName='checkout-form-select-container'
                  className='checkout-form-select'
                  arrowClassName='checkout-form-select__arrow-down'
                />
              </div>
            </div>
            <div className='checkout-form-section checkout-form-section--padded'>
              <h2>Payment Method</h2>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='Cardholder Name'
                />
              </div>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='Card Number'
                />
              </div>
              <div className='checkout-form-section__row'>
                <Select
                  options={MONTHS}
                  selectedValue={MONTHS[0]}
                  name='expiry'
                  label='Expiry'
                  containerClassName='checkout-form-select-container'
                  className='checkout-form-select'
                  arrowClassName='checkout-form-select__arrow-down'
                />
                <Select
                  options={YEARS}
                  selectedValue={YEARS[0]}
                  name='year'
                  containerClassName='checkout-form-select-container'
                  className='checkout-form-select'
                  arrowClassName='checkout-form-select__arrow-down'
                />
                <Input
                  placeholder='CVV'
                />
              </div>
              <h2>Order Summary</h2>
              <CheckoutSummary
                items={items}
                totalPrice={totalPrice}
              />
              <div>
                <Button title='Place order' />
              </div>
            </div>
          </form>
        </div>
      </Layout >
    );
  }
}

export default connect(
  ({ ShoppingCart }) => ({
    items: ShoppingCart.getItems(),
    totalPrice: ShoppingCart.getTotalPrice(),
  })
)(Checkout);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import Layout from 'components/layout/layout';
import Button from 'components/button/button';
import Input from 'components/input/input';
import CheckoutSummary from 'views/checkout/summary/checkout-summary';
import EmptyShoppingCart from 'views/shopping-cart/empty/empty-shopping-cart';
import Select from 'components/select/select';

import { clearCart } from 'actions/shopping-cart';

import { COUNTRIES, MONTHS, YEARS } from 'config/checkout.constants';

import './checkout.scss';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: COUNTRIES[0],
      cardholderName: '',
      cardNumber: '',
      expiryMonth: MONTHS[0],
      expiryYear: YEARS[0],
      cvv: '',
    };

    this.inputHandler = this.inputHandler.bind(this);
  }

  render() {
    const { items, totalPrice, clearCart } = this.props;

    if (!items.size) {
      return (
        <EmptyShoppingCart />
      );
    }

    const { country, expiryMonth, expiryYear } = this.state;

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
                  name='email'
                  onChange={this.inputHandler}
                  type='text'
                />
              </div>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='Phone Number'
                  name='phone'
                  onChange={this.inputHandler}
                  type='text'
                />
              </div>
              <h2>Shipping Address</h2>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='Address'
                  name='address'
                  onChange={this.inputHandler}
                  type='text'
                />
              </div>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='City'
                  name='city'
                  onChange={this.inputHandler}
                  type='text'
                />
              </div>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='State/Province'
                  name='state'
                  onChange={this.inputHandler}
                  type='text'
                />
                <Input
                  placeholder='Zip/Postal Code'
                  name='zip'
                  onChange={this.inputHandler}
                  type='text'
                />
              </div>
              <div className='checkout-form-section__row'>
                <Select
                  options={COUNTRIES}
                  selectedValue={country}
                  name='country'
                  label='Country'
                  containerClassName='checkout-form-select-container'
                  className='checkout-form-select'
                  arrowClassName='checkout-form-select__arrow-down'
                  onChange={this.inputHandler}
                />
              </div>
            </div>
            <div className='checkout-form-section checkout-form-section--padded'>
              <h2>Payment Method</h2>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='Cardholder Name'
                  name='cardholderName'
                  onChange={this.inputHandler}
                  type='text'
                />
              </div>
              <div className='checkout-form-section__row'>
                <Input
                  placeholder='Card Number'
                  name='cardNumber'
                  onChange={this.inputHandler}
                  type='text'
                />
              </div>
              <div className='checkout-form-section__row'>
                <Select
                  options={MONTHS}
                  selectedValue={expiryMonth}
                  name='expiryMonth'
                  label='Expiry'
                  containerClassName='checkout-form-select-container'
                  className='checkout-form-select'
                  arrowClassName='checkout-form-select__arrow-down'
                  onChange={this.inputHandler}
                />
                <Select
                  options={YEARS}
                  selectedValue={expiryYear}
                  name='expiryYear'
                  containerClassName='checkout-form-select-container'
                  className='checkout-form-select'
                  arrowClassName='checkout-form-select__arrow-down'
                  onChange={this.inputHandler}
                />
                <Input
                  placeholder='CVV'
                  name='cvv'
                  onChange={this.inputHandler}
                  type='text'
                />
              </div>
              <h2>Order Summary</h2>
              <CheckoutSummary
                items={items}
                totalPrice={totalPrice}
              />
              <Link
                to='/checkout/success'
                onClick={() => clearCart()}
              >
                <Button title='Place order' />
              </Link>
            </div>
          </form>
        </div>
      </Layout >
    );
  }

  inputHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
}

export default connect(
  ({ ShoppingCart }) => ({
    items: ShoppingCart.getItems(),
    totalPrice: ShoppingCart.getTotalPrice(),
  }),
  dispatch => bindActionCreators({
    clearCart
  }, dispatch)
)(Checkout);

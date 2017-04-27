import { formatPrice } from 'utils';

import './checkout-summary.scss';

const CheckoutSummary = ({ items, totalPrice }) => {
  const formattedPrice = formatPrice(totalPrice);

  return (
    <div className='checkout-summary'>
      {
        items.map(item => {
          const product = item.getProduct();
          const price = formatPrice(product.getPrice());

          return (
            <div
              className='checkout-summary__row'
              key={item.getId()}
            >
              <span>{product.getTitle()}</span>
              <span>{price}</span>
            </div>
          );
        })
      }
      <div className='checkout-summary__row checkout-summary__row--total'>
        <span>Total</span>
        <span>{formattedPrice}</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
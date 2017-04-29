import { Link } from 'react-router';

import Layout from 'components/layout/layout';
import Button from 'components/button/button';

import './checkout-success.scss';

const CheckoutSuccess = () => {
  return (
    <Layout
      withoutNavbar={true}
      withoutFooter={true}
    >
      <div className='checkout-success-header'>
        <h1>Thank You</h1>
        <span>Demo checkout process complete.</span>
      </div>
      <div className='checkout-success'>
        <Link to='/'>
          <Button title='Finish' />
        </Link>
      </div>
    </Layout>
  );
};

export default CheckoutSuccess;
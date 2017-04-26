import Layout from 'components/layout/layout';

import './checkout.scss';

const Checkout = () => {
  return (
    <Layout
      withoutNavbar={true}
      withoutFooter={true}
    >
      <div className='checkout'>
        Checkout page
      </div>
    </Layout >
  );
};

export default Checkout;

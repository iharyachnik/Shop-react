import { Link } from 'react-router';

import Layout from 'components/layout/layout';
import Button from 'components/button/button';

import './not-found.scss';

const NotFound = () => {
  return (
    <Layout>
      <div className='not-found'>
        <h1 className='not-found__title'>
          Oops! The Page you requested was not found!
        </h1>
        <Link to='/'>
          <Button title='Go to the home page' />
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
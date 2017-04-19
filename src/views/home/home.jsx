import { Link } from 'react-router';

import Layout from 'components/layout/layout';
import Button from 'components/button/button';
import CategoryHeader from 'components/category-header/category-header';

import './home.scss';

const home = () => {
  return (
    <Layout>
      <div className='layout__page home'>
        <CategoryHeader
          imageClassName='mens-outerwear'
          title={'Men\'s Outerwear'}
          to='/mens-outerwear'
        >
          <Link to='/mens-outerwear'>
            <Button title='Shop now' />
          </Link>
        </CategoryHeader>

        <CategoryHeader
          imageClassName='ladies-outerwear'
          title='Ladies Outerwear'
          to='/ladies-outerwear'
        >
          <Link to='/ladies-outerwear'>
            <Button title='Shop now' />
          </Link>
        </CategoryHeader>

        <div className='home__category-container'>
          <CategoryHeader
            imageClassName='mens-tshirts'
            title={'Men\'s T-Shirts'}
            to='/mens-tshirts'
          >
            <Link to='/mens-tshirts'>
              <Button title='Shop now' />
            </Link>
          </CategoryHeader>

          <CategoryHeader
            imageClassName='ladies-tshirts'
            title='Ladies T-Shirts'
            to='/ladies-tshirts'
          >
            <Link to='/ladies-tshirts'>
              <Button title='Shop now' />
            </Link>
          </CategoryHeader>
        </div>
      </div>
    </Layout >
  );
};

export default home;

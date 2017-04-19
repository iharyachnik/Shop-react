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
        >
          <Button title='Shop now' />
        </CategoryHeader>

        <CategoryHeader
          imageClassName='ladies-outerwear'
          title='Ladies Outerwear'
        >
          <Button title='Shop now' />
        </CategoryHeader>

        <div className='home__category-container'>
          <CategoryHeader
            imageClassName='mens-tshirts'
            title={'Men\'s T-Shirts'}
          >
            <Button title='Shop now' />
          </CategoryHeader>

          <CategoryHeader
            imageClassName='ladies-tshirts'
            title='Ladies T-Shirts'
          >
            <Button title='Shop now' />
          </CategoryHeader>
        </div>
      </div>
    </Layout >
  );
};

export default home;

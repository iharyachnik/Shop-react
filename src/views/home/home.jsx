import Layout from 'components/layout/layout';
import Button from 'components/button/button';
import HeaderItem from 'components/category-header/category-header';

import './home.scss';

const home = () => {
  return (
    <Layout>
      <div className='layout__page home'>
        <HeaderItem
          imageClassName='mens-outerwear'
          title={'Men\'s Outerwear'}
        >
          <Button title='Shop now' />
        </HeaderItem>

        <HeaderItem
          imageClassName='ladies-outerwear'
          title='Ladies Outerwear'
        >
          <Button title='Shop now' />
        </HeaderItem>

        <div className='home__category-container'>
          <HeaderItem
            className='category-header--halved'
            imageClassName='mens-tshirts'
            title={'Men\'s T-Shirts'}
          >
            <Button title='Shop now' />
          </HeaderItem>

          <HeaderItem
            className='category-header--halved'
            imageClassName='ladies-tshirts'
            title='Ladies T-Shirts'
          >
            <Button title='Shop now' />
          </HeaderItem>
        </div>
      </div>
    </Layout >
  );
};

export default home;

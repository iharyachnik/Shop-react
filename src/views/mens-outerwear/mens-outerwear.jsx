import Layout from 'components/layout/layout';
import CategoryHeader from 'components/category-header/category-header';

import './mens-outerwear.scss';

const mens_outerwear = () => {
  return (
    <Layout>
      <CategoryHeader
        imageClassName='mens-outerwear'
        titleClassName='category-header__title--no-margin-bottom'
        title={'Men\'s Outerwear'}
      >
        <span className='category-header__subtitle'>(15 items)</span>
      </CategoryHeader>
    </Layout>
  );
};

export default mens_outerwear;
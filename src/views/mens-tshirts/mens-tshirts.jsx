import Layout from 'components/layout/layout';
import CategoryHeader from 'components/category-header/category-header';

const mens_tshirts = () => {
  return (
    <Layout>
      <CategoryHeader
        imageClassName='mens-tshirts'
        titleClassName='category-header__title--no-margin-bottom'
        title={'Men\'s T-Shirts'}
      >
        <span className='category-header__subtitle'>(15 items)</span>
      </CategoryHeader>
    </Layout>
  );
};

export default mens_tshirts;
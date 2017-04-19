import Layout from 'components/layout/layout';
import CategoryHeader from 'components/category-header/category-header';

const ladies_tshirts = () => {
  return (
    <Layout>
      <CategoryHeader
        imageClassName='ladies-tshirts'
        titleClassName='category-header__title--no-margin-bottom'
        title='Ladies T-Shirts'
      >
        <span className='category-header__subtitle'>(12 items)</span>
      </CategoryHeader>
    </Layout>
  );
};

export default ladies_tshirts;
import Layout from 'components/layout/layout';
import CategoryHeader from 'components/category-header/category-header';

const ladies_outerwear = () => {
  return (
    <Layout>
      <CategoryHeader
        imageClassName='ladies-outerwear'
        titleClassName='category-header__title--no-margin-bottom'
        title='Ladies outerwear'
      >
        <span className='category-header__subtitle'>(16 items)</span>
      </CategoryHeader>
    </Layout>
  );
};

export default ladies_outerwear;
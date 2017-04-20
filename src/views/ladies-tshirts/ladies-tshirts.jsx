import Layout from 'components/layout/layout';
import CategoryHeader from 'components/category-header/category-header';

import { CATEGORY_CONSTANTS_ENUM } from 'config/category.constants';

const ladies_tshirts = () => {
  return (
    <Layout>
      <CategoryHeader
        category={CATEGORY_CONSTANTS_ENUM.LADIES_TSHIRTS}
      >
        <span className='category-header__subtitle'>(12 items)</span>
      </CategoryHeader>
    </Layout>
  );
};

export default ladies_tshirts;
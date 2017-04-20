import Layout from 'components/layout/layout';
import CategoryHeader from 'components/category-header/category-header';

import { CATEGORY_CONSTANTS_ENUM } from 'config/category.constants';

const mens_tshirts = () => {
  return (
    <Layout>
      <CategoryHeader
        category={CATEGORY_CONSTANTS_ENUM.MENS_TSHIRTS}
      >
        <span className='category-header__subtitle'>(15 items)</span>
      </CategoryHeader>
    </Layout>
  );
};

export default mens_tshirts;
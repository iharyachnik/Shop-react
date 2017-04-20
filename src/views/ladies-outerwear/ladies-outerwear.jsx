import Layout from 'components/layout/layout';
import CategoryHeader from 'components/category-header/category-header';

import { CATEGORY_CONSTANTS_ENUM } from 'config/category.constants';

const ladies_outerwear = () => {
  return (
    <Layout>
      <CategoryHeader
        category={CATEGORY_CONSTANTS_ENUM.LADIES_OUTERWEAR}
      >
        <span className='category-header__subtitle'>(16 items)</span>
      </CategoryHeader>
    </Layout>
  );
};

export default ladies_outerwear;
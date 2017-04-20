import ProductList from 'components/product-list/product-list';

import { CATEGORY_CONSTANTS_ENUM } from 'config/category.constants';

const MensTshirts = () => {
  return (
    <ProductList
      category={CATEGORY_CONSTANTS_ENUM.MENS_TSHIRTS}
    />
  );
};

export default MensTshirts;
import ProductList from 'components/product-list/product-list';

import { CATEGORY_CONSTANTS_ENUM } from 'config/category.constants';

const LadiesTshirts = () => {
  return (
    <ProductList
      category={CATEGORY_CONSTANTS_ENUM.LADIES_TSHIRTS}
    />
  );
};

export default LadiesTshirts;
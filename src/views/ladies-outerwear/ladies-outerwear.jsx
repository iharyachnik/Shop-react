import ProductList from 'components/product-list/product-list';

import { CATEGORY_CONSTANTS_ENUM } from 'config/category.constants';

const LadiesOuterwear = () => {
  return (
    <ProductList
      category={CATEGORY_CONSTANTS_ENUM.LADIES_OUTERWEAR}
    />
  );
};

export default LadiesOuterwear;
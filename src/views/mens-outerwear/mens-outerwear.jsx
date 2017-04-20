import ProductList from 'components/product-list/product-list';

import { CATEGORY_CONSTANTS_ENUM } from 'config/category.constants';

const MensOuterwear = () => {
  return (
    <ProductList
      category={CATEGORY_CONSTANTS_ENUM.MENS_OUTERWEAR}
    />
  );
};

export default MensOuterwear;
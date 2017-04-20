import { CATEGORY_CONSTANTS_ENUM } from 'config/category.constants';

import ProductList from 'components/product-list/product-list';

import './mens-outerwear.scss';

const MensOuterwear = () => {
  return (
    <ProductList
      category={CATEGORY_CONSTANTS_ENUM.MENS_OUTERWEAR}
    />
  );
};

export default MensOuterwear;
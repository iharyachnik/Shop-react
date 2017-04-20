import { Record, List, fromJS } from 'immutable';

import { CATEGORY_CONSTANTS_ENUM } from 'config/category.constants';

import Product from 'models/product';

const Parent = Record({
  [CATEGORY_CONSTANTS_ENUM.MENS_OUTERWEAR]: List(),
  [CATEGORY_CONSTANTS_ENUM.MENS_TSHIRTS]: List(),
  [CATEGORY_CONSTANTS_ENUM.LADIES_OUTERWEAR]: List(),
  [CATEGORY_CONSTANTS_ENUM.LADIES_TSHIRTS]: List(),
});

class Products extends Parent {
  getCategoryItems(category) {
    return this.get(category);
  }

  setCategoryItems(category, items) {
    const updatedCategory = items.map(item => new Product(item));

    return this.set(category, fromJS(updatedCategory));
  }
}

export default Products;
import { Record, List, fromJS } from 'immutable';

import { CATEGORY_CONSTANTS } from 'config/category.constants';

import Product from 'models/product';

const Parent = Record({
  [CATEGORY_CONSTANTS.mens_outerwear]: List(),
  [CATEGORY_CONSTANTS.ladies_outerwear]: List(),
  [CATEGORY_CONSTANTS.mens_tshirts]: List(),
  [CATEGORY_CONSTANTS.ladies_tshirts]: List(),
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
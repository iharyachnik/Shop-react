import { Record, OrderedMap, fromJS } from 'immutable';

import { CATEGORY_CONSTANTS } from 'config/category.constants';

import Product from 'models/product';

const Parent = Record({
  [CATEGORY_CONSTANTS.mens_outerwear]: OrderedMap(),
  [CATEGORY_CONSTANTS.ladies_outerwear]: OrderedMap(),
  [CATEGORY_CONSTANTS.mens_tshirts]: OrderedMap(),
  [CATEGORY_CONSTANTS.ladies_tshirts]: OrderedMap(),
});

class Products extends Parent {
  getCategoryItems(category) {
    return this.get(category);
  }

  setCategoryItems(category, items) {
    const updatedCategory = items
      .map(item => new Product(item))
      .reduce((p, c) => (p[c.getId()] = c, p), {});

    return this.set(category, OrderedMap(updatedCategory));
  }

  getItem(category, itemId) {
    return this.getIn([category, itemId], null);
  }
}

export default Products;
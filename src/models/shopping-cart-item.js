import { Record } from 'immutable';

const Parent = Record({
  product: null,
  selectedSize: '',
  quantity: 0,
});

class ShoppingCartItem extends Parent {
  getProduct() {
    return this.get('product');
  }

  getQuantity() {
    return this.get('quantity');
  }

  getSize() {
    return this.get('selectedSize');
  }

  getId() {
    return this.getProduct().getId();
  }
}

export default ShoppingCartItem;
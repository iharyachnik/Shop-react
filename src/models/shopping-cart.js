import { Record, List } from 'immutable';

import ShoppingCartItem from 'models/shopping-cart-item';

const Parent = Record({
  items: List(),
});

class ShoppingCart extends Parent {
  getItems() {
    return this.get('items');
  }

  setItems(items) {
    return this.set('items', items);
  }

  addItem(product, selectedSize, quantity) {
    const sameProductIndex = this.getItems().findIndex(item => {
      return item.getProduct().getId() === product.getId()
        && item.getSize() === selectedSize;
    });

    if (sameProductIndex > -1) {
      const currentQuantity = this.getItems().get(sameProductIndex).getQuantity();
      const newQuantity = Math.min(12, currentQuantity + quantity);

      return this.changeQuantity(product, newQuantity, selectedSize);
    }

    const shoppingCartItem = new ShoppingCartItem({
      product,
      quantity,
      selectedSize,
    });

    const updatedList = this.getItems().push(shoppingCartItem);

    return this.setItems(updatedList);
  }

  updateItem(oldItem, newItem) {
    const list = this.getItems();
    const updatedList = list.update(
      list.findIndex(item => item === oldItem),
      () => newItem,
    );

    return this.setItems(updatedList);
  }

  deleteItem(item) {
    const updatedList = this.getItems().filter(e => e.getProduct() !== item);

    return this.setItems(updatedList);
  }

  getTotalPrice() {
    return this.getItems().reduce((p, c) => {
      return p + c.getProduct().getPrice() * c.getQuantity();
    }, 0);
  }

  changeQuantity(product, quantity, size) {
    const list = this.getItems();
    const updatedList = list.update(
      list.findIndex(item => {
        return item.getProduct() === product && item.getSize() === size
      }),
      (item) => item.setQuantity(quantity),
    );

    return this.setItems(updatedList);
  }
}

export default ShoppingCart;
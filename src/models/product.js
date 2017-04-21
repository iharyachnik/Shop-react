import { Record } from 'immutable';

const Parent = Record({
  name: '',
  title: '',
  category: '',
  price: 0,
  description: '',
  image: '',
  largeImage: '',
});

class Product extends Parent {
  getTitle() {
    return this.get('title');
  }

  getPrice() {
    return this.get('price');
  }

  getImageUrl() {
    return this.get('image');
  }

  getKey() {
    return this.get('name');
  }
}

export default Product;
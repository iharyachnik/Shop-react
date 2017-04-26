import ShoppingCart from 'models/shopping-cart';
import * as SHOPPING_CART_ACTIONS from 'actions/shopping-cart';

const initialState = new ShoppingCart();

const createReducer = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case SHOPPING_CART_ACTIONS.ADD_PRODUCT:
      newState = newState.addItem(action.product, action.selectedSize, action.quantity);
      break;
    case SHOPPING_CART_ACTIONS.DELETE_PRODUCT:
      newState = newState.deleteItem(action.product);
      break;
    case SHOPPING_CART_ACTIONS.CHANGE_QUANTITY:
      newState = newState.changeQuantity(action.product, action.quantity);
      break;
    default:
      break;
  }

  return newState;
}

export default createReducer;
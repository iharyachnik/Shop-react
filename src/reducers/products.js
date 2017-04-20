import Products from 'models/products';
import * as PRODUCTS_ACTIONS from 'actions/products';

const initialState = new Products();

const createReducer = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case PRODUCTS_ACTIONS.GET_CATEGORY_ITEMS:
      newState = newState.setCategoryItems(action.category, action.data);
      break;
    default:
      break;
  }

  return newState;
}

export default createReducer;
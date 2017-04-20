import Products from 'models/products';

const initialState = new Products();

export default function createReducer(state = initialState, action) {
  let newState = state;

  switch (action.type) {
    default:
      break;
  }

  return newState;
}
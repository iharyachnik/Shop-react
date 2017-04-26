export const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = (product, selectedSize, quantity) => dispatch => {
  return dispatch({
    type: ADD_TO_CART,
    product,
    selectedSize,
    quantity,
  });
};
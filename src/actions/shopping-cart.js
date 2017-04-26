export const ADD_PRODUCT = 'ADD_PRODUCT';
export const addProduct = (product, selectedSize, quantity) => dispatch => {
  return dispatch({
    type: ADD_PRODUCT,
    product,
    selectedSize,
    quantity,
  });
};

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const deleteProduct = (product, selectedSize) => dispatch => {
  return dispatch({
    type: DELETE_PRODUCT,
    product,
    selectedSize,
  });
};

export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const changeQuantity = (product, quantity, selectedSize) => dispatch => {
  return dispatch({
    type: CHANGE_QUANTITY,
    product,
    quantity,
    selectedSize
  });
};
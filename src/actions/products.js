import { getResourceUrl } from 'utils';

export const GET_CATEGORY_ITEMS = 'GET_CATEGORY_ITEMS';
export const getCategoryItems = category => dispatch => {
  const url = getResourceUrl(category);

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_CATEGORY_ITEMS,
        category,
        data,
      });
    })
};
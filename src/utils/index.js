export const getResourceUrl = (category) => {
  return `/data/${category}.json`;
};

export const getDetailsUrl = (category, itemId) => {
  return `/${category}/${itemId}`;
};

export const formatPrice = (price) => {
  return price ? '$' + price.toFixed(2) : '';
};

export const formatAmountString = (quantity) => {
  return quantity + ' ' + (quantity === 1 ? 'item' : 'items');
};
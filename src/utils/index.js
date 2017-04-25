export const getResourceUrl = (category) => {
  return `/data/${category}.json`;
};

export const getDetailsUrl = (category, itemId) => {
  return `/${category}/${itemId}`;
};

export const formatPrice = (price) => {
  return price ? '$' + price.toFixed(2) : '';
};
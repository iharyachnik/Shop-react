import { CATEGORY_CONSTANTS } from 'config/category.constants';

export const getResourceUrl = (category) => {
  return `/data/${CATEGORY_CONSTANTS[category]}.json`;
};
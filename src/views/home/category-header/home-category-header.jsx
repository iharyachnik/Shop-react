import { Link } from 'react-router';

import Button from 'components/button/button';
import CategoryHeader from 'components/category-header/category-header';

import { CATEGORY_CONSTANTS } from 'config/category.constants';

const HomeCategoryHeader = ({ category }) => {
  return (
    <CategoryHeader
      category={category}
    >
      <Link to={CATEGORY_CONSTANTS[category]}>
        <Button title='Shop now' />
      </Link>
    </CategoryHeader>
  );
};

export default HomeCategoryHeader;
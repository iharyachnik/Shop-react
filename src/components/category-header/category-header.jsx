import classnames from 'classnames';
import { Link } from 'react-router';

import { CATEGORY_CONSTANTS, CATEGORY_NAMES } from 'config/category.constants';

import './category-header.scss';

const categoryHeader = (props) => {
  const {
    containerClassName,
    titleClassName,
    children,
    category,
  } = props;

  const title = CATEGORY_NAMES[category];

  const containerClass = classnames('category-header', containerClassName);
  const imageClass = classnames('category-header__image', category);
  const titleClass = classnames('category-header__title', titleClassName);

  return (
    <div className={containerClass}>
      <Link to={category}>
        <div className={imageClass}></div>
      </Link>
      <div className={titleClass}>
        {title}
      </div>
      {children}
    </div>
  );
};

export default categoryHeader;
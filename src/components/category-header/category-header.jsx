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

  const to = CATEGORY_CONSTANTS[category];
  const imageClassName = CATEGORY_CONSTANTS[category];
  const title = CATEGORY_NAMES[category];

  const containerClass = classnames('category-header', containerClassName);
  const imageClass = classnames('category-header__image', imageClassName);
  const titleClass = classnames('category-header__title', titleClassName);

  return (
    <div className={containerClass}>
      <Link to={to}>
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
import classnames from 'classnames';
import { Link } from 'react-router';

import './category-header.scss';

const categoryHeader = (props) => {
  const {
    containerClassName,
    imageClassName,
    titleClassName,
    title,
    children,
    to,
  } = props;

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
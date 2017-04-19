import classnames from 'classnames';

import './category-header.scss';

const categoryHeader = (props) => {
  const {
    containerClassName,
    imageClassName,
    titleClassName,
    title,
    children,
  } = props;

  const containerClass = classnames('category-header', containerClassName);
  const imageClass = classnames('category-header__image', imageClassName);
  const titleClass = classnames('category-header__title', titleClassName);

  return (
    <div className={containerClass}>
      <div className={imageClass}></div>
      <div className={titleClass}>
        {title}
      </div>
      {children}
    </div>
  );
};

export default categoryHeader;
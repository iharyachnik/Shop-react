import classnames from 'classnames';

import './category-header.scss';

const categoryHeader = ({ className, imageClassName, title, children }) => {
  const containerClass = classnames('category-header', className);
  const imageClass = classnames('category-header__image', imageClassName);

  return (
    <div className={containerClass}>
      <div className={imageClass}></div>
      <div className='category-header__title'>
        {title}
      </div>
      {children}
    </div>
  );
};

export default categoryHeader;
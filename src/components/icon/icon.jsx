import classnames from 'classnames';

import './icon.scss';

const Icon = ({ className, id, onClick }) => {
  const iconClassName = classnames('icon', className);

  return (
    <svg className={iconClassName} onClick={onClick}><use xlinkHref={id} /></svg>
  );
};

export default Icon;
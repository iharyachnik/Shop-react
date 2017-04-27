import classnames from 'classnames';

import './input.scss';

const Input = (props) => {
  const { className, containerClassName } = props;
  const containerClass = classnames('input-container', containerClassName);
  const inputClass = classnames('input', className);

  return (
    <div className={containerClass}>
      <input
        {...props}
        className={inputClass}
      />
    </div>
  );
};

export default Input;
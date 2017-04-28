import classnames from 'classnames';

import './select.scss';

const Select = (props) => {
  const {
    label,
    options,
    selectedValue,
    containerClassName,
    className,
    arrowClassName,
    onChange,
    name,
  } = props;

  const selectClass = classnames('select', className);
  const arrowClass = classnames('select__arrow-down', arrowClassName);

  return (
    <div className={containerClassName}>
      <label>{label}</label>
      <select
        className={selectClass}
        value={selectedValue}
        onChange={onChange}
        name={name}
      >
        {
          options.map(value => {
            return (
              <option
                value={value}
                key={value}
              >
                {value}
              </option>
            );
          })
        }
      </select>
      <span className={arrowClass} />
    </div>
  );
};

export default Select;
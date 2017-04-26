import classnames from 'classnames';

import './select.scss';

const Select = (props) => {
  const {
    label,
    options,
    selectedValue,
    containerClassName,
    className,
    onChange,
    name,
  } = props;

  const selectClassName = classnames('select', className);

  return (
    <div className={containerClassName}>
      <label>{label}</label>
      <select
        className={selectClassName}
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
      <span className='select__arrow-down' />
    </div>
  );
};

export default Select;
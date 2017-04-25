import './select.scss';

const Select = (props) => {
  const {
    label,
    options,
    selectedValue,
    containerClassName,
    onChange,
    name,
  } = props;

  return (
    <div className={containerClassName}>
      <label>{label}</label>
      <select
        className='select'
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
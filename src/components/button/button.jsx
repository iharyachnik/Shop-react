import './button.scss';

const button = ({ title }) => {
  return (
    <button className='button'>
      {title}
    </button>
  );
};

export default button;
import './footer.scss';

const footer = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <footer className='footer'>
      Demo App
    </footer>
  );
};

export default footer;;
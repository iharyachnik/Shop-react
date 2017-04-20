import Header from 'components/header/header';
import Navbar from 'components/navbar/navbar';
import Footer from 'components/footer/footer';

import './layout.scss'

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className='layout__page'>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default layout;
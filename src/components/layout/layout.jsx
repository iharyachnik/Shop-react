import Header from 'components/header/header';
import Navbar from 'components/navbar/navbar';
import Footer from 'components/footer/footer';

import './layout.scss'

const layout = ({ children, withArrow, toCategory, withoutNavbar, withoutFooter }) => {
  return (
    <div>
      <Header
        arrowVisible={withArrow}
        category={toCategory}
      />
      <Navbar visible={!withoutNavbar} />
      <div className='layout__page'>
        {children}
      </div>
      <Footer visible={!withoutFooter} />
    </div>
  );
}

export default layout;
import Layout from 'components/layout/layout';
import HomeCategoryHeader from 'views/home/category-header/home-category-header';

import { CATEGORY_CONSTANTS } from 'config/category.constants';

import './home.scss';

const home = () => {
  return (
    <Layout>
      <div className='home'>
        <HomeCategoryHeader category={CATEGORY_CONSTANTS.mens_outerwear} />
        <HomeCategoryHeader category={CATEGORY_CONSTANTS.ladies_outerwear} />
        <div className='home__category-container'>
          <HomeCategoryHeader category={CATEGORY_CONSTANTS.mens_tshirts} />
          <HomeCategoryHeader category={CATEGORY_CONSTANTS.ladies_tshirts} />
        </div>
      </div>
    </Layout >
  );
};

export default home;

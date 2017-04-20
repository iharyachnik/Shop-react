import Layout from 'components/layout/layout';
import HomeCategoryHeader from 'views/home/category-header/home-category-header';

import { CATEGORY_CONSTANTS_ENUM } from 'config/category.constants';

import './home.scss';

const home = () => {
  return (
    <Layout>
      <div className='home'>
        <HomeCategoryHeader category={CATEGORY_CONSTANTS_ENUM.MENS_OUTERWEAR} />
        <HomeCategoryHeader category={CATEGORY_CONSTANTS_ENUM.LADIES_OUTERWEAR} />
        <div className='home__category-container'>
          <HomeCategoryHeader category={CATEGORY_CONSTANTS_ENUM.MENS_TSHIRTS} />
          <HomeCategoryHeader category={CATEGORY_CONSTANTS_ENUM.LADIES_TSHIRTS} />
        </div>
      </div>
    </Layout >
  );
};

export default home;

import { Link } from 'react-router';

import Layout from 'components/layout/layout';
import Button from 'components/button/button';
import CategoryHeader from 'components/category-header/category-header';

import { CATEGORY_CONSTANTS_ENUM, CATEGORY_CONSTANTS } from 'config/category.constants';

import './home.scss';

const home = () => {
  return (
    <Layout>
      <div className='home'>
        <CategoryHeader
          category={CATEGORY_CONSTANTS_ENUM.MENS_OUTERWEAR}
        >
          <Link to={CATEGORY_CONSTANTS.MENS_OUTERWEAR}>
            <Button title='Shop now' />
          </Link>
        </CategoryHeader>

        <CategoryHeader
          category={CATEGORY_CONSTANTS_ENUM.LADIES_OUTERWEAR}
        >
          <Link to={CATEGORY_CONSTANTS.LADIES_OUTERWEAR}>
            <Button title='Shop now' />
          </Link>
        </CategoryHeader>

        <div className='home__category-container'>
          <CategoryHeader
            category={CATEGORY_CONSTANTS_ENUM.MENS_TSHIRTS}
          >
            <Link to={CATEGORY_CONSTANTS.MENS_TSHIRTS}>
              <Button title='Shop now' />
            </Link>
          </CategoryHeader>

          <CategoryHeader
            category={CATEGORY_CONSTANTS_ENUM.LADIES_TSHIRTS}
          >
            <Link to={CATEGORY_CONSTANTS.LADIES_TSHIRTS}>
              <Button title='Shop now' />
            </Link>
          </CategoryHeader>
        </div>
      </div>
    </Layout >
  );
};

export default home;

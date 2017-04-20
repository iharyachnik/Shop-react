import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from 'components/layout/layout';
import CategoryHeader from 'components/category-header/category-header';
import ProductListItem from 'components/product-list-item/product-list-item';

import { getCategoryItems } from 'actions/products';
import { CATEGORY_CONSTANTS, CATEGORY_NAMES } from 'config/category.constants';

class ProductList extends React.Component {
  componentDidMount() {
    const { category } = this.props;

    this.props.getCategoryItems(category);
  }

  render() {
    const { category, items } = this.props;

    return (
      <Layout>
        <CategoryHeader
          category={category}
          titleClassName='category-header__title--no-margin-bottom'
        >
          <span className='category-header__subtitle'>(16 items)</span>
        </CategoryHeader>
        <div>
          {/*{
            items.map(e => <ProductListItem item={e} />)
          }*/}
        </div>
      </Layout>
    );
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({
    getCategoryItems,
  }, dispatch)
)(ProductList);
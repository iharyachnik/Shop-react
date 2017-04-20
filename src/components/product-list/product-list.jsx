import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from 'components/layout/layout';
import CategoryHeader from 'components/category-header/category-header';
import ProductListItem from 'components/product-list-item/product-list-item';

import { getCategoryItems } from 'actions/products';
import { CATEGORY_CONSTANTS, CATEGORY_NAMES } from 'config/category.constants';

import './product-list.scss';

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
          <span className='category-header__subtitle'>
            ({items.size} items)
          </span>
        </CategoryHeader>
        <div className='product-list'>
          {items.map(e => <ProductListItem item={e} />)}
        </div>
      </Layout>
    );
  }
}

export default connect(
  ({ Products }, ownProps) => {
    return {
      items: Products.getCategoryItems(ownProps.category),
    };
  },
  dispatch => bindActionCreators({
    getCategoryItems,
  }, dispatch)
)(ProductList);
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from 'components/layout/layout';
import CategoryHeader from 'components/category-header/category-header';
import ProductListItem from 'components/product-list-item/product-list-item';
import NotFound from 'components/not-found/not-found';

import { getCategoryItems } from 'actions/products';

import './product-list.scss';

class ProductList extends React.Component {
  componentDidMount() {
    const { params: { category: category } } = this.props;

    this.props.getCategoryItems(category);
  }

  componentWillReceiveProps(nextProps) {
    const { params: { category: currentCategory } } = this.props;
    const { params: { category: newCategory } } = nextProps;

    if (currentCategory === newCategory) {
      return;
    }

    this.props.getCategoryItems(newCategory);
  }

  render() {
    const { params: { category: category }, items } = this.props;

    if (!items) {
      return (
        <NotFound />
      );
    }

    return (
      <Layout>
        <CategoryHeader
          category={category}
          titleClassName='category-header__title--no-margin-bottom'
          containerClassName='category-header--no-margin-bottom'
        >
          <span className='category-header__subtitle'>
            ({items.size} items)
          </span>
        </CategoryHeader>
        <div className='product-list'>
          {items.map(e => <ProductListItem item={e} key={e.getId()} />)}
        </div>
      </Layout>
    );
  }
}

export default connect(
  ({ Products }, ownProps) => {
    return {
      items: Products.getCategoryItems(ownProps.params.category),
    };
  },
  dispatch => bindActionCreators({
    getCategoryItems,
  }, dispatch)
)(ProductList);
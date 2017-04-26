import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from 'components/layout/layout';
import NotFound from 'components/not-found/not-found';
import Select from 'components/select/select';
import Button from 'components/button/button';

import { addProduct } from 'actions/shopping-cart';

import { formatPrice } from 'utils';
import { SIZE_CONSTANTS, QUANTITY_CONSTANTS } from 'config/details.constants'

import './details.scss';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: SIZE_CONSTANTS[2],
      quantity: QUANTITY_CONSTANTS[0],
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  render() {
    const { item } = this.props;

    if (!item) {
      return (
        <NotFound />
      );
    }

    const { size: selectedSize, quantity: selectedQuantity } = this.state;
    const { params: { category: category }, addProduct } = this.props;

    const price = formatPrice(item.getPrice());
    const unescapedDescription = this.unescapeText(item.getDescription());

    return (
      <Layout
        withArrow={true}
        toCategory={category}
      >
        <div className='details'>
          <div className='details-image'>
            <img src={item.getLargeImageUrl()} />
          </div>
          <div className='details-description'>
            <h1 className='details-description__title'>
              {item.getTitle()}
            </h1>
            <div className='details-description__price'>
              {price}
            </div>
            <div className='details-description__select-container'>
              <Select
                options={SIZE_CONSTANTS}
                selectedValue={selectedSize}
                onChange={this.handleSelectChange}
                name='size'
                label='Size'
                containerClassName='details-description__select details-description__select--details'
              />
              <Select
                options={QUANTITY_CONSTANTS}
                selectedValue={selectedQuantity}
                onChange={this.handleSelectChange}
                name='quantity'
                label='Quantity'
                containerClassName='details-description__select details-description__select--details'
              />
            </div>
            <div className='details-description__spec'>
              <h2>Description</h2>
              <p dangerouslySetInnerHTML={{ __html: unescapedDescription }} />
            </div>
            <div
              onClick={() => addProduct(item, selectedSize, selectedQuantity)}
            >
              <Button title='Add to cart' />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  handleSelectChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  unescapeText(text) {
    const elem = document.createElement('textarea');
    elem.innerHTML = text;

    return elem.textContent;
  }
}

export default connect(
  ({ Products }, ownProps) => {
    const {
      params: {
        category: category,
        id: id,
      },
    } = ownProps;

    return {
      item: Products.getItem(category, id),
    };
  },
  dispatch => bindActionCreators({
    addProduct,
  }, dispatch)
)(Details);
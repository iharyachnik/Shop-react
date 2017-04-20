import './product-list-item.scss';

const ProductListItem = ({ item }) => {
  const url = item.getImageUrl();
  const title = item.getTitle();
  const price = `$${item.getPrice().toFixed(2)}`;

  return (
    <div className='product-list-item'>
      <img className='product-list-item__image'
        src={url}
      />
      <span className='product-list-item__title'>
        {title}
      </span>
      <span className='product-list-item__price'>
        {price}
      </span>
    </div>
  );
};

export default ProductListItem;
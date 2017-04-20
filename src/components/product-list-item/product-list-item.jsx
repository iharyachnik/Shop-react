const productListItem = ({ item }) => {
  return (
    <div>
      {item.getTitle()}
    </div>
  );
};

export default productListItem;
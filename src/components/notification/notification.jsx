import { Link } from 'react-router';

import Icon from 'components/icon/icon';
import Button from 'components/button/button';

import CrossIcon from 'images/cross.svg';

import './notification.scss';

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  render() {
    const { onClose } = this.props;

    return (
      <div className='notification'>
        <div className='notification__layout'>
          <span className='notification__title'>
            Added to cart
          </span>
          <Icon
            id={CrossIcon}
            className='notification__cross'
            onClick={onClose}
          />
        </div>
        <div className='notification__layout'>
          <Link to='/cart'>
            <Button title='View cart' />
          </Link>
          <Link to='/checkout'>
            <Button title='Checkout' />
          </Link>
        </div>
      </div>
    );
  }

  handleDocumentClick(e) {
    if (!e.target.closest('.notification, .details-description button')) {
      this.props.onClose();
    }
  }
}

export default Notification;
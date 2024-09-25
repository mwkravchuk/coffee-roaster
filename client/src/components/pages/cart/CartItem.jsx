import PropTypes from 'prop-types';

import TrashIcon from '../../icons/Trash';

import styles from './CartItem.module.css';

const CartItem = ({ item, addToCart, removeFromCart, deleteFromCart }) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.imageWrapper} style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
      <div className={styles.infoWrapper}>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemPrice}>${item.price}</p>
        <div className={styles.quantityWrapper}>
          <button className={styles.btn} onClick={() => removeFromCart(item)}>-</button>
          <p className={styles.itemQuantity}>{item.quantity}</p>
          <button className={styles.btn} onClick={() => addToCart(item)}>+</button>
        </div>
      </div>
      <button className={styles.btn} onClick={() => deleteFromCart(item)}>
        <TrashIcon />  
      </button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
};

export default CartItem;
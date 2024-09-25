import PropTypes from 'prop-types';
import { useCart } from '../../contexts/CartProvider';
import { useNavigate } from 'react-router-dom';

import styles from './Button.module.css';

const AddToCartButton = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  }
  
  return (
    <button className={styles.button} onClick={handleAddToCart}>ADD TO CART</button>
  );
};

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default AddToCartButton;
import { Link } from 'react-router-dom';

import { useCart } from '../../../contexts/CartProvider';
import CartItem from './CartItem';

import styles from './Cart.module.css';

import CheckoutButton from '../../common/CheckoutButton';

const CartPage = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart} = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={styles.screenContainer}>
      <div className={styles.cartWrapper}>
        <h1 className={styles.cartTitle}>CART</h1>
        <Link to='/coffee' className={styles.continueShopping}>CONTINUE SHOPPING</Link>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className={styles.cartContainer}>
            <div className={styles.cartItems}>
              {cart.map((item) => (
                <CartItem key={item._id}
                          item={item}
                          addToCart={addToCart}
                          removeFromCart={removeFromCart}
                          deleteFromCart={deleteFromCart}
                />
              ))}
            </div>
            <div className={styles.cartInfo}>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Shipping and taxes calculated at checkout.</p>
              <CheckoutButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
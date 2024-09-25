import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '../../contexts/CartProvider';
import axios from '../../../axiosConfig';

import styles from './Button.module.css';

const stripePromise = loadStripe('');

const CheckoutButton = () => {

  const { cart } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      const response = await axios.post('/stripe/create-checkout-session', { cart });
      const sessionId = response.data.id;

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error('Stripe checkout error:', error);
      }
    } catch (error) {
      console.error('Error creating checkout session: ', error);
    }

  };

  return <button className={styles.button} onClick={handleCheckout}>CHECKOUT</button>;
};

export default CheckoutButton;
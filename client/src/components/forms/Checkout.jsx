import { useState } from 'react';
import { useCart } from '../../contexts/CartProvider';

const CheckoutForm = () => {
  const [shippingInfo, setShippingInfo] = useState({
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });

  const { clearCart } = useCart();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process info
    clearCart();
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='inputGroup'>
          <label htmlFor='emailInput'>EMAIL</label>
          <input
            id='emailInput'
            type='email'
            value={shippingInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <h2>Shipping Address</h2>
        <div className='inputGroup'>
          <label htmlFor='address'>ADDRESS</label>
          <input
            id='address'
            type='text'
            value={shippingInfo.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor='city'>CITY</label>
          <input
            id='city'
            type='text'
            value={shippingInfo.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor='state'>STATE</label>
          <input
            id='state'
            type='text'
            value={shippingInfo.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor='zipCode'>ZIP CODE</label>
          <input
            id='zipCode'
            type='text'
            value={shippingInfo.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor='phone'>PHONE</label>
          <input
            id='phone'
            type='tel'
            value={shippingInfo.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Continue to Shipping</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
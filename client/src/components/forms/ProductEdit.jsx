import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from '../../../axiosConfig';

import btnStyles from '../common/Button.module.css';
import styles from './Form.module.css';

const ProductEdit = ({ selectedProductId }) => {
  const [product, setProduct] = useState({ name: '', price: '', description: '', imageUrl: '' });

  useEffect(() => {
    if (selectedProductId) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`/products/${selectedProductId}`);
          setProduct({
            name: response.data.name || '',
            price: response.data.price || '',
            description: response.data.description || '',
            imageUrl: response.data.imageUrl || ''
          });
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };

      fetchProduct();
    }
  }, [selectedProductId]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor='name'>NAME</label>
        <input
          id='name'
          type='text'
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='price'>PRICE</label>
        <input
          id='price'
          type='number'
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='description'>DESCRIPTION</label>
        <textarea
          id='description'
          type='text'
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='imageUrl'>IMAGE</label>
        <input
          id='imageUrl'
          type='text'
          value={product.imageUrl}
          onChange={handleChange}
          required
        />
      </div>
      <button className={btnStyles.button} type='submit'>UPDATE PRODUCT</button>
    </form>
  );

};

ProductEdit.propTypes = {
  selectedProductId: PropTypes.string.isRequired,
};

export default ProductEdit;
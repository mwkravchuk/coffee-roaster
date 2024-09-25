import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from '../../../../../axiosConfig';

const ProductDropdown = ({ selectedProductId, setSelectedProductId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching prodcuts:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <select value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
    >
      <option value=''>Select a product</option>
      {products.map((product) => (
        <option key={product._id} value={product._id}>
          {product.name}
        </option>
      ))}
    </select>
  );
};

ProductDropdown.propTypes = {
  selectedProductId: PropTypes.string.isRequired,
  setSelectedProductId: PropTypes.func.isRequired,
};

export default ProductDropdown;
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from '../../../../../axiosConfig';

const ProductDelete = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const navigate = useNavigate();
  
  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setSelectedProductId(e.target.value);
  }
  
  const handleDelete = async () => {
    try {
      await axios.delete(`/products/${selectedProductId}`);
      setProducts(products.filter(product => product._id !== selectedProductId));
      navigate('/coffee');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
  return (
    <div>
      <h1>Delete products</h1>
      <select value={selectedProductId} onChange={handleChange}>
        <option value='' disabled>Select a product to delete</option>
        {products.map((product) => (
          <option key={product._id} value={product._id}>
            {product.name}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductDelete;
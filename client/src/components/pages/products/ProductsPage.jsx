import { useEffect, useState } from 'react';
import axios from '../../../../axiosConfig';
import ProductItem from './ProductItem';

import styles from './ProductsPage.module.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (error) {
        setError('Failed to load products.');
      }
    };
    fetchProducts();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className={styles.productsWrapper}>
      <h1 className={styles.productsTitle}>ALL COFFEE</h1>
      <div className={styles.productListWrapper}>
        <div className={styles.productList}>
          {products.map(product => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
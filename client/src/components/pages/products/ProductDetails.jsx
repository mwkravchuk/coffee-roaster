import { useLocation } from 'react-router-dom';

import AddToCartButton from '../../common/AddToCartButton';

import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.screenContainer}>
      <div className={styles.wrapper}>
        <div>
          <img src={product.imageUrl} alt={product.name} className={styles.image}/>
        </div>
        <div className={styles.info}>
          <h1 className={styles.name}>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
          <AddToCartButton product={product}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
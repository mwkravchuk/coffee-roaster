import { Link } from 'react-router-dom';

import styles from './ProductItem.module.css';

const ProductItem = ({ product }) => {
  const productUrl = `/coffee/${product.name.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Link to={productUrl} state={{ product }}>
      <div className={styles.wrapper}>
        <img src={product.imageUrl} alt={product.name} className={styles.picture} />
        <p className={styles.name}>{product.name}</p>
        <p className={styles.notes}>{product.notes}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
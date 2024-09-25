import { Link } from 'react-router-dom';

import btnStyles from '../../../common/Button.module.css';
import styles from './ProductManagement.module.css';

const ProductManagement = () => {
  return (
    <div className={styles.screenContainer}>
      <div className={styles.managementContainer}>
        <h1 className={styles.managementTitle}>PRODUCT MANAGEMENT</h1>
        <div className={styles.links}>
          <Link to='/admin/products/create' className={btnStyles.button}>CREATE</Link>
          <Link to='/admin/products/edit' className={btnStyles.button}>EDIT</Link>
          <Link to='/admin/products/delete' className={btnStyles.button}>DELETE</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
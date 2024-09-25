import NewProductForm from '../../../forms/NewProduct';

import styles from '../../auth/Login.module.css';

const ProductCreation = () => {
  return (
    <div className={styles.screenContainer}>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>NEW PRODUCT</h1>
        <NewProductForm />
      </div> 
    </div>
  );
};

export default ProductCreation;
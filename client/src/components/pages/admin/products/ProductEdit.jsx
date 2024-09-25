import { useState } from 'react';
import ProductEditForm from '../../../forms/ProductEdit';
import ProductDropdown from './ProductDropdown';

import styles from '../../auth/Login.module.css';

const ProductEdit = () => {
  const [selectedProductId, setSelectedProductId] = useState('');

  return (
    <div className={styles.screenContainer}>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>EDIT PRODUCT</h1>
        <ProductDropdown
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
        />
        {selectedProductId && <ProductEditForm selectedProductId={selectedProductId}/>}
      </div> 
    </div>
  );
};

export default ProductEdit;
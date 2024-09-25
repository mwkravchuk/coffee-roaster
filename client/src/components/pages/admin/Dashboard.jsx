import { Link } from 'react-router-dom';

import btnStyles from '../../common/Button.module.css';
import styles from './Dashboard.module.css';

const AdminPage = () => {
  return (
    <div className={styles.screenContainer}>
      <div className={styles.dashboardContainer}>
        <h1 className={styles.dashboardTitle}>ADMIN</h1>
        <Link to="/admin/products" className={btnStyles.button}>PRODUCT MANAGEMENT</Link>
      </div>
    </div>
  );
};

export default AdminPage;
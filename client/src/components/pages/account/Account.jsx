import { AuthData } from '../../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

import styles from './Account.module.css';
import btnStyles from '../../common/Button.module.css';

const AccountPage = () => {
  const { logout } = AuthData();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={styles.screenContainer}>
      <div className={styles.accountContainer}>
        <h1 className={styles.accountTitle}>ACCOUNT</h1>
        <button className={btnStyles.button} onClick={handleLogout}>LOG OUT</button>
      </div>
    </div>
  );
};

export default AccountPage;

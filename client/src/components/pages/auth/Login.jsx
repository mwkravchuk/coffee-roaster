import { Link } from 'react-router-dom';

import LoginForm from '../../forms/Login';

import styles from './Login.module.css'

const LoginPage = () => {
  return (
    <div className={styles.screenContainer}>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>LOG IN</h1>
        <LoginForm />
        <p className={styles.registerPrompt}><Link to="/account/register">CREATE AN ACCOUNT</Link></p>
      </div> 
    </div>
  );
};

export default LoginPage;
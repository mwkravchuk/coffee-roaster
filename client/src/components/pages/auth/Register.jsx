import RegisterForm from '../../forms/Register';

import styles from './Login.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.screenContainer}>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>REGISTER</h1>
        <RegisterForm />
      </div> 
    </div>
  );
};

export default RegisterPage;
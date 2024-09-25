import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthData } from '../../contexts/AuthProvider';

import btnStyles from '../common/Button.module.css';
import styles from './Form.module.css';

const LoginForm = () => {
  const { login } = AuthData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      setMessage(error.response.data.errors.map(err => err.msg).join(', '));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor='emailInput'>EMAIL</label>
        <input
          id='emailInput'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='passwordInput'>PASSWORD</label>
        <input
          id='passwordInput'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className={btnStyles.button} type='submit'>LOGIN</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default LoginForm;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../axiosConfig';

import btnStyles from '../common/Button.module.css';
import styles from './Form.module.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('register', { email, password });
      setMessage(response.data.msg);
      // Redirect after account registration
      navigate('/');
    } catch (error) {
      setMessage(error.response.data.errors.map(err => err.msg).join(', '));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor='emailInput'>EMAIL</label>
        <input id='emailInput' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='passwordInput'>PASSWORD</label>
        <input id='passwordInput' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button className={btnStyles.button} type='submit'>SUBMIT</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default RegisterForm;
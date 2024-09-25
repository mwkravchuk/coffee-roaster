import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../axiosConfig';

import btnStyles from '../common/Button.module.css';
import styles from './Form.module.css';

const NewProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [notes, setNotes] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('notes', notes);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data.msg);
      // Redirect after product creation
      navigate('/coffee');
    } catch (error) {
      setMessage(error.response.data.errors.map(err => err.msg).join(', '));
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor='name'>NAME</label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='price'>PRICE</label>
        <input
          id='price'
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='notes'>NOTES</label>
        <input
          id='notes'
          type='text'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='description'>DESCRIPTION</label>
        <textarea
          id='description'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='image'>IMAGE</label>
        <input
          id='image'
          type='file'
          onChange={handleImageChange}
          required
        />
      </div>
      <button className={btnStyles.button} type='submit'>CREATE PRODUCT</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default NewProduct;
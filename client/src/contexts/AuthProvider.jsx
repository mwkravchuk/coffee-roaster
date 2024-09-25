import { createContext, useContext, useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import { jwtDecode } from 'jwt-decode';

// CREATE CONTEXT
const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

// MAIN COMPONENT
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ isAuthenticated: false, isAdmin: false });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const decodedToken = jwtDecode(token);
      setUser({ isAuthenticated: true, isAdmin: decodedToken.isAdmin })
    }
  }, []);

  const login = async (email, password) => {
    // Try to login the user. Set appropriate details as a result.
    try {
      const response = await axios.post('auth/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token); // Store the token for later use
      const decodedToken = jwtDecode(token);
      setUser({ isAuthenticated: true, isAdmin: decodedToken.isAdmin });
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  const logout = () => {
    setUser({ isAuthenticated: false, isAdmin: false });
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      { children }
    </AuthContext.Provider>
  );

};
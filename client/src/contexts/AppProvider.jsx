import { AuthProvider } from './AuthProvider';
import { CartProvider } from './CartProvider';

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        { children }
      </CartProvider>
    </AuthProvider>
  );
};

export default AppProvider;
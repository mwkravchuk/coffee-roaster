import { BrowserRouter } from 'react-router-dom';

import Header from './components/structure/Header';
import RenderRoutes from './components/structure/RenderRoutes'; 
import Footer from './components/structure/Footer'; 

import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className={styles.page}>
          <Header />
          <RenderRoutes />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

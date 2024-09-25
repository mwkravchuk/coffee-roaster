import { Route, Routes } from 'react-router-dom';
import { AuthData } from '../../contexts/AuthProvider';
import routes from './routes';
import styles from './Routes.module.css';

// Dynamically render the routes users can
// access based on role, authentication, and privacy of route
export const RenderRoutes = () => {
  const { user } = AuthData();
  return (
    <div className={styles.routes}>
      <Routes>
        {routes.map((r, i) => {

          if (r.isAdmin && user.isAdmin && r.isPrivate && user.isAuthenticated) {
            // Admin routes
            return <Route key={i} path={r.path} element={r.element}/>
          } else if (r.isPrivate && user.isAuthenticated && !r.isAdmin) {
            // Private, non-admin routes
            return <Route key={i} path={r.path} element={r.element}/>
          } else if (!r.isPrivate) {
            // Public routes
            return <Route key={i} path={r.path} element={r.element}/>
          } else return false;
        })}
      </Routes>
    </div>
  );
};

export default RenderRoutes;
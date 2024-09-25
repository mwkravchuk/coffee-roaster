import { Link } from 'react-router-dom';
import { AuthData } from '../../contexts/AuthProvider.jsx';
import routes from './routes';
import styles from './Header.module.css';

import HomeIcon from '../icons/Home.jsx';


const Header = () => {
  const { user } = AuthData();
  
  const HeaderItem = ({r}) => {
    return (
      <div className={styles.headerItem}>
        <Link to={r.path}>
          {typeof r.display === 'string' ? r.display : <r.display />}
        </Link>
      </div>
    );
  };

  const MenuItem = ({r}) => {
    return (
      <div className={styles.menuItem}>
        <Link to={r.path}>
          {r.name}
        </Link>
      </div>
    );
  };

  return (
    <header>
      {/*left menu */}
      <nav className={styles.leftWrapper}>
        <ul className={styles.list}>
          {routes.map((r, i) => {
            // Account vs. login header icon
            if (r.isMenu) {
              return (
                <MenuItem key={i} r={r} />
              );
            } else return false;
          })}
        </ul>
      </nav>
      {/* main logo*/}
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <Link to='/'>
            <HomeIcon />
          </Link>
        </div>
      </div>
      {/* icons on the right*/}
      <nav className={styles.rightWrapper}>
        <ul className={styles.list}>
          {routes.map((r, i) => {

            // Account vs. login header icon

            if (r.path === 'account/login' && !user.isAuthenticated) {
              return (
                <HeaderItem key={i} r={r} />
              );
            } else if (r.path === 'account' && user.isAuthenticated) {
              return (
                <HeaderItem key={i} r={r} />
              );
            } else if ((r.isHeader && r.isAdmin && user.isAdmin && r.isPrivate && user.isAuthenticated) ||
                      (r.isHeader && r.isPrivate && user.isAuthenticated && !r.isAdmin) ||
                      (r.isHeader && !r.isPrivate)) {
              return (
                <HeaderItem key={i} r={r} />
              );
            } else return false;
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
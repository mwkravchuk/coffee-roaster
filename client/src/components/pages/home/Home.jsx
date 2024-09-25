import { Link } from 'react-router-dom';

import coffeeImage from '../../../assets/images/coffee.jpeg';
import sacMarketImage from '../../../assets/images/farmersmarket.jpeg';
import davisMarketImage from '../../../assets/images/davisfarmersmarket.jpeg';

import btnStyles from '../../common/Button.module.css';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.screenContainer}>
      <div className={styles.topWrapper}>
        <div className={styles.headWrapper}>
          <div className={styles.qualityCoffee}>
            <span>QUALITY</span>
            <span>COFFEE</span>
          </div>
          <Link to='/coffee' className={btnStyles.button}>
            SHOP NOW
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <img src={coffeeImage} className={styles.coffeeImage}/>
        </div>
      </div>
      <div className={styles.midWrapper}>
        <p className={styles.shortText}>HONING IN EACH CUP</p>
        <Link to='/about' className={btnStyles.button}>
          OUR STORY
        </Link>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.marketImages}>
          <img src={sacMarketImage} className={styles.sacMarketImage}/>
          <img src={davisMarketImage} className={styles.davisMarketImage}/>
        </div>
        <div>
          <p className={styles.shortText}>FIND US AT YOUR LOCAL FARMERS MARKET</p>
          <p className={styles.smallText}>SACRAMENTO</p>
          <p className={styles.smallText}>DAVIS</p>
        </div>
      </div>
    </div>
  ); 
}

export default HomePage;
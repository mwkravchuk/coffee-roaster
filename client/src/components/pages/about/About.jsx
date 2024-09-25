import styles from './About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textSection}>
        <p className={styles.shortText}>
          We want to make the best possible cup of coffee.
        </p>
      </div>
      <div className={styles.textSection}>
        <p className={styles.shortText}>
          By being careful at each level of the process,
          we are confident to say that we are close.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
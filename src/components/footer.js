import { Link } from 'react-router-dom';
import styles from '../styles/footer.module.css';
import Socials from './socials';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.overview}>
        <h4>Frank Pierce</h4>
        <span>© 2023, Built and designed</span>
        <span>by Frank Pierce</span>
      </div>

      <div className={styles.social}>
        <Socials style={styles.socials}/>
      </div>
    </footer>
  )
}

export default Footer;

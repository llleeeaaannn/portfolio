import { Link } from 'react-router-dom';
import styles from '../styles/footer.module.css';
import Socials from './socials';
import { emailLink } from '../data/linkData';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.overview}>
        <h4>Frank Pierce</h4>
        <span>Built and designed by Frank Pierce</span>
        <a href={ emailLink }>piercefrank10@gmail.com</a>
      </div>

      <div className={styles.social}>
        <Socials style={styles.socials}/>
      </div>
    </footer>
  )
}

export default Footer;

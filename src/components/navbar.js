import { AppContext } from '../App.js';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const Navbar = () => {

  const { showMenu, setShowMenu } = useContext(AppContext);

  return (
    <div className={styles.navbar}>
      <Link to='/' onClick={() => setShowMenu(false)} className={showMenu ? 'logo on' : 'logo'}>FP</Link>
      <div className="navbarBurger" onClick={() => setShowMenu(!showMenu)}>
        <span className={ showMenu ? 'menuSelected' : '' }></span>
        <span className={ showMenu ? 'menuSelected' : '' }></span>
        <span className={ showMenu ? 'menuSelected' : '' }></span>
      </div>
    </div>
  )
}

export default Navbar;

// className={styles.navbarBurger}

import { useState } from 'react';
import styles from '../styles/navbar.module.css';

const Navbar = () => {

  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>FP</span>
      <div className='navbarBurger' onClick={() => setMenuToggle(!menuToggle)}>
        <span className={ menuToggle ? 'menuSelected' : '' }></span>
        <span className={ menuToggle ? 'menuSelected' : '' }></span>
        <span className={ menuToggle ? 'menuSelected' : '' }></span>
      </div>
    </div>
  )
}

export default Navbar;

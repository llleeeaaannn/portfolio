import { useContext } from 'react';
import { AppContext } from '../App';
import styles from '../styles/menu.module.css';

const Menu = () => {

  const { showMenu, setShowMenu } = useContext(AppContext);

  return (
    <div className={styles.menu}>
      <div className={styles.top}>
        <div className={styles.hello}>
          <h3>SAY HELLO</h3>
          <a href="https://github.com/llleeeaaannn" rel="noopener noreferrer" target="_blank">GitHub</a>
          <a href="https://github.com/llleeeaaannn" rel="noopener noreferrer" target="_blank">Linkedin</a>
          <a href="mailto:piercefrank10@gmail.com">piercefrank10@gmail.com</a>
        </div>

        <div className={styles.projects}>
          <h3>MY WORK</h3>
          <a href="https://www.stockle.org/" rel="noopener noreferrer" target="_blank">Stockle</a>
          <a href="https://www.spotlist.net/" rel="noopener noreferrer" target="_blank">Spotlist</a>
          <a href="https://www.spotlist.net/" rel="noopener noreferrer" target="_blank">Optioncent</a>
          <a href="https://www.medicle.net/" rel="noopener noreferrer" target="_blank">Medicle</a>
        </div>

        <div className={styles.blogs}>
          <h3>BLOGS</h3>
          <a href="https://piercefrank10.medium.com/understanding-screen-108173a55474" rel="noopener noreferrer" target="_blank">Understanding Screen</a>
          <a href="https://piercefrank10.medium.com/understanding-screen-108173a55474" rel="noopener noreferrer" target="_blank">Understanding Screen</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copyright}>&copy; Frank Pierce</span>
        <span className={styles.close} onClick={() => setShowMenu(!showMenu)}>Close Menu</span>
      </div>
    </div>
  )
}

export default Menu;

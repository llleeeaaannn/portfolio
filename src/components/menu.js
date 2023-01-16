import styles from '../styles/menu.module.css';

const Menu = () => {

  return (
    <div className={styles.menu}>
      <div className={styles.top}>
        <div className={styles.hello}>
          <h3>SAY HELLO</h3>
          <a href="https://github.com/llleeeaaannn" rel="noopener noreferrer" target="_blank">GitHub</a>
          <a href="mailto:piercefrank10@gmail.com">piercefrank10@gmail.com</a>
        </div>

        <div className={styles.projects}>
          <h3>MY WORK</h3>
          <a href="https://www.stockle.org/" rel="noopener noreferrer" target="_blank">Stockle</a>
          <a href="https://www.spotlist.net/" rel="noopener noreferrer" target="_blank">Spotlist</a>
          <a href="https://www.spotlist.net/" rel="noopener noreferrer" target="_blank">Optioncent</a>
          <a href="https://www.medicle.net/" rel="noopener noreferrer" target="_blank">Medicle</a>
        </div>
      </div>

      <div className={styles.bottom}>
      </div>
    </div>
  )
}

export default Menu;

// Add close menu button in bottom corner too (changes same state as hamburger close button)

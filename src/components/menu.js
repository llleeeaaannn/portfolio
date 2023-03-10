import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import styles from '../styles/menu.module.css';
import { githubLink, linkedinLink, emailLink } from '../data/linkData';
import { screenBlogData, vanillaSWBlogData, renderingBlogData, resetCSSData } from '../data/blogData';
import { stockleData, spotlistData, optioncentData, medicleData } from '../data/projectData';

const Menu = () => {

  const { showMenu, setShowMenu } = useContext(AppContext);

  return (
    <div className={styles.menu}>
      <div className={styles.top}>
        <div className={styles.hello}>
          <h3>SAY HELLO</h3>
          <a href={ githubLink } rel="noopener noreferrer" target="_blank">GitHub</a>
          <a href={ linkedinLink } rel="noopener noreferrer" target="_blank">Linkedin</a>
          <a href={ emailLink }>piercefrank10@gmail.com</a>
        </div>

        <div className={styles.projects}>
          <h3>MY WORK</h3>
          <a href={stockleData.live} rel="noopener noreferrer" target="_blank">{stockleData.name}</a>
          <a href={spotlistData.live} rel="noopener noreferrer" target="_blank">{spotlistData.name}</a>
          <a href={optioncentData.live} rel="noopener noreferrer" target="_blank">{optioncentData.name}</a>
          <a href={medicleData.live} rel="noopener noreferrer" target="_blank">{medicleData.name}</a>
        </div>

        <div className={styles.blogs}>
          <h3>BLOGS</h3>
          <a href={renderingBlogData.link} rel="noopener noreferrer" target="_blank">{renderingBlogData.name}</a>
          <a href={vanillaSWBlogData.link} rel="noopener noreferrer" target="_blank">{vanillaSWBlogData.name}</a>
          <a href={screenBlogData.link} rel="noopener noreferrer" target="_blank">{screenBlogData.name}</a>
          <a href={resetCSSData.link} rel="noopener noreferrer" target="_blank">{resetCSSData.name}</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copyright}>&copy; Frank Pierce</span>
        <span className={styles.close} onClick={() => setShowMenu(!showMenu)}>Close Menu</span>
        <Link to='/' className={styles.home} onClick={() => setShowMenu(false)}>Return Home</Link>
      </div>
    </div>
  )
}

export default Menu;

import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import Menu from '../components/menu';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/notfound.module.css';

const NotFound = () => {

  const { showMenu } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Page Not Found';
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.notFound}>
        <h2>404</h2>
        <span>Unfortunately, this page doesn't exist</span>
        <Link to="/">Return Home</Link>
      </div>
      { showMenu && <Menu /> }
    </>
  )
}

export default NotFound;

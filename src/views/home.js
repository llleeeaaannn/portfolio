import styles from '../styles/home.module.css';
import Navbar from '../components/navbar'

const Home = () => {

  return (
    <div className={styles.home}>
      <Navbar />
      <span>HELLO HOME</span>
    </div>
  )
}

export default Home;

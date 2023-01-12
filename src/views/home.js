import styles from '../styles/home.module.css';
import Intro from '../components/intro';
import About from '../components/about';

const Home = () => {

  return (
    <div className={styles.home}>
      <Intro />
      <About />
    </div>
  )
}

export default Home;

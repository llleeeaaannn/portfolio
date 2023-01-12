import styles from '../styles/home.module.css';
import Intro from '../components/intro';
import About from '../components/about';
import Skills from '../components/skills';

const Home = () => {

  return (
    <div className={styles.home}>
      <Intro />
      <About />
      <Skills />
    </div>
  )
}

export default Home;

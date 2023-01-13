import styles from '../styles/home.module.css';
import Intro from '../components/intro';
import About from '../components/about';
import Skills from '../components/skills';
import ProjectList from '../components/projectlist';

const Home = () => {

  return (
    <div className={styles.home}>
      <Intro />
      <div className={styles.content}>
        <About />
        <Skills />
        <ProjectList />
      </div>
    </div>
  )
}

export default Home;

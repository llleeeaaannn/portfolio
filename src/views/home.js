import styles from '../styles/home.module.css';
import Intro from '../components/intro';
import About from '../components/about';
import Skills from '../components/skills';
import BlogList from '../components/bloglist';
import ProjectList from '../components/projectlist';

const Home = () => {

  return (
    <div className={styles.home}>
      <Intro />
      <div className={styles.content}>
        <About />
        <Skills />
        <ProjectList />
        <BlogList />
      </div>
    </div>
  )
}

export default Home;

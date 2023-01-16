import styles from '../styles/home.module.css';
import Intro from '../components/intro';
import About from '../components/about';
import Footer from '../components/footer';
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
      <Footer />
    </div>
  )
}

export default Home;

// Add appearing underline on some hover elements (blog buttons..)
// Add appearing menu from hamburger menu
// Remove unused fonts
// Spell check EVERYTHING

import styles from '../styles/home.module.css';
import { useContext } from 'react';
import { AppContext } from '../App';
import Menu from '../components/menu';
import Intro from '../components/intro';
import About from '../components/about';
import Footer from '../components/footer';
import Skills from '../components/skills';
import BlogList from '../components/bloglist';
import ProjectList from '../components/projectlist';

const Home = () => {

  const { showMenu } = useContext(AppContext);

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
      { showMenu && <Menu /> }
    </div>
  )
}

export default Home;

// Add appearing underline on some hover elements (blog buttons..)
// Add appearing menu from hamburger menu
// Remove unused fonts
// Spell check EVERYTHING
// Maybe fade navy into ivory
// Add what I learnt section to each project readme
// Get feedback on Reddit

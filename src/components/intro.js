import styles from '../styles/intro.module.css';
import Socials from './socials';
import Navbar from './navbar';

const Intro = () => {

  return (
    <div className={styles.intro}>
      <Navbar />
      <div className={styles.introContent}>
        <h1>Hi, I'm Frank | Software Developer</h1>
        <Socials />
        <span>I love developing and designing web applications. I'm a lifelong learner and I might have a thing for constitutional law</span>
      </div>
    </div>
  )
}

export default Intro;

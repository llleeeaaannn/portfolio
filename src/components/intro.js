import styles from '../styles/intro.module.css';
import Socials from './socials';
import Navbar from './navbar';
// import pdf from '../../public/FrankPierceCV.pdf'

const Intro = () => {

  return (
    <div className={styles.intro}>
      <Navbar />
      <div className={styles.introContent}>
        <h1>Hi, I'm Frank | Software Developer</h1>
        <h2>Hi, I'm Frank</h2>
        <h3>Software Developer</h3>
        <Socials style={styles.socials}/>
        <span>I love developing and designing web applications. I'm a lifelong learner and spend far too much time powerlifting.</span>
        <a className={styles.cv} href={'/FrankPierceCV.pdf'} target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
      </div>
    </div>
  )
}

export default Intro;

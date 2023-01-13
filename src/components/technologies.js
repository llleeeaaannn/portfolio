import styles from '../styles/technologies.module.css';

const Technologies = ({ data }) => {

  return (
    <div className={styles.technologies}>
    {
      data.map(item => (
        <span>{ item }</span>
      ))
    }
    </div>
  )
}

export default Technologies;

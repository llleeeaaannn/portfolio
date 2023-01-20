import styles from '../styles/projectpage.module.css';
import Technologies from './technologies';

const ProjectPage = ({ data }) => {

  return (
    <div className={styles.project}>
      <div className={styles.header}>
        { data.name && <h1 className={styles.name}>{data.name}</h1> }
        { data.live && <a href={data.live} rel="noopener noreferrer" target="_blank">Live Site</a> }
        { data.github && <a href={data.github} rel="noopener noreferrer" target="_blank">Source Code</a> }
      </div>

      <div className={styles.summary}>
        { data.technologies.length && <Technologies data={data.technologies}/> }
        { data.shortDescription && <p className={styles.description}>{data.shortDescription}</p> }
      </div>

      <div className={styles.largeImage}>
        { data.largeImage && <img alt={ data.largeImage }></img> }
      </div>

      { data.goals.length &&
        <div className={styles.goals}>
          <h2>Motivation & Goals</h2>
          {
            data.goals.map((line, i) => (
              <p key={i}>{ line }</p>
            ))
          }
        </div>
      }

      { data.general.length &&
        <div className={styles.general}>
          <h2>General Information</h2>
          {
            data.general.map((line, i) => (
              <p key={i}>{ line }</p>
            ))
          }
        </div>
      }

      { data.technical.length &&
        <div className={styles.technical}>
          <h2>Technical Summary</h2>
          {
            data.technical.map((line, i) => (
              <p key={i}>{ line }</p>
            ))
          }
        </div>
      }

      { data.screenshots.length &&
        <div className={styles.screenshots}>
          <h2>User Interface</h2>
          {
            data.screenshots.map((img, i) => (
              <img alt={ data.largeImage } key={i}></img>
            ))
          }
        </div>
      }

      { data.todo.length &&
        <div className={styles.todo}>
          <h2>To do</h2>
          <span>A few of the features I hope to integrate into {data.name} in the future:</span>
          <ul>
          {
            data.todo.map((line, i) => (
              <li key={i}>{ line }</li>
            ))
          }
          </ul>
        </div>
      }

    </div>
  )
}

export default ProjectPage;

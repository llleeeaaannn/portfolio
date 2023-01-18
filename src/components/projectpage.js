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
          <h2>Goals</h2>
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

      { data.features.length &&
        <div className={styles.features}>
          <h2>Features</h2>
          {
            data.features.map((line, i) => (
              <p key={i}>{ line }</p>
            ))
          }
        </div>
      }

      { data.screenshots.length &&
        <div className={styles.screenshots}>
          <h2>Screenshots</h2>
          {
            data.features.map((img, i) => (
              <img alt={ data.largeImage } key={i}></img>
            ))
          }
        </div>
      }

    </div>
  )
}

export default ProjectPage;

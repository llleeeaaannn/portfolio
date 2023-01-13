import { Link } from 'react-router-dom';
import styles from '../styles/projectoverview.module.css';
import Technologies from './technologies'

const ProjectOverview = ({ data }) => {

  return (
    <div className={styles.projectTab}>
      <div className={styles.overview}>
        { data.type &&
          <h4>{ data.type }</h4>
        }
        { data.name &&
          <Link className={styles.name} to={data.link}>{ data.name }</Link>
        }
        { data.technologies.length &&
          <Technologies data={data.technologies}/>
        }
        { data.shortDescription &&
          <p>{ data.shortDescription }</p>
        }
        <Link className={styles.button} to={data.link}>View Project</Link>
      </div>
      <div className={styles.image}>
        { data.image &&
          <img alt={ data.image }></img>
        }
      </div>
    </div>
  )
}

export default ProjectOverview;

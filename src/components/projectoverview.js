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
          <h3>{ data.name }</h3>
        }
        { data.technologies.length &&
          <Technologies data={data.technologies}/>
        }
        <Link to={data.link}>View Project</Link>
        { data.shortDescription &&
          <p>{ data.shortDescription }</p>
        }
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

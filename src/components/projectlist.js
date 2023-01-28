import styles from '../styles/projectlist.module.css';
import ProjectOverview from './projectoverview';
import { stockleData, spotlistData, optioncentData, scrollToTopData } from '../data/projectData';

const ProjectList = () => {

  return (
    <div className={styles.projectList}>
      <h2>Projects</h2>
      <ProjectOverview data={spotlistData}/>
      <ProjectOverview data={stockleData}/>
      <ProjectOverview data={optioncentData}/>
      <ProjectOverview data={scrollToTopData}/>
    </div>
  )
}

export default ProjectList;

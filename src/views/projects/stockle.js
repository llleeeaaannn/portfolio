import { useContext } from 'react';
import { AppContext } from '../../App';
import Menu from '../../components/menu';
import Navbar from '../../components/navbar';
import ProjectPage from '../../components/projectpage';
import { stockleData } from '../../data/projectData';

const Stockle = () => {

  const { showMenu } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <ProjectPage data={stockleData} />
      { showMenu && <Menu /> }
    </>
  )
}

export default Stockle;

import { useContext } from 'react';
import { AppContext } from '../../App';
import Menu from '../../components/menu';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ProjectPage from '../../components/projectpage';
import { optioncentData } from '../../data/projectData';

const Optioncent = () => {

  const { showMenu } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <ProjectPage data={optioncentData} />
      <Footer />
      { showMenu && <Menu /> }
    </>
  )
}

export default Optioncent;

import { useEffect, useContext } from 'react';
import { AppContext } from '../../App';
import Menu from '../../components/menu';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ProjectPage from '../../components/projectpage';
import { spotlistData } from '../../data/projectData';

const Spotlist = () => {

  const { showMenu } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Spotlist';
  }, []);

  return (
    <>
      <Navbar />
      <ProjectPage data={spotlistData} />
      <Footer />
      { showMenu && <Menu /> }
    </>
  )
}

export default Spotlist;

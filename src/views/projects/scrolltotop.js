import { useEffect, useContext } from 'react';
import { AppContext } from '../../App';
import Menu from '../../components/menu';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ProjectPage from '../../components/projectpage';
import { scrollToTopData } from '../../data/projectData';

const ScrollToTopPackage = () => {

  const { showMenu } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Scroll To Top';
  }, []);

  return (
    <>
      <Navbar />
      <ProjectPage data={scrollToTopData} />
      <Footer />
      { showMenu && <Menu /> }
    </>
  )
}

export default ScrollToTopPackage;

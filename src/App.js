import './styles/styles.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from 'scroll-to-top-react-router';
import Home from './views/home';
import NotFound from './views/notfound';
import Stockle from './views/projects/stockle';
import Medicle from './views/projects/medicle';
import Spotlist from './views/projects/spotlist';
import Optioncent from './views/projects/optioncent';

export const AppContext = React.createContext();

function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppContext.Provider value={{ showMenu, setShowMenu }}>
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/stockle' element={<Stockle />} />
          <Route exact path='/medicle' element={<Medicle />} />
          <Route exact path='/spotlist' element={<Spotlist />} />
          <Route exact path='/optioncent' element={<Optioncent />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </ScrollToTop>
    </AppContext.Provider>
  );
}

export default App;

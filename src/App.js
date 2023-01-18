import './styles/styles.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stockle' element={<Stockle />} />
        <Route path='/medicle' element={<Medicle />} />
        <Route path='/spotlist' element={<Spotlist />} />
        <Route path='/optioncent' element={<Optioncent />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;

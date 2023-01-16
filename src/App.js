import './styles/styles.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home';
import NotFound from './views/notfound';
import Stockle from './views/projects/stockle';

export const AppContext = React.createContext();

function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppContext.Provider value={{ showMenu, setShowMenu }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stockle' element={<Stockle />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;

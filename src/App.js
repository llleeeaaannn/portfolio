import './styles/App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Projects from './views/projects';
import NotFound from './views/notfound';

export const AppContext = React.createContext();

function App() {


  return (
    <AppContext.Provider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;

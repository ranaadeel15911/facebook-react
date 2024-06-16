import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Privacypolicy from './Privacypolicy';
import Datadeletion from './Datadeletion';
import Home from './Home';


function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/privacy-policy' element={<Privacypolicy/>}/>
      <Route path='/data-deletion' element={<Datadeletion/>}/>
    </Routes>
  );
}

export default App;

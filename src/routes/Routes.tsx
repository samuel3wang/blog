import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Inside from '../components/Inside';
import Outside from '../components/Outside';
import HomePage from '../components/Home';
import AboutPage from '../components/About';

const Application = () => {
    return (         
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/qq' element={<AboutPage/>} />
          <Route path='/aa' element={<Inside/>} />
          <Route path='/topics' element={<Outside/>} />
        </Routes>
      </BrowserRouter>
    );
}
export default Application;
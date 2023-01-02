import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import HomePage from '../components/Home';
import AboutPage from '../components/About';

const Application = () => {
    return (         
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </BrowserRouter>
    );
}
export default Application;
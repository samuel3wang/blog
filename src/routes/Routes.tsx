import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Inside from '../components/Inside';
import HomePage from '../components/Home';
import AboutPage from '../components/About';

const Application = () => {
    return (         
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/qq' element={<AboutPage/>} />
          <Route path='/aa' element={<Inside/>} />
        </Routes>
      </BrowserRouter>
    );
}
export default Application;
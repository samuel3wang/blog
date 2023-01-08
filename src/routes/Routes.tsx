import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import HomePage from '../components/Home';
import Notes from '../components/Notes';
import Categories from '../components/Category/Categories';

const Application = () => {
    return (         
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/:category' element={<Categories/>} />
          <Route path='/note' element={<Notes/>} />
        </Routes>
      </BrowserRouter>
    );
}
export default Application;
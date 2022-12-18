import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inside from '@/components/Inside.tsx';
import Outside from '../components/Outside';
//import App from '../App';

const App = () => {
    return (         
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/aa' element={<Inside/>} />
        <Route path='/topics' element={<Outside/>} />
      </Routes>
    );
}
export default App;
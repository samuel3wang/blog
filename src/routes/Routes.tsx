import React from 'react'
import { useRoutes } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Inside from '../components/Inside';
import Outside from '../components/Outside';

const Routes = () => {
    return (         
        <Routes>
          <Route path='/aa' element={<Inside/>} />
          <Route path='/topics' element={<Outside/>} />
        </Routes>
    );
    }
export default Routes;

// function App() {
//   let element = useRoutes([
//     { path: "/a", element: <Inside /> },
//   ]);

//   return element;
// }
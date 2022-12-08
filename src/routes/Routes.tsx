import React from 'react'
import { useRoutes } from "react-router-dom";
import Inside from '../components/Inside';

function App() {
  let element = useRoutes([
    { path: "/", element: <Inside /> },
  ]);

  return element;
}
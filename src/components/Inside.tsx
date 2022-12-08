import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';

function Inside() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>  
    </div>
  )
}

export default Inside
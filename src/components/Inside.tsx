import reactLogo from './assets/react.svg'
import Button from '@mui/material/Button';
import { fchmod } from 'fs';

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

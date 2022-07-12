import './App.css';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Lock from './lock.svg'

import { Typography } from '@mui/material';
// import Lock from './lock.svg'
// import LockOpenIcon from '@mui/icons-material/LockOpen';

function App() {
  return (
    <div className="App">
      <Container className='container-1'>
       <div className='first-div'>
         <div className='cont-1'>
          {Lock}
         </div>
         <div className='cont-2'>
         <div className='div2'>
          <p>Security</p>
          <p>End-to-end security</p>
          <h3>
            Get peace of mind with our strong security 
            systems and our trusted partners
          </h3>
         </div>
         <div className='buttons'>
          <ButtonGroup>
            <Button variant = "contained">
              Get it on Google play

            </Button>
            <Button variant = "contained">
            Download on app store

            </Button>
          </ButtonGroup>
         </div>
         </div>
        </div>
      </Container>
      <Container>
        <></>
      </Container>
    </div>
  );
}

export default App;

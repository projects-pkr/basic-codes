import React from 'react';
import Button from '@mui/material/Button';
import { BrowserRouter,Routes,Route,} from 'react-router-dom';
export default function Intro_route() {
  return (
    <>
       
      <Button variant="contained" color="success">Homepage</Button>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<h3>this is apear by router</h3>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

//-------------------- installation ---------------------------------------------------
// to use router in react we need to instll router packege in react 
// to install go to root directory where we want to install router.then write command
// npm i -D react-router-dom
// after it npm install router in react 
// to check  is router installed successfully go to packege.json
// and here find dependency of router and router version.
// ------------------------ end -------------------------------------------------------
{/* <BrowserRouter>
      <Routes>  --> it is a wrapper  for Route to render route element
        <Route path="*" element={#} />
        * here path is target element where we click to access some target
        # element denote targeted element we want to apear on action 
      </Routes>
      </BrowserRouter> */}
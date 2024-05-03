import React from 'react';
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';

// import Linkpage from './linkpage';
import Home from './home_page_for_routing';
import About from './about_page _for_linkpage';
import Error_page from './Error_page';
import Navebar from './Navbar';
export default function Route_linking() {
  return (
    //------------------------note-------------------
    // BrouserRouter section is always  written in app.jsx bt to saperation we create a new page in this example we demostrate en example so we create a new expliciaatly page  to demostrate router
    // in link to="----" and route path ="----" must be same 
          // <Route path="--*---contact" element={-----#-----<Contact/>} />
          // <Link to="/---*----contact">Contact</Link>

          // here ----*---- route path and lnk to is same and
          // ----#----- is function name we want to connect with link 

    // ----------------------end-------------------------- 
    <BrowserRouter>
      {/* <Linkpage/> */}
      <Navebar/>
  
      
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<Error_page/>}/>
      {/* in this line- <Route path="*" element={<Error_page/>}/>
       route path="*"  or ""/* means any type of error occaur in our page error page will be show in browser 
        * here we use "navigate to" in place of error_page */}
      {/* <Route path='/*' element={< Error_page/>}/> */}
      <Route path='*' element={<Navigate to="/" />} /> 
      {/*[  <Route path='*' element={<Navigate to="/" />} />  ] - this line is written to demonstrate when we click in link router route to root page       */}
      </Routes>
    </BrowserRouter>
  );
}

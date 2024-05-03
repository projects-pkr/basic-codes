import React from 'react';
// import Intro_route from './Practice_comp/Routsbasic';

import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
// import Linkpage from './Practice_comp/linkpage';

import Home from './Practice_comp/Link_pages/home_page_for_routing';
import About from './Practice_comp/Link_pages/about_page _for_linkpage';
import Error_page from './Practice_comp/Link_pages/Error_page';
import Contact from './Practice_comp/Link_pages/Contact_page';
 import Navbar from './Component/Navbar';
 import Card_button from './Component/Card_button';
import Nested_page from './Practice_comp/Link_pages/nested_page';
import Login_page from './Practice_comp/Link_pages/Login_page';
function App() {
  return (
    <>
      {/* <Intro_route/> */}
      

      <BrowserRouter>
        {/* <Linkpage />  */}
         <Navbar/> 
        <Card_button/>
    <Nested_page/>
    <Login_page/>
 <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact/" element={<Contact />} />
          <Route path="/Nested_page" element={<Nested_page />} />

          {/* <Route path="*" element={<Error_page />} /> */}
          <Route path='*' element={<Navigate to="/" />} />
          <Route path='Login' element={<Navigate to="/Login_page" />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;

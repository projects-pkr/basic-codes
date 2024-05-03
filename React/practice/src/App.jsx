import React from "react";
import Navbar from "./bootstrap_com/props";
import State from "./bootstrap_com/State";
import Text_method from "./bootstrap_com/textmethod";
import './bootstrap_com/darkmode.css';
import Darkmode from "./bootstrap_com/darkmode";
import Dakmodeswitch from "./bootstrap_com/dakmodeswitch";
import State from "./Basic_Practice/State";
import Demonstrate_pros from "./Basic_Practice/Props";
import Input from "./Basic_Practice/input";
import Toggle from "./Basic_Practice/Toggle";
import funcprops from "./Basic_Practice/function props";
import Controle_render from "./Basic_Practice/Useeffect";
import Maploop from "./Basic_Practice/Map";
import Nested_listitem from "./Basic_Practice/nestedlist";


function App() {
 
  return (
    <>
     <Navbar contact="contact us"/> 
     <State title="enter any text or word"/>
     <Text_method/> 
     <Darkmode/> 
   <Dakmodeswitch/> 
   <State/> 
   <Demonstrate_pros name="propname" mo="123"/> 
 <Input/> 
 <Toggle/> 
 <funcprops/> 
 <Controle_render/> 
 <Maploop/> 
 <Nested_listitem/> 



{/*---------------------------------- comment notes ------------------------------------------------------
   we can write any code here but this type of coding is make our code complex and this is not easer to handle so we creat explictly components and import in this page(app.jsx) just like at the top of page (import First from "./components/first").
   Here we return all component in serial wise as we like to show in webpage. component are apear on screen by serial wise here we arrange in return setion of (app.jsx).import dosen't matter. 
   * we need add function inside fragment(<>) also like this- <First/>
    --------------------------------
    <h1>
    this is my first page in react written in app.js directly
   </h1>
   ---------------------------------
    ------------------------------------------- End comment --------------------------------------------------*/}
  </>
  
  )
}

export default App;

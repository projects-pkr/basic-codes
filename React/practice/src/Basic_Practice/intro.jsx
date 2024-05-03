
//import React from "react"; is optional to write in our code beacause main.jsx already import react library.

function Introduction() {
    return(
<>
<div>This is introduction page </div>
</>
    )
} 

export default Introduction; 
{/* 
Tips:-
1) export default First;:- here we export function to app.jsx
2) <> </> or <fragment></fragment> :- Here is is a fragment tag in react 
3) we need to import this function with path in app.jsx file 
4) in plase of default we can write like this:- import {Introduction }from './components/intro';
   in app.jsx file 
*/}
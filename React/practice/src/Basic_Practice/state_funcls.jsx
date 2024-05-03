import React from "react";
import { useState } from "react";
//defination of state:-The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes without page reloading, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.  
function Btn() {
   
    let [name, latestName] = useState("ram");

    function clickbtn() {
    latestName("shyam");
        
    }

    return (
        <>
            <div>
                <h2>{name}</h2>
                <button onClick={clickbtn}>click me</button>
            </div>
        </>
    );
}

export default Btn;
//------------------ increament button -------------------------------------------
// function Btn() {
   
// let [data, latestdata] = useState(0);

// function clickbtn() {
// latestdata(data+1);
    
// }

// return (
//     <>
//         <div>
//             <h2>{data}</h2>
//             <button onClick={clickbtn}>click me</button>
//         </div>
//     </>
// );
// }

// export default Btn;

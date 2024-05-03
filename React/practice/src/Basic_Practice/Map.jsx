import React from 'react';

export default function Maploop() {
    let name = ["ram", "shyam", "raju", "ramu", "raja"];
    name.forEach(item => {
        console.log("this name is:", item);
    });
    
    return (
        <>
            <h1>this is a map function</h1>
        </>
    );
}

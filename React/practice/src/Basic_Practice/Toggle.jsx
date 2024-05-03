import React, { useState } from 'react';

export default function Toggle() {
    const [mode, setmode] = useState(true);
    function visiblity(){
        setmode(!mode)
    }
return (
        <>
            <div className="container" style={{ backgroundColor: "grey", border: "1px solid red", height: "10rem" }}>
                {mode && (
                    <div className="inner" style={{backgroundColor:"blue"}}>
                     <p>
                        This is a div that demonstrates show or hide on click.
                    </p>
                    </div>
                   
                )}
            </div>
            <button onClick={visiblity}>Click me</button>
        </>
    );
}

import React from 'react';
import { useState } from 'react';

function Darkmode() {
    const [mode, setMode] = useState({ color: "black", backgroundColor: "white" });

    function enableDark() {
        setMode({ color: "rgb(251, 255, 234)", backgroundColor: "rgb(52, 48, 48)" });
    }
    function defaultmode(){
        setMode({ color: "black", backgroundColor: "white" });
    }

    return (
        <>
            <div className='targetdiv' style={{ color: mode.color, backgroundColor: mode.backgroundColor }}>This is a div</div>
            <button onClick={enableDark} onDoubleClick={defaultmode}>Click here to enable dark mode double click to default mode</button>
        </>
    );
}

export default Darkmode;


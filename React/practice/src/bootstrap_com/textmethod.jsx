import React from 'react';
import { useState } from 'react';
//here usestate is  a hook in react it provide ability to use feature of class component without using class 
function Text_method(props) {
    // Define state variables text and setText
    const [text, setText] = useState("Enter text here");

    // Handler function for updating text state from text to set text
    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    // Handler function for button click
    const handleClick = () => {
        let final_text=text.toUpperCase()
        setText(final_text)
       
    }
    const handlelower = () => {
        let final_text=text.toLowerCase()
        setText(final_text)
       
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
      }

    return (
        <>
        <div className="container">
            <div className="mb-3">
                <label htmlFor="text_area" className="form-label">{props.title}</label>
                <textarea className="form-control"id="text_area"value={text} onChange={handleTextChange}rows="3">
                     </textarea>
             {/* here this method is Capture textarea  updated value */}
            </div>
            <button onClick={handleClick}>Click uppercase</button>
            <button onClick={handlelower}>Click lowerercase</button>
            <button onClick={handleCopy}>Click to copy</button>
        </div>
        <div>
            <h1>Detail of text you entered</h1>
            <p><span>{text.split(" ").length}</span>Words and <span>{text.length}</span> Text in above box</p>
            
        </div>
        </>
        
    );
}

export default Text_method;

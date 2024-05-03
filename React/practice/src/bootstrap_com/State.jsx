import React from 'react';
import { useState } from 'react';
//here usestate is  a hook in react it provide ability to use feature of class component without using class 
function State(props) {
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

    return (
        <div className="container">
            <div className="mb-3">
                <label htmlFor="text_area" className="form-label">{props.title}</label>
                <textarea
                    className="form-control"
                    id="text_area"
                    value={text}
                    onChange={handleTextChange} // here this method is Capture textarea  updated value
                    rows="3"
                ></textarea>
            </div>
            <button onClick={handleClick}>Click here</button>
        </div>
    );
}

export default State;

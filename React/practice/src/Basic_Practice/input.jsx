import React, { useState } from 'react';

export default function Input() {
  const [data, setData] = useState("");
  const [submittedData, setSubmittedData] = useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedData(data);
  };

  
  return (
    <div>
      <div>
        {submittedData}
        </div>
      <label htmlFor="name">Enter your name:</label>
      <input type="text" id='name' placeholder='Enter your name' onChange={handleChange}/>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

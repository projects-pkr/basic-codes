import React from 'react'
import { useState } from 'react'
export default function State() {
   let [name,setname]=useState("my name")
   function Click(){
    setname("my updated name")
   }
  return (
    <div>
        <h1>my name is:- {name}</h1>
        <button onClick={Click}>Click Me</button>
      
    </div>
  )
}

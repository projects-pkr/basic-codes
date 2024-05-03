import React from 'react'

export default function funcprops() {
    function callfun(){
        alert("this is a function")
    }
  return (
    <>
    <div className="container">

    </div>
    <button onClick={callfun}>Click me</button>
    </>
  )
}

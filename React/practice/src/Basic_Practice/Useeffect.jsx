import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export default function Controle_render() {
  let[data,setdata]=useState(10)
  let [value,setvalue]=useState(10)
function con_data(){
  setdata(data+1);
}
function con_val(){
  setvalue(value+1)
}
// -----------------------------------------
// syntax
// useEffect(()=>{},[dependency])
// here 
// -----------------------------------------
  // useEffect(()=>{
    //  {
      // setdata(data)}
  // })
//  useEffect(()=>{
//    console.log("useEffect called")
//   if (data==20) {
//          setdata(data+1)}
// },[data,value])
// useEffect(()=>{
//   if (data===20) {
//     setdata(data=1)}
// })
  return (
    <div>
      <h2>Cart value:-{data} </h2>
      <h3>This is a Value:-{value} </h3>
      <button onClick={con_data}>add item</button>
      <button onClick={con_data}>add item</button>
    </div>
  )
}

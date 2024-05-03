import React, { useEffect } from 'react'
import useNavigate from 'react-router-dom'
export default function Protected_route() {
    let {component}=props

let vanigate =useNavigate();

    useEffect=>{
        let login =localStorage.getItem(login)
        if (!login){
            navigate('/login_page')
        } {
            
        }

    }
  return (
   <>
   
   </>
  )
}

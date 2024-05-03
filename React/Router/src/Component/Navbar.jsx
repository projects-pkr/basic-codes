import React from 'react'
import {Box,Typography} from '@mui/material'
import {NavLink}  from 'react-router-dom'
export default function Navbar() {
  return (
   <>
   <Box>
    <Typography variant="body1" color="initial">Navbar</Typography>
    <ul className='nav_content'>
      <li><NavLink to="/Home">Home</NavLink></li>
      <li><NavLink to="/About">About</NavLink></li>
      <li><NavLink to="/Contact">Contact</NavLink></li>
      <li><NavLink to="/">Info</NavLink></li>

    </ul>

   </Box>
   </>
  )
}

// Notes:- using Link  when  we use classname browser may give error so we use Navlink in place of link because link nneed styling on webpage
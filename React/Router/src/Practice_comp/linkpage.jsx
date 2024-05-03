import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material'
export default function Linkpage() {
  return (
    <>
      <Box sx={{ height:'10vh', width:'100vw', display:'flex',justifyContent:'space-evenly'}}>
        <Button variant="outlined">
          <Link to="/Home">Click here to go to Home</Link>
        </Button>
        <Button variant='outlined'>
          <Link to="/About">Click here to go about page</Link>
</Button>
        <Button variant='outlined'>
          <Link to="*">Click here to go contact page;</Link>
          {/* Tip:- here  this link was not defined so it is an error */}
        </Button>
      </Box>

    </>
  )
}

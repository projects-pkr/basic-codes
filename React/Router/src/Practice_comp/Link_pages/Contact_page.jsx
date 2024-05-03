import React from 'react';
import {Box,Typography} from '@mui/material'
import { Link,useLocation} from 'react-router-dom';

export default function Contact() {
  let hook=useLocation();
  console.log(hook);
  return (
   <>
   <Box>
    <Typography variant="h5" color="warning">This page is contact page </Typography>
    <Typography color="success">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni omnis sint provident quis voluptates quod, commodi minus in dolorum repellendus.</Typography>
   <Link to="Nested_page">go to next child page</Link>
   </Box>

   </>
  )
}

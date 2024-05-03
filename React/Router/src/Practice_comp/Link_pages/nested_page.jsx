import React from 'react'
import {Box,Typography,Button} from '@mui/material'



export default function Nested_page() {
  return (
   <>
   <Box>
    <Typography variant="h5" color="initial">This page demonstrate nested routing </Typography>
    <Typography color="initial"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita neque exercitationem perspiciatis eius corporis nemo eligendi accusantium in deleniti natus incidunt aspernatur alias a est nulla at cumque mollitia, ab quia voluptates facilis, quis fuga beatae eos. Reprehenderit, illum accusamus!</Typography>
    <Button variant="outlined" color="success">
      click here
    </Button>
   </Box>
   </>
  )
}

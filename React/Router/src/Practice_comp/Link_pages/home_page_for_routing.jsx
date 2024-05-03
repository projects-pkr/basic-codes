import React from 'react'
import {Box,Typography} from '@mui/material'
export default function Home() {
  return (
    <>
       <Box component="section" sx={{ p: 2, border: '1px dashed black' }}>
        <Typography variant="h3"> This page is Home page</Typography> 
        <Typography variant='h6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, ratione sunt? Odit quos obcaecati repudiandae magnam temporibus voluptatum delectus aperiam.
        </Typography>
    </Box>
    </>

  )
}

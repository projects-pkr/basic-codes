import React from 'react'
import {Box,Typography} from '@mui/material'

export default function Login_page() {
  return (
   <> 
   <Box>
<Typography variant="h5" color="initial">login here</Typography>
   <input type="text" placeholder=' username'/>
   <input type="text" placeholder='pasword' />
   <button>login</button>
   </Box>
   </>
  )
}

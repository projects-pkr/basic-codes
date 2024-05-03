import React from 'react'
import { Box, Typography } from '@mui/material'
export default function Page_one() {
    return (
        <>
            <Box sx={{
                height: '60vh',
                width: "100vw",
                backgroundImage: "url('/public/Images/background.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
               
               
               
            }}>
            
              <Box > <Typography variant="h3" color="primary" style={{padding:'30px'}} >
                    This is a box and it contain a slider(carousel)
                </Typography>
                </Box> 
                
                <Box sx={{width:{xl:"30rem",xs:"10rem"},height:{xl:"15rem",xs:"5rem"}, border:"2px solid red", marginLeft:{xl:"3rem",xs:"4rem",marginTop:{xl:"opx",xs:"10rem"}}}}>
                    <Typography  color="primary">this is a slider</Typography>
                </Box>
            </Box>
        </>
    )
}

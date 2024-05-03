import React from 'react'
import { Box } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Page_two() {
  return (
   <>
   <Box  sx={{width:"100vw", height:"40vh", marginTop:{xl:'-50px',md:"10px"},display:'flex',flexDirection:{xl:"row",xs:"column"},justifyContent:"space-evenly",alignItems:"center"}}
  
  
   >
    {/* ----------------card-1----------------------- */}
  <Box sx={{border:'1px solid grey',borderRadius:"10px",boxShadow:"1px 2px 5px  black", marginTop:{xl:"0px",xs:"50px"}}}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{border:'1px dashed grey'}}>
        <CardMedia
          component="img"
          height="160"
          image="/public/icons/benifit-1.png.webp"
          alt="green iguana"
        />
        <CardContent>
           
                 
        </CardContent>
        
      </CardActionArea>
      <Typography gutterBottom variant="h5" component="div" style={{marginTop:"20px"}}>
           No Upfront Payments
          </Typography>
    </Card>
  </Box>
  {/* ----------------card-2 ------------------------*/}
  <Box sx={{border:'1px solid grey',borderRadius:"10px",boxShadow:"1px 2px 5px  black",marginTop:{xl:"0px",xs:"50px"}}}>
  <Card sx={{ maxWidth: 345 }}>
  <CardActionArea style={{border:'1px dashed grey'}}>
        <CardMedia
          component="img"
          height="160"
          image="/public/icons/benifit-2.png.webp"
          alt="green iguana"
        />
        <CardContent>
         
                 
        </CardContent>
      </CardActionArea>
      <Typography gutterBottom variant="h5" component="div">
            Satisfaction Guarantee
          </Typography> 
    </Card>
  </Box>
  {/* -----------------card-3------------------- */}
  <Box sx={{border:'1px solid grey',borderRadius:"10px",boxShadow:"1px 2px 5px  black",marginTop:{xl:"0px",xs:"50px"}}}>
  <Card sx={{ maxWidth: 345 }}>
  <CardActionArea style={{border:'1px dashed grey'}}>
        <CardMedia
          component="img"
          height="160"
          image="/public/icons/benifit-3.png.webp"
          alt="green iguana"
        />
        <CardContent>
         
                 
        </CardContent>
      </CardActionArea>
      <Typography gutterBottom variant="h5" component="div">
            Emargency Service
          </Typography> 
    </Card>
  </Box>
  {/* ----------------card-4----------------------- */}
  <Box sx={{border:'1px solid grey',borderRadius:"10px",boxShadow:"1px 2px 5px  black",marginTop:{xl:"0px",xs:"50px"}}}>
  <Card sx={{ maxWidth: 345 }}>
  <CardActionArea style={{border:'1px dashed grey'}}>
        <CardMedia
          component="img"
          height="160"
          image="/public/icons/benifit-4.png.webp"
          alt="green iguana"
          
          
        />
        <CardContent>
          
                 
        </CardContent>
      </CardActionArea>
      <Typography gutterBottom variant="h5" component="div">
           8 Years Experience
          </Typography> 
    </Card>
  </Box>
    </Box>

  

   </>
  )
}

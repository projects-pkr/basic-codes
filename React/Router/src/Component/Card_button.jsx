import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function Card_button() {
    let btn_one=useNavigate();  
    //-------------------- {here we use - usenavigate hook of router to navigate in onclick action and we can use any type of condition also}
    // for example:-   let Navfunction=()=>{
    //   let x=true;
    //   if (x){
    //     navigate('/About')
    //   } 
    //   else{
    //     Navigate('/Home')
    //   } 
    // and call function in onclick like :- <Button  onClick={()=> Navfunction()} -----------------------------------     
    
    let btn_two=useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=> btn_one('/Home')} size="small">Back to home</Button>
        <Button  onClick={()=>btn_two('/About')}size="small">Learn More About this</Button>
      </CardActions>
    </Card>
  );
}

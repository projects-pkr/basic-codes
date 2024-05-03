import React from 'react';
import './About_consultancy.css'
import { Box, Typography, Grid } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function AboutConsultancy() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid
          item
          xl={6}
          md={8}
          xs={12}
          sx={{

            fontFamily: "Poppins",
            marginLeft: { xs: '0rem', md: '6rem', xl: '12rem' },
            marginTop: { xs: '5rem', md: '8rem', xl: '5rem' }     

          }}
        >
          <item>
            <Box className="textbox">
              <Typography style={{ color: "red", fontWeight: "600", fontSize: "12px",fontFamily:"poppins" }}>
                ABOUT CONSULTANCY
              </Typography>
              <Typography variant="h2" style={{
                //  height: "136px",
              //  width:{xl:"650px",md:"400px",xs:"300px"} ,
               fontSize: "36px",
               fontWeight: "700",
               fontFamily:"poppins" 
               }}>
                Welcome to your first step towards financial empowerment and achieve financial freedom
              </Typography>
              <Typography style={{
                
                //  height: "200px",
              //  width: {xl:"650px",md:"400px",xs:"300px"} ,
               fontFamily:'poppins',color: "#687076",fontSize:"14px",paddingRight:"24px" }}>
                I am committed to helping individuals and families achieve their dreams through comprehensive financial education, meticulous planning, and tailored solutions. My mission is to demystify the complex world of finance, making it accessible and manageable for everyone. I believe in growing together, which is why we are focusing on expanding our reach through strategic partnerships and offering coaching opportunities with minimal startup costs. Whether you're seeking expert advice to navigate your financial journey or you're a driven professional looking to make a significant impact in the financial sector, I am here to guide and collaborate with you. Join us in our mission to transform aspirations into achievements.
                <a href="#" style={{ color: "red" }}>Read More</a>
              </Typography>

            </Box>
            <Grid container spacing={1} sx={{ marginTop: "20px" }}>
              <Grid item={6} sx={{ height: "100px" }}>
                <ul >
                  <li style={{ listStyle: "none", marginTop: "5px", color: "#687076", fontSize: "14px" }}><ArrowCircleRightIcon sx={{ color: "red", fontSize: "18px", }}></ArrowCircleRightIcon> Worry Free – No cost consultation</li>
                  <li style={{ listStyle: "none", marginTop: "5px", color: "#687076", fontSize: "14px" }}><ArrowCircleRightIcon sx={{ color: "red", fontSize: "18px" }}></ArrowCircleRightIcon>Personalized and detailed analysis</li>
                  <li style={{ listStyle: "none", marginTop: "5px", color: "#687076", fontSize: "14px" }}><ArrowCircleRightIcon sx={{ color: "red", fontSize: "18px" }}></ArrowCircleRightIcon>Insightful and customized solutions</li>
                </ul>
              </Grid>
              <Grid item={6}>
                <ul>
                  <li style={{ listStyle: "none", marginTop: "5px", color: "#687076", fontSize: "14px" }}><ArrowCircleRightIcon sx={{ color: "red", fontSize: "18px" }}></ArrowCircleRightIcon>Low-cost start-up opportunity</li>
                  <li style={{ listStyle: "none", marginTop: "5px", color: "#687076", fontSize: "14px" }}><ArrowCircleRightIcon sx={{ color: "red", fontSize: "18px" }}></ArrowCircleRightIcon>Worldclass mentorship and coaching</li>
                  <li style={{ listStyle: "none", marginTop: "5px", color: "#687076", fontSize: "14px" }}><ArrowCircleRightIcon sx={{ color: "red", fontSize: "18px" }}></ArrowCircleRightIcon>Best opportunities and environment to succeed </li>
                </ul>
              </Grid>
            </Grid>
            <Grid container spacing={5} sx={{ marginTop: { xl: "5px", md: "3px", xs: "2px" } }}>
              <Grid item sx={6}>
                <item>

                  <Box sx={{ display: "flex" }}><img src="/public/Images/about-sign.png" alt="sign" style={{ height: "80px", width: "100px", marginRight: "15px" }} />
                    <Box>
                      <Typography variant='h6' style={{ fontWeight: "700",fontFamily:"poppins" }}> Giri Lankipalle</Typography>
                      <Typography style={{ fontSize: "14px", color: "#687076" }}>Financial Professional</Typography>
                    </Box>
                  </Box>

                </item>
              </Grid>

              <Grid item sx={6}>
                <item>
                  <Typography variant='h6' style={{ fontWeight: "700" }}>201 606 3949</Typography>
                  <Typography style={{ fontSize: "14px", color: "#687076" }}>Call for any questions.</Typography>
                </item>
              </Grid>

            </Grid>
          </item>
        </Grid>
        {/* ------------second grid -------------------------------------*/}
        <Grid item={6}>
          <Box  sx={{
          height: "100%",width: "100%",border: "1.5px solid rgb(232, 236, 239)", backgroundColor: "white",marginTop: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",        
          boxSizing: "border-box" 
        }}
      >
            <img src="/public/Images/single-img-one.jpg" alt="single-img-one.jpg" style={{ height: "580px", width: "450px", maxWidth: "100%" }} />
          </Box>
        </Grid>


      </Grid>

    </>
  );
}
// this is finally ok
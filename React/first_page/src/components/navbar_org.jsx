import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Appbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box >
      <AppBar position="static" style={{ height: '15vh', backgroundColor: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Toolbar>
          <Box>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </Box>
          <Box sx={{ height: '15vh', width: '60vw', display: 'flex', justifyContent: "space-around", alignItems: 'center' }}>
            <Box sx={{ marginLeft: '5px' }}>
              <ul style={{ display: 'flex', listStyleType: 'none' }}>
                <li style={{ marginRight: '20px', fontWeight: 'bolder', fontFamily: 'sans-serif' }}>HOME</li>
                <li style={{ marginRight: '20px', fontWeight: 'bolder', fontFamily: 'sans-serif' }}>ABOUT</li>
                <li style={{ marginRight: '20px', fontWeight: 'bolder', fontFamily: 'sans-serif' }}>SHOP</li>
              </ul>
            </Box>
            <Box sx={{width:'150px',display:'flex',flexDirection:'column'}}>
              

<Box sx={{ width: '150px', height: '150px', backgroundImage: "url('/public/Images/logoHVAC.png')", backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition: 'center' }}>
            </Box>
                <Box sx={{width:'0px',height:"0px",borderLeft:"76px solid transparent",borderRight:"76px solid transparent",borderTop:"46px solid black", marginTop:'1px'}}> </Box>
              
          </Box>

          <Box sx={{ display: "flex", alignItems: 'center', }}>
            <ul style={{ display: 'flex', listStyleType: 'none' }}>
              <li style={{ marginLeft: '20px', fontWeight: 'bolder', fontFamily: 'sans-serif' }}>
                PAGES
                <IconButton
                  size="small"
                  aria-label="dropdown"
                  aria-controls="pages-menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                >
                  <ArrowDropDownIcon />
                </IconButton>
                <Menu
                  id="pages-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>Services</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Cart</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Checkout</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Wishlist</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Product Details</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Blog Details</MenuItem>
                </Menu>
              </li>
              <li style={{ marginLeft: '20px', fontWeight: 'bolder', fontFamily: 'sans-serif' }}>NEWS</li>
              <li style={{ marginLeft: '20px', fontWeight: 'bolder', fontFamily: 'sans-serif' }}>CONTACT</li>
            </ul>
          </Box>
        </Box>

        <Button variant="outlined" color="warning" style={{ border: '3px solid yellow', marginLeft: '5rem' }}>
          <Typography variant="h5" color="primary">1-688-688-94</Typography>
        </Button>
      </Toolbar>
    </AppBar>
    </Box >
  );
}

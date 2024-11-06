"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const drawerItems = [
    { name: 'HOME', endpoint: '/' },
    { name: 'ABOUT US', endpoint: '/about' },
    { name: 'LEARN CHESS', endpoint: '/learnchess' },
    { name: 'TOURNAMENTS', endpoint: '/tournament' },
    { name: 'Leaderboard', endpoint: '/leaderboard' },
    { name: 'Register', endpoint: '/register' },
    { name: 'Login', endpoint: '/login' },
    { name: 'Help', endpoint: '/help' },
    { name: 'Forum', endpoint: '/forum' },
  ];
  
  const DrawerList = (
    <Box
      sx={{ width: 250, paddingTop: '10vh',margin:"1rem", backgroundColor: 'black' }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {drawerItems.slice(0, 4).map((item) => (
          <ListItem
            key={item.name}
            className="transition duration-500 mt-2 ease-in-out hover:bg-black hover:text-red-600"
            disablePadding
          >
            <Link href={item.endpoint} passHref>
                <ListItemText className="font-bold" primary={item.name} />
            </Link>
          </ListItem>
        ))}
      </List>
      
      <Divider color="error" />
      
      <List>
        <ListItem
          key={drawerItems[4].name}
          className="transition duration-500 ease-in-out mt-2 hover:bg-black hover:text-red-600"
          disablePadding
        >
          <Link href={drawerItems[4].endpoint} passHref>
              <ListItemText primary={drawerItems[4].name} />
          </Link>
        </ListItem>
      </List>
    
      
      <List>
        {drawerItems.slice(5).map((item) => (
          <ListItem
            key={item.name}
            className="transition duration-500 ease-in-out mt-2 hover:bg-black hover:text-red-600"
            disablePadding
          >
            <Link href={item.endpoint} passHref>
                <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  


  return (
    <div>
      <Box sx={{ flexGrow: 1}}>
        <AppBar 
          position="fixed" 
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 0px 5px black',
            zIndex: (theme) => theme.zIndex.drawer + 1 ,
            width:"98vw",
            borderRadius:"50px",
            margin:"2vh 1vw",
          }} // AppBar above Drawer
        >
          <Toolbar>
            <IconButton
              onClick={open? toggleDrawer(false) :toggleDrawer(true)}
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box className="w-full" sx={{ textAlign: 'center' }}>
            <Typography
  variant="h6"
  sx={{
    display: 'inline-block',
    fontWeight: 'normal',
    color: 'black',
    fontWeight:800,
    position: 'relative',
    padding: '0.1em 0.3em',  // Adjust padding as desired
    textShadow:"0px 0px 2px white"
  }}
>
  CHECKMATE
</Typography>
    
        </Box>
            <Button color="primary" className="font-bold">
            <Link href="/login" passHref>
                 Login
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background:'black',
            color : 'white' // Ensures Drawer contents start below the AppBar
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Nav;

// import React, { useState } from 'react';
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   Button,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Divider,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// const Nav = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   // Toggle drawer open/close
//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   // Drawer content
//   const drawerContent = (
//     <Box
//       sx={{
//         width: 250,
//         height: '100%',
//         backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect for drawer
//         backdropFilter: 'blur(10px)', 
//         color: 'white',
//       }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {['Home', 'About Us', 'Learn Chess', 'Tournaments'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemText primary={text} sx={{ color: 'white', fontWeight: 'bold' }} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
//       <List>
//         {['Contact', 'Settings'].map((text) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemText primary={text} sx={{ color: 'white', fontWeight: 'bold' }} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       {/* Navbar with glassy effect */}
//       <AppBar
//         position="fixed"
//         sx={{
//           backgroundColor: 'rgba(255, 255, 255, 0.1)',
//           backdropFilter: 'blur(10px)',
//           boxShadow: 'none',
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer(true)}
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1, color: 'white', fontWeight: 'bold' }}>
//             CHECKMATE
//           </Typography>
//           <Button color="inherit" sx={{ fontWeight: 'bold' }}>
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer with matching glassy effect */}
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={toggleDrawer(false)}
//         sx={{
//           '& .MuiDrawer-paper': {
//             backgroundColor: 'rgba(255, 255, 255, 0.1)',
//             backdropFilter: 'blur(10px)',
//           },
//         }}
//       >
//         {drawerContent}
//       </Drawer>
//     </Box>
//   );
// };

// export default Nav;

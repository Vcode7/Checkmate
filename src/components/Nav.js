"use client";
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { useUser } from './Userdataprovider';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const userData = useUser();
  useEffect(() => {
    if (userData) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [userData]);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear the token on logout
    setLoggedIn(false);
    router.push('/login'); // Redirect to login page after logout
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const drawerItems = [
    { name: 'HOME', endpoint: '/' },
    { name: 'ABOUT US', endpoint: '/about' },
    { name: 'TOURNAMENTS', endpoint: '/tournament' },
    { name: 'Leaderboard', endpoint: '/leaderboard' },
    { name: 'Forum', endpoint: '/forum' },
    { name: 'Register', endpoint: '/register' },
    { name: 'Login', endpoint: '/login' }
  ];

  const DrawerList = (
    <Box
      sx={{ width: 250, paddingTop: '10vh', margin: "1rem", backgroundColor: 'black' }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {drawerItems.slice(0, 4).map((item) => (
          <ListItem
            key={item.name}
            className="transition duration-500 mt-2 ease-in-out hover:bg-black hover:text-orange-700"
            disablePadding
          >
           <svg
  height="24px"
  width="24px"
  viewBox="0 0 512 512"
  fill="#ec9946"
  transform="matrix(-1, 0, 0, 1, 0, 0) rotate(0)"
  stroke="#ec9946"
  strokeWidth="4.096"
>
  <g>
    <path
      d="M424.073,431.665c1.569-3.668,2.496-7.942,2.496-12.622c0.018-8.509-2.023-16.044-5.257-22.398 
      c-2.42-4.775-5.464-8.906-8.717-12.564c-4.878-5.493-10.192-9.984-14.976-14.154c-4.764-4.15-8.981-7.998-11.779-11.695 
      l-0.057-0.085l-0.057-0.046c-10.513-13.161-19.098-32.117-25.66-53.664c-9.889-32.325-15.354-70.361-18.266-103.498 
      c-2.93-33.157-3.328-61.464-3.328-74.616c0-1.229,0-2.326,0-3.272l46.233-28.902V0h-72.327v43.878h-21.84V0h-69.093v43.878
      h-21.821V0h-72.346v94.148l46.233,28.902c0.019,0.946,0.019,2.033,0.019,3.263c0,17.518-0.738,62.012-7.167,108.992
      c-3.214,23.476-7.847,47.584-14.427,69.122c-6.561,21.557-15.147,40.513-25.678,53.674l-0.039,0.038l-0.056,0.094
      c-2.516,3.291-6.089,6.694-10.23,10.316c-6.164,5.474-13.557,11.382-19.703,19.363c-3.063,3.98-5.787,8.528-7.734,13.728
      c-1.948,5.191-3.082,11.024-3.063,17.406c-0.019,6.24,1.645,11.761,4.254,16.082c1.948,3.253,4.349,5.824,6.769,7.838
      c1.551,1.295,3.12,2.316,4.614,3.204l-12.026,20.271V512h333.915v-45.561l-12.026-20.252c2.289-1.343,4.709-3.101,7.016-5.428
      C420.291,438.359,422.504,435.334,424.073,431.665z M144.427,84.646V17.141h38.045v43.878h56.122V17.141h34.812v43.878h56.103
      V17.141h38.064v67.505l-41.694,26.057H186.121L144.427,84.646z M405.807,494.859H106.173v-23.712l12.556-21.14h274.54
      l12.538,21.14V494.859z M407.584,426.333c-0.794,1.333-1.815,2.458-2.987,3.442c-1.74,1.456-3.839,2.506-5.446,3.12
      c-0.228,0.095-0.436,0.161-0.644,0.237v-0.256H113.756v0.359c-0.359-0.123-0.736-0.264-1.172-0.435
      c-2.08-0.832-4.803-2.354-6.694-4.472c-0.964-1.059-1.758-2.241-2.345-3.706c-0.566-1.466-0.964-3.225-0.983-5.578
      c0.018-5.872,1.305-10.438,3.403-14.645c1.608-3.148,3.725-6.088,6.259-8.944c3.783-4.293,8.528-8.358,13.407-12.613
      c4.821-4.226,9.832-8.622,14.03-14.068v0.01c0.02-0.029,0.038-0.048,0.057-0.076c0.018-0.029,0.038-0.048,0.056-0.067
      c12.518-15.798,21.594-36.476,28.553-59.204c10.438-34.188,15.94-73.14,18.947-107.006c2.874-32.666,3.365-60.528,
      3.384-74.587h130.662c0.056,18.937,0.907,62.882,7.317,109.795c3.309,24.109,8.074,49.012,15.033,71.798
      c6.958,22.728,16.034,43.406,28.552,59.204c0.02,0.029,0.038,0.047,0.057,0.076c0.018,0.019,0.018,0.038,0.038,0.067l0.018-0.01
      c3.726,4.831,8.094,8.84,12.386,12.641c6.543,5.73,12.972,11.061,17.434,16.933c2.25,2.921,4.047,5.956,5.275,9.284
      c1.248,3.337,1.986,7.006,1.986,11.412C409.399,422.381,408.643,424.537,407.584,426.333z"
    />
  </g>
</svg>

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
        <ListItem
          key={drawerItems[5].name}
          className="transition duration-500 ease-in-out hover:bg-black hover:text-red-600"
          disablePadding
        >
          <Link href={drawerItems[5].endpoint} passHref>
            <ListItemText primary={drawerItems[5].name} />
          </Link>
        </ListItem>
      </List>
      {!loggedIn ? (


        <List>
          {drawerItems.slice(6).map((item) => (
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
      ) :
        <List>
          <ListItem
            className="transition duration-500 ease-in-out hover:bg-black hover:text-red-600"
            disablePadding
          >
            <Link href="/logout" passHref>
              <ListItemText primary="logout" />
            </Link>
          </ListItem>
        </List>
      }
    </Box>
  );



  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 0px 5px black',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            width: "98vw",
            borderRadius: "50px",
            margin: "2vh 1vw",
          }} // AppBar above Drawer
        >
          <Toolbar>
            <IconButton
              onClick={open ? toggleDrawer(false) : toggleDrawer(true)}
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
                  color: 'white',
                  fontWeight: 800,
                  position: 'relative',
                  padding: '0.1em 0.3em',  // Adjust padding as desired
                  textShadow: "0px 0px 4px orange,0px 0px 3px red"
                }}
              >
                CHECKMATE
              </Typography>

            </Box>

            {loggedIn ? (
              <div>
                {/* Profile Picture as a Menu Button */}
                <Avatar
                  onClick={handleMenuOpen}
                  alt="Profile"
                  sx={{ cursor: 'pointer' }}
                />
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => { router.push('/profile'); handleMenuClose(); }}>Profile</MenuItem>
                  <MenuItem onClick={() => { router.push('/ratings'); handleMenuClose(); }}>Ratings</MenuItem>
                  <MenuItem onClick={() => { router.push('/leaderboard'); handleMenuClose(); }}>Leaderboard</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <Button color="primary" className="font-bold">
                <Link href="/login" passHref>
                  Login
                </Link>
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: 'black',
            color: 'white' // Ensures Drawer contents start below the AppBar
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

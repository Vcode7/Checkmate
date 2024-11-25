"use client";
import React, { useState, useEffect ,useContext} from 'react';
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
import { useLoggedIn, useUser } from './Userdataprovider';
import { usePathname,redirect } from 'next/navigation'

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const loggedIn= useLoggedIn();
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const {userData} = useUser(); // Access the current route
  const pathname = usePathname()
  const {logout} = useUser() // Use the login function from UserContext

  
  useEffect(() => {
    // Set timeout based on the route
    const timeoutDuration = pathname === "/" ? 4000 : 1000;
    console.log(pathname)
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, timeoutDuration);

    // Cleanup to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [userData, pathname]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear the token on logout
    logout()
    redirect('/login'); // Redirect to login page after logout
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const drawerItems = [
    { name: 'HOME', endpoint: '/' ,icons:"/icons/king.png"},
    { name: 'ABOUT US', endpoint: '/about',icons:"/icons/queen.png" },
    { name: 'TOURNAMENTS', endpoint: '/tournament',icons:"/icons/rook.png" },
    { name: 'LEADERBOARD', endpoint: '/leaderboard',icons:"/icons/horse.png" },
    { name: 'FORUM', endpoint: '/forum',icons:"/icons/pawn.png" },
    { name: 'Register', endpoint: '/register',icons:"/icons/bishop.png"},
    { name: 'Login', endpoint: '/login',icons:"/icons/bishop.png" }
  ];

  const DrawerList = (
    <Box
    className="bg-stone-950"
      sx={{ width: 250, paddingTop: '10vh', paddingLeft:"5px"}}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {drawerItems.slice(0, 5).map((item) => (
          <ListItem
            key={item.name}
            className="transition duration-500 py-2 ease-in-out hover:bg-black hover:text-orange-700"
            disablePadding
          >
          <Box component="img" src={item.icons} alt="" className="w-6 pr-2"/>
            <Link href={item.endpoint} passHref>
              <ListItemText className="font-bold" primary={item.name} />
            </Link>
          </ListItem>
        ))}
      </List>
{/* 
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
      </List> */}
      {!loggedIn ? (


        <List>
          {drawerItems.slice(5,7).map((item) => (
            <ListItem
              key={item.name}
              className="transition duration-500 ease-in-out mt-2 hover:bg-black hover:text-red-600"
              disablePadding
            >
              <Box component="img" src={item.icons} alt="" className="w-6 pr-2"/>
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
            <Box component="img" src="/icons/bishop.png" alt="" className="w-6 pr-2"/>
            <Button onClick={handleLogout}>
              <ListItemText primary="logout" />
            </Button>
          </ListItem>
        </List>
      }
    </Box>
  );



  return (
    <div>
      <Box sx={{ flexGrow: 1 ,
        opacity:isVisible ? 1:0 ,
        transition: "opacity 3s ease-in-out",}}>
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
            <Box
        component="img"
        src="/img/logo.png" // Replace with the correct path to your logo
        alt="Checkmate"
        sx={{
          height: "2.2rem", // Adjust height for the logo
          width: "auto",
          objectFit: "contain",
          borderRadius: "50%", // Optional rounded corners for circular style
          position: "relative",
          zIndex: 1,
          margin:"auto",
          background: "transparent", // Transparent background
          mixBlendMode:"screen",
        }}
      />
            </Box>

            {loggedIn ? (
              <div>
                {/* Profile Picture as a Menu Button */}
                <Avatar
                  onClick={handleMenuOpen}
                  src={userData.avatar}
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
              <Button sx={{color:"white"}} className="font-bold bg-orange-800 text-white hover:bg-orange-900 rounded-[10px] py-1 px-3">
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
            background: '#0c0a09',
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

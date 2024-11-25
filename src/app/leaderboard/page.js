"use client";
import { useEffect, useState } from 'react';
import { Box,
  Card, CardContent, Typography, Grid, Table, TableBody, Tab,
  Tabs,
  TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, 
  Avatar
} from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ChessLoader from '@/components/loader';
import HeadStyle from '@/components/style/Textstyle2';
// Function to sort players by rating for each leaderboard
const sortPlayersByRating = (players, type) => {
  return players.sort((a, b) => {
    const ratingA = a[`${type}Rating`] === 'N/A' ? -Infinity : a[`${type}Rating`];
    const ratingB = b[`${type}Rating`] === 'N/A' ? -Infinity : b[`${type}Rating`];
    return ratingB - ratingA; // Higher ratings first
  });
};

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTab, setSelectedTab] = useState('blitz'); // Default tab

  useEffect(() => {
    // Fetch leaderboard data from the API
    const fetchLeaderboardData = async () => {
      try {
        const res = await fetch("/api/leaderboard")
        const data = await res.json()
        setLeaderboard(data);

      } catch (err) {
        setError('Error fetching leaderboard data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, []);

  // Display loading state
  if (loading) {
    return (
      <ChessLoader />
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <Typography variant="h6" color="error" className="text-white">
          Error: {error}
        </Typography>
      </div>
    );
  }
  const renderPlayerCards = (players, type) => {
    return (
    <Box sx={{display:"flex",width:"100%",justifyContent:"center",alignItems:"flex-end",margin:"auto"}}>
     
     <Card sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center" ,width:"9rem",background:"#18181b"}}>
     <Avatar alt="Remy Sharp" sx={{ width: 51, height: 51,background:"gray",position:"relative",top:"5.7rem"}} >{players[1].name[0]}</Avatar>
      <Box component="img" src='/icons/two.png' sx={{width:90,position:"relative",top:"-.5rem"}}/>
         <CardContent sx={{height:"7rem",width:"7rem",borderRadius:"10px 10px 0 0"}} className="shadow-lg bg-gray-800 ">
              <Typography variant="p" className="text-white">{players[1].name}</Typography>
              <Typography variant="body1" className="text-white">{players[1][`${type}Rating`]}</Typography>
            </CardContent>
      </Card>
      <Card sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center" ,width:"9rem",background:"#18181b"}}>
      <Avatar alt="Remy Sharp" sx={{ width: 52, height: 52,background:"gold",position:"relative",top:"5.7rem"}} >{players[0].name[0]}</Avatar>
      <Box component="img" src='/icons/one.png' sx={{width:100,position:"relative",top:"-.5rem",left:"1px"}}/>
            <CardContent sx={{height:"8rem",width:"7rem",borderRadius:"10px 10px 0 0"}} className="shadow-lg bg-gray-900 ">
              <Typography variant="p" className="text-white">{players[0].name}</Typography>
              <Typography variant="body1" className="text-white">{players[0][`${type}Rating`]}</Typography>
            </CardContent>
      </Card>
      <Card sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center" ,width:"9rem",background:"#18181b"}}>
      <Avatar alt="Remy Sharp" sx={{ width: 50, height: 50,background:"rgb(150,100,100)",position:"relative",top:"4.8rem"}} >{players[2].name[0]}</Avatar>
      <Box component="img" src='/icons/three.png' sx={{width:80,position:"relative",top:"-.5rem",left:"1px"}}/>
             <CardContent sx={{height:"6rem",width:"7rem",borderRadius:"10px 10px 0 0"}} className="shadow-lg bg-gray-700 ">
              <Typography variant="p" className="text-white">{players[2].name}</Typography>
              <Typography variant="body1" className="text-white">{players[2][`${type}Rating`]}</Typography>
            </CardContent>
      </Card>

      </Box>
    );
  };

  const renderPlayerTable = (players, type) => {
    return players.slice(3).map((player, index) => (
      <TableRow key={index} className="hover:bg-gray-800 transition-colors duration-200">
          <TableCell sx={{color:"white",borderRight:"2px solid white"}} className=' w-1 ' >{index+4}</TableCell>
        <TableCell sx={{display:"flex",justifyContent:"left",alignItems:"center", color: 'white', borderBottom: '1px solid orange' }}>
          <Avatar alt="Remy Sharp" sx={{ width: 30, height: 30,background:"rgb(250,90,90)",marginRight:"4px"}} >{player.name[0]}</Avatar>
          <Typography variant="p" className="text-white font-bold">{player.name}</Typography>
              </TableCell>
        <TableCell sx={{ color: 'white',textAlign:"right", borderBottom: '1px solid orange' }}>{player[`${type}Rating`]}</TableCell>
      
      </TableRow>
    ));
  };

  
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const tabData = [
    { label: 'Blitz', key: 'blitz',icon:<BoltIcon />,color:"orange" },
    { label: 'Rapid', key: 'rapid',icon:<ScheduleIcon />,color:"rgb(150,200,150)"  },
    { label: 'Bullet', key: 'bullet',icon:<svg xmlns="http://www.w3.org/2000/svg" className='text-red-800' xlink="http://www.w3.org/1999/xlink" version="1.1" id="_x32_" width="24px" height="24px" fill='rgb(150,100,100)' viewBox="0 0 512 512" space="preserve">
      <g>
        <path className="st0 bg-red-800" d="M495.212,16.785c-44.125-44.141-188.297,5.875-250.078,67.656S61.79,267.8,61.79,267.8l182.406,182.407   c0,0,121.563-121.579,183.359-183.36C489.321,205.082,539.337,60.91,495.212,16.785z"/>
        <polygon className="st0 bg-red-800" points="0.009,329.597 182.399,512.004 217.712,476.691 35.306,294.285  "/>
      </g>
      </svg>,color:"rgb(200,150,150)"  },
  ];

  const renderTable = (ratingType) => (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: 'transparent', border: '2px solid white',maxWidth:690,margin:"auto" }}
      className="my-6"
    >
      <Table aria-label={`${ratingType} leaderboard table`}>
        
        <TableBody>{renderPlayerTable(sortPlayersByRating(leaderboard, ratingType), ratingType)}</TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div className="min-h-screen p-6 bg-zinc-900 ">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="text-white font-bold text-3xl mb-6"
        sx={{marginTop:"5rem"}}
      >
       <HeadStyle text="Chess Leaderboards"/>
      </Typography>

      {/* Tabs for Leaderboards */}
      <Box sx={{ width: '100%', bgcolor: 'transparent', marginBottom: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          textColor='none'
          indicatorColor="primary"
        >
          {tabData.map((tab) => (
            <Tab
              key={tab.key}
              value={tab.key}
              label={tab.label}
              icon={tab.icon}
              sx={{
                color: tab.color,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '1rem',
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Content for Selected Tab */}
      <Box>
        <Typography variant="h4" className="text-white font-bold text-center text-2xl mb-8">
          
          {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
        </Typography>
        <Grid container>
          {renderPlayerCards(sortPlayersByRating(leaderboard, selectedTab), selectedTab)}
        </Grid>
        {renderTable(selectedTab)}
      </Box>
    </div>
  );
};

export default Leaderboard;

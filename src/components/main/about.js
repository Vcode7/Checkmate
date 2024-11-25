import React from 'react';
import { Box, Typography, Card, CardContent, Link, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Animate from '../animate';
import TextStyle from '../style/Textstyle';
import HeadStyle from '../style/Textstyle2';
import { useLoggedIn } from '../Userdataprovider';

const AboutSection = () => {
  const loggedIn = useLoggedIn()
  return (
    <Box
      sx={{
        padding: '4rem 1rem',
        display: 'flex',
        background:"linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,1))",
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: '1200px' }}
      >
        {/* Left section with the image */}
        <Grid item xs={12} md={6}>
          <Animate animationType="arriveFromLeft">
            <Box
              sx={{
                
                backgroundSize:"cover",
                backgroundPosition:"center",
                height: { xs: '250px', md: '400px' },
                borderRadius: '12px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0,0.2)',
                overflow: 'hidden',
              }}
            >
              <Animate animationType="fadeInUp">
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textShadow:"0 0 5px black",
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                  }}
                >
                 <HeadStyle text="About Checkmate Club"/>
                  
                </Typography>
              </Animate>
            </Box>
          </Animate>
        </Grid>

        {/* Right section with text description */}
        <Grid item xs={12} md={6}>
            <Card
              sx={{
                padding: '1rem',
                background: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
                height: '100%',
              }}
            >
              <CardContent className='text-white'>
                <Animate animationType="fadeInUp">
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: 'bold', textAlign: 'center' }}
                  >
                    <TextStyle text="Welcome to Checkmate Club"/>
                   
                  </Typography>
                </Animate>
                <Animate animationType="fadeInUp">
                  <Typography
                    variant="body1"
                    sx={{ marginTop: '1rem' }}
                  >
                    Checkmate Club is a place where passionate chess players of all
                    levels can join exciting tournaments, win matches, and climb
                    the rankings! Our club uses official <strong>Chess.com ratings</strong> to offer a competitive experience.
                  </Typography>
                </Animate>
                <Animate animationType="fadeInUp">
                  <Typography
                    variant="body1"
                    sx={{ marginTop: '1rem' }}
                  >
                    Whether you’re looking to improve your game, meet other enthusiasts, or compete in tournaments, we offer a supportive platform for your journey. Join us, play matches, and see your Chess.com ranking rise!
                  </Typography>
                </Animate>

                {/* Links with icons */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '1.5rem',
                  }}
                >
                  
                <Animate animationType="fadeInUp">
                  <Link
                    href="#about-more"
                    underline="none"
                    className='hover:text-red-800'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      color:"orange",
                    }}
                  >
                    Learn More <ArrowForwardIosIcon fontSize="small" sx={{ ml: 0.5 }} />
                  </Link>
                 {!loggedIn && <Link
                    href="#register"
                    underline="none"
                    className='hover:text-red-800'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      color:"orange",
                    }}
                  >
                    Register Now <ArrowForwardIosIcon fontSize="small" sx={{ ml: 0.5 }} />
                  </Link>}
                  </Animate>
                </Box>
              </CardContent>
            </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;

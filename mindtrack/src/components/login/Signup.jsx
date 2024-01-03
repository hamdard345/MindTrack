import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import backgroundImage from '../../assets/images/signup.png';

function Signup() {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item xs={6} sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Box sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
          color: 'white',
          padding: '2rem',
          borderRadius: '10px',
          maxWidth: '80%',
          textAlign: 'left'
        }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Start Your Journey
          </Typography>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
            Unlock Your Potential
          </Typography>
          <Typography variant="body1">
          Join Mind Track for personalized tracking, insightful analytics, and the dedicated support you need to maintain a balanced state of mental well-being and productivity every day.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // Use the same linear gradient as your reference image or customize as needed
        background: 'linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
      }}>
        <Typography variant="h2" gutterBottom component="h1" color="#fff">
        Create your account
        </Typography>
        <Typography gutterBottom>With</Typography>
        <Typography gutterBottom>Google</Typography>
        <Typography gutterBottom>Or</Typography>
        <Button sx={{ 
          color:"white",
          background: 'linear-gradient(to bottom, #3c1545 0%, #242424 45%, #692f38 100%)' }}>Continue With Your Email</Button>
        <Typography gutterBottom>Already have an account? Log in</Typography>
        {/* Additional signup form elements here */}
      </Grid>
    </Grid>
  );
}

export default Signup;

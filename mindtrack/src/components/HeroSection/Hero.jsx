import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import heroImage from '../../assets/images/hero.png';

const Hero = () => {
  const heroStyles = {
    position: 'relative',
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center',
    height: '600px',
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Darker overlay for better readability
  };

  const contentBoxStyles = {
    position: 'relative',
    paddingTop: '64px',
    paddingBottom: '64px',
    zIndex: 2,
  };

  const textStyle = {
    color: 'white', // Ensuring contrast
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for better readability
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background for text
    padding: '16px', // Spacing inside the text background
    borderRadius: '4px', // Optional: rounded corners for the text background
    display: 'inline-block', // Wrap background to the content of the text
    margin: '0 auto', // Center the text block
    maxWidth: '80%', // Don't let the text span the full width of its container
    fontSize: '1.6rem', 
    lineHeight: '1.6', 
    
  };

  return (
    <Container maxWidth={false} style={heroStyles}>
      <Box style={overlayStyles} />
      <Box style={contentBoxStyles}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.9)' }}>
        Mind Track: Balance your Day, Enrich Your Mind
        </Typography>
        <Typography  style={textStyle} gutterBottom>
          Welcome to MindTrack, where productivity meets mental well-being. Our intuitive web application, built on the Healthy Mind Platter framework, simplifies tracking your daily activities for a balanced life. Discover a new level of self-improvement with MindTrack's easy-to-use tools, including efficient activity recording, real-time progress tracking, and detailed analytics reports. Embrace a better you with MindTrack today!
        </Typography>
      </Box>
    </Container>
  );
};

export default Hero;

import { Box, Typography, Container } from '@mui/material';
import heroImage from '../../assets/images/hero.png';
import useIsMobile from '../../hooks/useIsMobile';
const Hero = () => {

  const isMobile = useIsMobile();

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
    zIndex: 2,
    paddingTop: '64px',
    paddingBottom: '64px',
    textAlign: 'center',
  };

  const textStyle = {
    color: 'white',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '16px',
    borderRadius: '4px',
    display: 'inline-block',
    maxWidth: '80%',
    fontSize: '1.6rem',
    lineHeight: '1.6',
    margin: '0 auto',
  };

  if (isMobile) {
    contentBoxStyles.paddingTop = '0'; // Remove top padding on mobile
    contentBoxStyles.marginTop = 'auto'; // Push content to the bottom on mobile
    textStyle.lineHeight = '1.2';
    textStyle.fontSize = '1.2rem';

  }

  return (
    <Container maxWidth={false} style={heroStyles}>
      <Box style={overlayStyles} />
      <Box style={contentBoxStyles}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.9)' }}>
          Mind Track: Balance your Day, Enrich Your Mind
        </Typography>
        <Typography style={textStyle} gutterBottom>
          Welcome to MindTrack, where productivity meets mental well-being. Our intuitive web application, built on the Healthy Mind Platter framework, simplifies tracking your daily activities for a balanced life. Discover a new level of self-improvement with MindTrack's easy-to-use tools, including efficient activity recording, real-time progress tracking, and detailed analytics reports. Embrace a better you with MindTrack today!
        </Typography>
      </Box>
    </Container>
  );
};

export default Hero;

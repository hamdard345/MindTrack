import React, { useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import backgroundImage from "../../assets/images/signup.png";
import EmailSignup from './EmailSignup'

// Styling for the Grid container
const gridContainerStyle = {
  height: "100vh",
};

// Styling for the left Grid item
const leftGridItemStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// Styling for the Box inside the left Grid item
const leftBoxStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
  color: "white",
  padding: "2rem",
  borderRadius: "10px",
  maxWidth: "80%",
  textAlign: "left",
};

// Styling for the right Grid item
const rightGridItemStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  // Use the same linear gradient as your reference image or customize as needed
  background:
    "linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
};

// Styling for the Button
const buttonStyle = {
  color: "white",
  background:
    "linear-gradient(to bottom, #3c1545 0%, #242424 45%, #692f38 100%)",
};

function Signup() {
  // State to control the display of the new form
  const [showEmailForm, setShowEmailForm] = useState(false);
  // Handler for the emailbutton click
  const handleEmailButton = () =>{
    setShowEmailForm(true);
  }

  //callback funtion to go back to the orignal view
  const handleBack = () =>{
    setShowEmailForm(false)
  }
  return (
    <Grid container sx={gridContainerStyle}>
      <Grid item xs={12}sm={6} sx={leftGridItemStyle}>
        <Box sx={leftBoxStyle}>
          <Typography variant="h5" component="h2" gutterBottom>
            Start Your Journey
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Unlock Your Potential
          </Typography>
          <Typography variant="body1">
            Join Mind Track for personalized tracking, insightful analytics, and
            the dedicated support you need to maintain a balanced state of
            mental well-being and productivity every day.
          </Typography>
        </Box>
      </Grid>
      <Grid itemxs={12}sm={6} sx={rightGridItemStyle}>
        {!showEmailForm ? (
          <>
        <Typography variant="h2" gutterBottom component="h1" color="#fff">
          Create your account
        </Typography>
        <Typography gutterBottom>With</Typography>
        <Typography gutterBottom>Google</Typography>
        <Typography gutterBottom>Or</Typography>
        <Button sx={buttonStyle} onClick={handleEmailButton}>Continue With Your Email</Button>
        <Typography gutterBottom>Already have an account? Log in</Typography>
        </>)
        : (
        <EmailSignup  onBack ={handleBack}/>
        )}
      </Grid>
    </Grid>
  );
}

export default Signup;

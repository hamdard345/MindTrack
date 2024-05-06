import React from "react";
import {Button,TextField,Grid,Typography,FormControlLabel,Checkbox,Box,styled,} from "@mui/material";

import { buttonStyle,gridContainerStyle, CustomTextField } from "./EmailSignupStyles";



function EmailSignup({ onBack }) {
  return (
    <Grid container sx={gridContainerStyle}>
      <Button sx={buttonStyle} onClick={onBack}>
        Go Back
      </Button>
      <Typography variant="h4"  sx={{ color: 'white', marginBottom: 2 }}>Account details</Typography>
      
      <CustomTextField type="text" label="First name" />
      <CustomTextField type="text" label="Last name" />
      <CustomTextField type="text" label="Email" />
      <CustomTextField type="password" label="Password" />
      
      <Typography variant="h4" sx={{ color: 'white', marginTop: 2 }}>Terms and conditions</Typography>
      
      <Box sx={{ width: "60%", marginTop: 2 }}>
        <FormControlLabel
          control={<Checkbox />}
          label="I have read and agree to the terms and conditions and consent to receive emails about jobs and career related topics. I understand that I can unsubscribe from emails at any time."
          sx={{ color: 'white' }}
        />
      </Box>
      
      <Button sx={buttonStyle}>Register and continue</Button>
    </Grid>
  );
}

export default EmailSignup;

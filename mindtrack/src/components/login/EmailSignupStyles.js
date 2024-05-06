// EmailSignupStyles.js

import { styled, TextField } from "@mui/material";

// Styling for the Button
export const buttonStyle = {
  color: "white",
  background: "linear-gradient(to bottom, #3c1545 0%, #242424 45%, #692f38 100%)",
};

export const gridContainerStyle = {
  margin: "6px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 2,
};

// Custom styled TextField
export const CustomTextField = styled(TextField)({
  width: "60%",
  '& label': {
    color: 'white',
    fontSize: "1.2rem"
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  }
});
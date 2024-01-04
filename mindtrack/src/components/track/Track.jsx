import { Grid, Input, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";

function Track() {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // Use the same linear gradient as your reference image or customize as needed
          background:
            "linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        }}
      >
        <Typography variant="h3" component="h1">
          track my day
        </Typography>
        <TextField fullWidth label="Start"></TextField>
        <TextField fullWidth label="End"></TextField>
        <TextField fullWidth label="Date"></TextField>
        <TextField fullWidth label="Description"></TextField>
        <TextField fullWidth label="Content"></TextField>
      </Grid>
    </>
  );
}

export default Track;

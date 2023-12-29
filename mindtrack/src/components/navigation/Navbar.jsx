import React from "react";
import Logo from "./Logo";
import NavbarTabs from "./NavBarTabs";
import NavbarIcon from "./NabarIcon";
import { AppBar, Box, Toolbar } from "@mui/material";
function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          height:"90px",
          display: "flex",
          justifyContent: "space-between",
          background:
            "linear-gradient(to bottom, #431a21 0%, #242424 50%, #3c1545  100%)",
          boxShadow: "none", // Optional: remove shadow for a flatter appearance
          color: "white",
          
        }}
      >
        <Toolbar>
          <Logo />
          <Box
            style={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <NavbarTabs />
            <NavbarIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

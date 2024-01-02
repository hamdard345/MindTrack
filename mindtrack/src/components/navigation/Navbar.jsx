import Logo from "./Logo";
import NavbarTabs from "./NavBarTabs";
import NavbarIcon from "./NabarIcon";
import useIsMobile from "../../hooks/useIsMobile";
import { AppBar, Box, Toolbar } from "@mui/material";

function Navbar() {
  const isMobile = useIsMobile();

  const appBarStyle = {
    height: "90px",
    background: "linear-gradient(to bottom, #431a21 0%, #242424 50%, #3c1545  100%)",
    boxShadow: "none",
    color: "white",
  };

  return (
    <AppBar position="static" sx={appBarStyle}>
      <Toolbar sx={{ display: 'flex', justifyContent: isMobile ? 'space-between' : 'flex-start' }}>
        {isMobile ? (
          <>
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
              <Logo />
            </Box>
            <NavbarIcon />
          </>
        ) : (
          <>
            <Logo />
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <NavbarTabs />
            </Box>
           
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

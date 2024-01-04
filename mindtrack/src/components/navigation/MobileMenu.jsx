import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleNavigation('/track')}>Track My Day</MenuItem>
        <MenuItem onClick={() => handleNavigation('/activity')}>Activity Log</MenuItem>
        <MenuItem onClick={() => handleNavigation('/insights')}>Insights</MenuItem>
        <MenuItem onClick={() => handleNavigation('/signup')}>Account</MenuItem>
      </Menu>
    </>
  );
};

export default MobileMenu;

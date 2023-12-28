import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

const NavbarIcon = () => {
  return (
    <IconButton>
    <Icon sx={{ color:"white" }}>
      <MenuIcon/>
    </Icon>
  </IconButton>
  );
};

export default NavbarIcon;

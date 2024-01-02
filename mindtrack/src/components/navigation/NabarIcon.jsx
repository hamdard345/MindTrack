import MenuIcon from '@mui/icons-material/Menu';
import { Tab, Tabs } from '@mui/material';

const NavbarIcon = () => {
  return (
    <Tabs>
      <Tab sx={{ color:"white" }}
           icon={<MenuIcon/>} label ="Menu"
      />
    
  </Tabs>
  );
};

export default NavbarIcon;

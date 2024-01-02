import  { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';

const NavbarTabs = () => {
  const [value, setValue] = useState(false);

  const tabStyle = {
    color: "white"
  };
  const handleChange = (event, newValue) =>{
    setValue(newValue)
  }
  const selectedTabStyle = {
    
      '& .MuiTabs-indicator': {
        backgroundColor: '#bb1b1b', 
      },
      '& .Mui-selected': { 
        color: '#bb1b1b', 
      },
    
  }
  return (
    <Tabs value={value} onChange={handleChange} sx={selectedTabStyle}>
      <Tab sx={tabStyle} icon={<AddTaskIcon />} label="Track My Day" />
      <Tab sx={tabStyle} icon ={<DashboardIcon/>}label="Activity Log" />
      <Tab sx={tabStyle} icon ={<InsightsIcon/>}label="Insights " />

    </Tabs>
  );
};

export default NavbarTabs;

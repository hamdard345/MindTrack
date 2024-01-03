import { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate, useLocation } from "react-router-dom";
/**
 * NavbarTabs Component
 *
 * Description:
 * The NavbarTabs component is responsible for rendering navigation tabs
 * in the application using Material-UI components. It also handles
 * navigation and active tab indication based on the current URL.
 *
 * How it works:
 * - The component uses the `useNavigate` and `useLocation` hooks from
 *   `react-router-dom` for navigation and URL location awareness.
 * - It maintains the active tab state and updates it based on the URL.
 * - On tab change, it navigates to the corresponding route.
 */
const NavbarTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(false);

  // Update active tab based on the current URL path
  useEffect(() => {
    switch (location.pathname) {
      case "/track":
        setValue(0); // Set active tab for '/track'
        break;
        case "/signup":
          setValue(3); // Set active tab for '/track'
          break;
      // Add cases for other paths
      default:
        setValue(false); // Default, no tab selected
    }
  }, [location]);
  const tabStyle = {
    color: "white",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate("/track");
    }
    if (newValue === 3) {
      navigate("/signup");
    }
  };
  const selectedTabStyle = {
    "& .MuiTabs-indicator": {
      backgroundColor: "#bb1b1b",
    },
    "& .Mui-selected": {
      color: "#bb1b1b",
    },
  };
  return (
    <Tabs value={value} onChange={handleChange} sx={selectedTabStyle}>
      <Tab
        value={0}
        sx={tabStyle}
        icon={<AddTaskIcon />}
        label="Track My Day"
      />
      <Tab
        value={1}
        sx={tabStyle}
        icon={<DashboardIcon />}
        label="Activity Log"
      />
      <Tab value={2} sx={tabStyle} icon={<InsightsIcon />} label="Insights " />
      <Tab value={3} sx={tabStyle} icon={<AccountCircleIcon />} label="Account" />
    </Tabs>
  );
};

export default NavbarTabs;

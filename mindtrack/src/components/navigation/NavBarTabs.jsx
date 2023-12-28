import React from "react";
import { Tabs, Tab } from "@mui/material";

const NavbarTabs = () => {
  return (
    <Tabs>
      <Tab
        sx={{
          color: "white",
          textShadow: "0 4px 4px rgba(0, 0, 0, 0.3)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        label="Tab 1"
      />
      <Tab
        sx={{
          color: "white",
          textShadow: "0 4px 4px rgba(0, 0, 0, 0.3)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        label="Tab 2"
      />
    </Tabs>
  );
};

export default NavbarTabs;

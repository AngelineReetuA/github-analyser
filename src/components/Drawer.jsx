import { useState, useEffect } from "react";
import { Drawer, Tabs, Tab, Box, Tooltip, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const [value, setValue] = useState(0);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/user/user-analysis") {
      setValue(0);
    } else if (location.pathname === "/user/code-analysis/repositories") {
      setValue(1);
    } else {
      setValue(2);
    }
  });

  const handleChange = (newVal) => {
    setValue(newVal);
  };

  const drawerWidth = 90;

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#d9edf8",
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          marginTop: "60px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ overflow: "auto" }}>
        <Tabs
          orientation="vertical"
          value={Number(value) || 0}
          onChange={handleChange}
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Tooltip title="Overview" placement="right">
            <Tab
              component={Link}
              to="/user/user-analysis"
              icon={<RemoveRedEyeIcon />}
              value="0"
            />
          </Tooltip>
          <Tooltip title="Repositories" placement="right">
            <Tab
              component={Link}
              to="/user/code-analysis/repositories"
              icon={<CodeIcon />}
              value="1"
            />
          </Tooltip>
          <Tooltip title="Contact" placement="right">
            <Tab
              component={Link}
              to="/user/contact"
              icon={<PersonIcon />}
              value="2"
            />
          </Tooltip>
        </Tabs>
      </Box>
    </Drawer>
  );
}
// const test = {
//   "/path/to/route": {
//       "title": "",
//       "to": "",
//       "icon": ""
//   },
// };

import { useRef, useState } from "react";
import { Drawer, Tabs, Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";

export default function NavBar() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newVal) => {
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
          marginTop:"60px"
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ overflow: "auto" }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
        >
          <Tab
            component={Link}
            to="/user/user-analysis"
            icon={<RemoveRedEyeIcon />}
            index={0}
          />
          <Tab
            component={Link}
            to="/user/code-analysis/repositories"
            icon={<CodeIcon />}
            index={1}
          />
          <Tab
            component={Link}
            to="/user/contact"
            icon={<PersonIcon />}
            index={2}
          />
        </Tabs>
      </Box>
    </Drawer>
  );
}

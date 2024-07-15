import InitialAnalysis from "./pages/InitialAnalysis";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import Header from "./components/Header";
import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "#d9edf8",
            display: "flex",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={currentTabIndex}
            onChange={handleTabChange}
            sx={{ borderRight: 1, borderColor: "#7eb8d9" }}
          >
            <Tab icon={<RemoveRedEyeIcon />} />
            <Tab icon={<CodeIcon />} />
            <Tab icon={<PersonIcon />} />
          </Tabs>
        </Box>
        {currentTabIndex === 0 && <InitialAnalysis />}
      </Box>
    </>
  );
}

export default App;

import InitialAnalysis from "./pages/InitialAnalysis";
import Contact from "./pages/Contact";
import CodeAnalysis from "./pages/CodeAnalysis";
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
      <Box sx={{ display: "flex", flexGrow:"1"}}>
        <Tabs
          orientation="vertical"
          value={currentTabIndex}
          onChange={handleTabChange}
          sx={{ borderRight: 1, borderColor: "#7eb8d9", bgcolor:"#d9edf8", height:"92vh"  }}
        >
          <Tab icon={<RemoveRedEyeIcon />} />
          <Tab icon={<CodeIcon />} />
          <Tab icon={<PersonIcon />} />
        </Tabs>

        {currentTabIndex === 0 && <InitialAnalysis />}
        {currentTabIndex === 1 && <CodeAnalysis />}
        {currentTabIndex === 2 && <Contact />} 
      </Box>
    </>
  );
}

export default App;

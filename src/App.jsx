import InitialAnalysis from "./pages/InitialAnalysis";
import Contact from "./pages/Contact";
import CodeAnalysis from "./pages/CodeAnalysis";
import Header from "./components/Header";
import FirstPage from "./pages/FirstPage.jsx";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname != "/" && <Header />}
      <Box
        sx={{ marginTop: "65px", paddingLeft: "20px", paddingRight: "20px" }}
      >
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/:username" element={<InitialAnalysis />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;

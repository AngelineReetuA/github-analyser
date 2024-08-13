import InitialAnalysis from "./pages/InitialAnalysis";
import Contact from "./pages/Contact";
import CodeAnalysis from "./pages/CodeAnalysis";
import Header from "./components/Header";
import NavBar from "./components/Drawer.jsx";
import FirstPage from "./pages/FirstPage.jsx";
import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Box sx={{ marginTop: "60px", marginLeft: "90px" }}>
        <Routes>
          <Route path="" element={<FirstPage />} />
          <Route path="/user/user-analysis" element={<InitialAnalysis />} />
          <Route
            path="/user/code-analysis/repositories"
            element={<CodeAnalysis />}
          />
          <Route
            path="/user/code-analysis/something"
            element={<CodeAnalysis />}
          />
          <Route path="/user/contact" element={<Contact />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;

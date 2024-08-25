import InitialAnalysis from "./pages/InitialAnalysis";
import Contact from "./pages/Contact";
import CodeAnalysis from "./pages/CodeAnalysis";
import Header from "./components/Header";
import NavBar from "./components/Drawer.jsx";
import FirstPage from "./pages/FirstPage.jsx";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  
  return (
    <>
      {location.pathname != "/" && (
        <>
          <Header />
          <NavBar />
        </>
      )}
      <Box sx={{ marginTop: "60px", marginLeft: "90px" }}>
        <Routes>
          <Route path="/" element={<FirstPage />} />
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
          <Route
            path="/user/contact"
            element={
              <center>
                <h4>Page not found</h4>
              </center>
            }
          />
        </Routes>
      </Box>
    </>
  );
}

export default App;

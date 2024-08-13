import { Tabs, Tab, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Repositories from "../components/Repositories";

export default function CodeAnalysis() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    setTabIndex(tabIndex);
  };

  return (
    <>
      <Container>
        <Tabs
          onChange={handleTabChange}
          value={tabIndex}
          orientation="horizontal"
        >
          <Tab component={Link} to="/user/code-analysis/repositories" label="Repositories" />
          <Tab component={Link} to="/user/code-analysis/something" label="Something" />
        </Tabs>

        {tabIndex === 0 && <Repositories />}
        {tabIndex === 1 && <>under contruction</>}
      </Container>
    </>
  );
}

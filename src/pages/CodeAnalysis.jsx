import { Tabs, Tab, Container } from "@mui/material";
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
          <Tab label="Repositories" />
          <Tab label="Something" />
        </Tabs>

        {tabIndex === 0 && <Repositories />}
        {tabIndex === 1 && <>under contruction</>}
      </Container>
    </>
  );
}

import { Tabs, Tab, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Repositories from "../components/Repositories";
import RepositoriesList from "../components/RepositoriesList";

export default function CodeAnalysis() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (e, tabIndex) => {
    setTabIndex(tabIndex);
  };

  return (
    <>
      <Container>
        <Typography variant="h5" fontWeight="800" pt={1}>
          Repositories
        </Typography>
        <Tabs
          onChange={handleTabChange}
          value={tabIndex}
          orientation="horizontal"
        >
          <Tab
            component={Link}
            to="/user/code-analysis/repositories"
            label="Table view"
          />
          <Tab
            component={Link}
            to="/user/code-analysis/repositories"
            label="Card view"
          />
        </Tabs>

        {tabIndex === 0 && <Repositories />}
        {tabIndex === 1 && <RepositoriesList />}
      </Container>
    </>
  );
}

import { useState } from "react";
import {
  Divider,
  Grid,
  Box,
  Paper,
  Typography,
  Container,
} from "@mui/material";
import Doughnut from "../components/Doughnut";
import StackedBarChart from "../components/StackedBar";
import StatCard from "../components/StatCard";
import GithubCard from "../components/GithubCard";
import Headline from "../components/Headline";
import Releases from "../components/Releases";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

export default function InitialAnalysis() {
  const { data } = useContext(DataContext);

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Headline
            photoURL={data.initialAnalysis.headlineData.avatar}
            name={data.initialAnalysis.headlineData.login}
            bio={data.initialAnalysis.headlineData.bio}
            followers={data.initialAnalysis.headlineData.followers}
            emp={data.initialAnalysis.headlineData.company}
            link={data.initialAnalysis.headlineData.link}
          />
        </Grid>
        <Divider style={{ width: "100%" }} />
        <Grid
          container
          direction="row"
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <StatCard statName="ACTIVITY">
              <Doughnut doughnut={data.initialAnalysis.statcardData.doughnut} />
            </StatCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <StatCard statName="REPOSITORIES">
              {data.initialAnalysis.statcardData.repositories}
            </StatCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <StatCard statName="COMMITS">
              {data.initialAnalysis.statcardData.totalContributions}
            </StatCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <StatCard statName="LANGUAGES">
              {data.initialAnalysis.statcardData.languages}
            </StatCard>
          </Grid>
        </Grid>
        <Grid item container display="flex" p={2}>
          <Grid item px={1} xs={12} sm={12} md={2} lg={2} xl={2}>
            <Typography fontWeight={800} py={2} variant="h5">
              Languages
            </Typography>
            <StackedBarChart languageData={data.initialAnalysis.stackBarData} />
          </Grid>
          <Grid item p={1} px={1} xs={12} sm={12} md={8} lg={8} xl={8}>
            <Paper
              elevation={3}
              sx={{ padding: { xs: "10px", sm: "15px", md: "20px" } }}
            >
              <Typography fontWeight={800} variant="h5" pb={2}>
                Highlights
              </Typography>
              <Grid container spacing={2}>
                {data.initialAnalysis.githubData.map((repo) => (
                  <Grid
                    key={repo.repoName}
                    item
                    xs={12}
                    sm={6}
                    md={12}
                    lg={6}
                    xl={6}
                  >
                    <GithubCard
                      repoLink={repo.repoLink}
                      repoName={repo.repoName}
                      repoDesc={repo.repoDesc}
                      repoLang={repo.repoLang}
                      repoStars={parseInt(repo.repoStars)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <Releases links={data.links} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

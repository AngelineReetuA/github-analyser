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
import ActivityCard from "../components/ActivityCard";
import HorizontalStatCard from "../components/HorizontalStatCard";
import GithubCard from "../components/GithubCard";
import Headline from "../components/Headline";
import Releases from "../components/Links";
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
            name={data.initialAnalysis.headlineData.name}
            bio={data.initialAnalysis.headlineData.bio}
            followers={data.initialAnalysis.headlineData.followers}
            following={data.initialAnalysis.headlineData.following}
            emp={data.initialAnalysis.headlineData.company}
            location={data.initialAnalysis.headlineData.location}
            link={data.initialAnalysis.headlineData.link}
          />
        </Grid>
        <Grid
          container
          direction="row"
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <Grid item>
            <ActivityCard percentage={data.initialAnalysis.statcardData.doughnut} contributions={data.initialAnalysis.statcardData.yearlyContributions} />
          </Grid>
          <Grid item direction="column">
            <Grid item sx={{paddingBottom:"10px"}}>
              <HorizontalStatCard color="#98c1d9" name="REPOSITORIES" value={data.initialAnalysis.statcardData.repositories} />
            </Grid>
            <Grid item>
              <HorizontalStatCard color="#eec64d" name="COMMITS" value={data.initialAnalysis.statcardData.totalContributions} />
            </Grid>
          </Grid>
          <Grid item direction="column">
            <Grid item sx={{paddingBottom:"10px"}}>
              <HorizontalStatCard color="#ee6c4d" name="LANGUAGES" value={data.initialAnalysis.statcardData.languages} />
            </Grid>
            <Grid item>
              <HorizontalStatCard color="#e0fbfc" name="EVENTS" value={data.initialAnalysis.statcardData.events} />
            </Grid>
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
                      height={180}
                    />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <Releases links={data.initialAnalysis.releases} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

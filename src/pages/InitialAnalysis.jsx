import { useState } from "react";
import { Divider, Grid, Box, Paper, Typography } from "@mui/material";
import Doughnut from "../components/Doughnut";
import StackedBarChart from "../components/StackedBar";
import StatCard from "../components/StatCard";
import GithubCard from "../components/GithubCard";
import Headline from "../components/Headline";
import Releases from "../components/Releases";

export default function InitialAnalysis() {
  // API REQ

  const [data, setData] = useState({
    head: {
      photoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPJ9cm0-r5p50py0yUzvM5ZtEB-xWoJRPRA&s",
      name: "github name",
      bio: "Software Engineer",
      followers: "5",
      emp: "company",
      link: "https://www.google.com",
    },
    repositories: "",
    commits: "",
    repos: [
      {
        repoLink: "",
        repoName: "",
        repoDesc: "",
        repoLang: "",
        repoStars: "",
      },
    ],
    links: [],
  });

  return (
    <>
      <Grid sx={{ width: "-webkit-fill-available" }}>
        <Headline
          photoURL={data.head.photoURL}
          name={data.head.name}
          bio={data.head.bio}
          followers={data.head.followers}
          emp={data.head.emp}
          link={data.head.link}
        />
        <Divider sx={{ bgcolor: "rgba(84,84,84,0.6)" }} />
        <Box display="flex" flexDirection="row" justifyContent="space-evenly">
          <StatCard statName="ACTIVITY">
            <Doughnut />
          </StatCard>
          <Divider sx={{ bgcolor: "rgba(84,84,84,0.6)", width: "1px" }} />
          <StatCard statName="REPOSITORIES">300+</StatCard>
          <Divider sx={{ bgcolor: "rgba(84,84,84,0.6)", width: "1px" }} />
          <StatCard statName="COMMITS">40+</StatCard>
          <Divider sx={{ width: "1px", bgcolor: "rgba(84,84,84,0.6)" }} />
          <StatCard statName="LANGUAGES">6+</StatCard>
        </Box>
        <Divider sx={{ bgcolor: "rgba(84,84,84,0.6)" }} />
        <Box display="flex" flexDirection="row" p={2}>
          <Grid item px={1} md={2}>
            <StackedBarChart />
          </Grid>
          <Grid item p={1} px={1} md={6}>
            <Box p={3} pt={1}>
              <Paper elevation={1} sx={{ padding: "20px" }}>
                <Typography fontWeight={800} variant="h5" pb={2}>
                  Highlights
                </Typography>
                <Box display="flex" flexDirection="row" gap={2}>
                  <Box flexDirection="column">
                    <GithubCard
                      repoLink="https://www.google.com"
                      repoName="GithubRepoName"
                      repoDesc="This is a really cool and highlighted repo pulled by maximum stars/commits"
                      repoLang="Java"
                      repoStars="213"
                    />
                  </Box>
                  <Box flexDirection="column">
                    <GithubCard
                      repoLink="https://www.google.com"
                      repoName="GithubRepoName"
                      repoDesc="This is a really cool and highlighted repo pulled by maximum stars/commits"
                      repoLang="Python"
                      repoStars="90"
                    />
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Releases links={data.links} />
          </Grid>
        </Box>
      </Grid>
      ;
    </>
  );
}

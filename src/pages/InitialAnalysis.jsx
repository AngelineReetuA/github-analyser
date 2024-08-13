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
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Headline
            photoURL={data.head.photoURL}
            name={data.head.name}
            bio={data.head.bio}
            followers={data.head.followers}
            emp={data.head.emp}
            link={data.head.link}
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
              <Doughnut />
            </StatCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <StatCard statName="REPOSITORIES">300+</StatCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <StatCard statName="COMMITS">40+</StatCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <StatCard statName="LANGUAGES">6+</StatCard>
          </Grid>
        </Grid>
        <Grid item container display="flex" p={2}>
          <Grid item px={1} xs={12} sm={12} md={2} lg={2} xl={2}>
            <Typography fontWeight={800} py={2} variant="h5">
              Languages
            </Typography>
            <StackedBarChart />
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
                <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
                  <GithubCard
                    repoLink="https://www.google.com"
                    repoName="GithubRepoName"
                    repoDesc="This is a really cool and highlighted repo pulled by maximum stars/commits"
                    repoLang="Java"
                    repoStars="213"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
                  <GithubCard
                    repoLink="https://www.google.com"
                    repoName="GithubRepoName"
                    repoDesc="This is a really cool and highlighted repo pulled by maximum stars/commits"
                    repoLang="Python"
                    repoStars="90"
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <Releases links={data.links} />
          </Grid>
        </Grid>
      </Grid>
      ;
    </>
  );
}

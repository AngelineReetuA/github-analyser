import { Grid, Paper } from "@mui/material";
import ActivityCard from "../components/ActivityCard";
import HorizontalStatCard from "../components/HorizontalStatCard";
import Headline from "../components/Headline";
import Releases from "../components/Links";
import { useContext, useEffect } from "react";
import { DataContext } from "../../DataContext";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CommitIcon from "@mui/icons-material/Commit";
import CodeIcon from "@mui/icons-material/Code";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import LanguagesCard from "../components/LanguagesCard";
import TheBestCard from "../components/TheBestCard";

export default function InitialAnalysis() {
  const { data, setData } = useContext(DataContext);

  window.onbeforeunload = function () {
    console.log("are you going to refresh?");
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <ActivityCard
              percentage={data.initialAnalysis.statcardData.doughnut}
              contributions={
                data.initialAnalysis.statcardData.yearlyContributions
              }
            />
          </Grid>

          <Grid
            item
            container
            xs={12}
            sm={6}
            md={4}
            spacing={2}
            direction="column"
          >
            <Grid item md={4}>
              <HorizontalStatCard
                color="#98c1d9"
                name="REPOSITORIES"
                value={data.initialAnalysis.statcardData.repositories}
                overlay={FolderOpenIcon}
              />
            </Grid>
            <Grid item md={4}>
              <HorizontalStatCard
                color="#eec64d"
                name="COMMITS"
                value={data.initialAnalysis.statcardData.totalContributions}
                overlay={CommitIcon}
              />
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            sm={6}
            md={4}
            spacing={2}
            direction="column"
          >
            <Grid item md={4}>
              <HorizontalStatCard
                color="#ee6c4d"
                name="LANGUAGES"
                value={data.initialAnalysis.statcardData.languages}
                overlay={CodeIcon}
              />
            </Grid>
            <Grid item md={4}>
              <HorizontalStatCard
                color="#e0fbfc"
                name="EVENTS"
                value={data.initialAnalysis.statcardData.events}
                overlay={NorthWestIcon}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} pt={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={3} sx={{ borderRadius: "16px" }}>
              <TheBestCard githubData={data.initialAnalysis.githubData} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3.5}>
            <Paper elevation={3} sx={{ borderRadius: "16px" }}>
              <LanguagesCard languageData={data.initialAnalysis.stackBarData} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2.5}>
            <Releases links={data.initialAnalysis.releases} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

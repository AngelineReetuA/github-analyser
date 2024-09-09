import { Grid, Paper } from "@mui/material";
import ActivityCard from "../components/ActivityCard";
import HorizontalStatCard from "../components/HorizontalStatCard";
import Headline from "../components/Headline";
import Releases from "../components/Links";
import { useContext } from "react";
import { DataContext } from "../../DataContext";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CommitIcon from "@mui/icons-material/Commit";
import CodeIcon from "@mui/icons-material/Code";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import LanguagesCard from "../components/LanguagesCard";
import TheBestCard from "../components/TheBestCard";
import RepoFilter from "../components/RepoFilter";

export default function InitialAnalysis() {
  const { data } = useContext(DataContext);
  const initialAnalysisData = data.initialAnalysis;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Headline />
        </Grid>

        <Grid container spacing={2} sx={{ paddingLeft: "15px" }}>
          <Grid item xs={12} sm={12} md={4}>
            <ActivityCard />
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
                value={initialAnalysisData.statcardData.repositories}
                overlay={FolderOpenIcon}
              />
            </Grid>
            <Grid item md={4}>
              <HorizontalStatCard
                color="#eec64d"
                name="COMMITS"
                value={initialAnalysisData.statcardData.totalContributions}
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
                value={initialAnalysisData.statcardData.languages}
                overlay={CodeIcon}
              />
            </Grid>
            <Grid item md={4}>
              <HorizontalStatCard
                color="#e0fbfc"
                name="EVENTS"
                value={initialAnalysisData.statcardData.events}
                overlay={NorthWestIcon}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} pt={2} sx={{ paddingLeft: "15px" }}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={3} sx={{ borderRadius: "16px" }}>
              <TheBestCard />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2.5}>
            <Paper elevation={3} sx={{ borderRadius: "16px" }}>
              <LanguagesCard />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3.5}>
            <Releases />
          </Grid>
        </Grid>
        <Grid item container sx={{ paddingLeft: "15px", marginTop: "15px" }}>
          <RepoFilter />
        </Grid>
      </Grid>
    </>
  );
}

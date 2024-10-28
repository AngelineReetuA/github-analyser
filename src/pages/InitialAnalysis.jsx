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
import RepoFilter from "../components/RepoFilter";
import { useNavigate } from "react-router-dom";
import {
  calculateLanguageData,
  formatStackBarData,
  sortGithubRepos,
  organizeRepos,
  calculateActivityPercent,
  setLinks,
} from "../utils/helper-functions";
import { useLocation } from "react-router-dom";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";

export default function InitialAnalysis() {
  const { data, setData } = useContext(DataContext);
  const [initialAnalysisData, setInitialAnalysisData] = useState(
    data?.initialAnalysis
  );
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.pathname.split("/")[1];
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    let usernameEntered = data.initialAnalysis.headlineData.username;
    if (usernameEntered?.trim()?.length !== 0) {
      return;
    }

    fetchData();

    async function fetchData() {
      try {
        if (username) {
          const userCheckRes = await fetch(
            `https://api.github.com/users/${username}`
          );
          if (userCheckRes.status === 200) {
            setLoader(true);
            const userData = await userCheckRes.json();
            const responses = await Promise.all([
              fetch(
                `https://github-contributions-api.deno.dev/${username}.json`
              ).then((res) => res.json()),
              fetch(`https://api.github.com/users/${username}/repos`).then(
                (res) => res.json()
              ),
              fetch(
                `https://api.github.com/users/${username}/events/public`
              ).then((res) => res.json()),
            ]);
            const githubCardsForInitial = await sortGithubRepos(responses[1]);
            const { langArray, langCount } = await calculateLanguageData(
              responses[1]
            );
            const codeAnalysisRepos = await organizeRepos(responses[1]);
            const activityData = await calculateActivityPercent(responses[0]);
            const freshStackData = await formatStackBarData(langArray);
            const eventData = await setLinks(responses[2]);

            const obj = {
              initialAnalysis: {
                headlineData: {
                  avatar: userData.avatar_url,
                  name: userData.name,
                  bio: userData.bio,
                  followers: userData.followers,
                  following: userData.following,
                  location: userData.location,
                  company: userData.company,
                  link: userData.html_url,
                  username: userData.login,
                },
                statcardData: {
                  totalContributions: responses[0].totalContributions,
                  yearlyContributions: activityData.yearly,
                  repositories: userData.public_repos,
                  languages: langCount,
                  doughnut: activityData.percentage,
                  events: eventData.eventsLength,
                },
                stackBarData: freshStackData,
                languagesData: langArray,
                githubData: githubCardsForInitial,
                releases: eventData.eventsToShow,
              },
              codeAnalysis: {
                repos: codeAnalysisRepos,
              },
              contactDetails: {
                email: userData.email,
              },
            };
            await setData(obj);
            console.log("setData in initialAnalysis", obj);
            setInitialAnalysisData(data.initialAnalysis);
            console.log("setInitialAnalysisData", initialAnalysisData);
            setLoader(false);
            console.log("loader", loader);
          } else if (userCheckRes.status === 403) {
            handleError("API request exceeded", "Try again in another hour");
          } else if (userCheckRes.status === 404) {
            handleError("User not found", "Try with an existing username");
          } else {
            handleError("Unknown server error", "Sorry about that");
          }
        }
      } catch (error) {
        console.log("error", error);
      }
      return;
    }
  }, [initialAnalysisData]);

  const handleError = (title, text) => {
    setLoader(false);
    navigate("/");
    Swal.fire({
      icon: "error",
      title,
      text,
    });
  };

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {!loader && (
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
                  value={initialAnalysisData?.statcardData?.repositories}
                  overlay={FolderOpenIcon}
                />
              </Grid>
              <Grid item md={4}>
                <HorizontalStatCard
                  color="#eec64d"
                  name="COMMITS"
                  value={initialAnalysisData?.statcardData?.totalContributions}
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
                  value={initialAnalysisData?.statcardData?.languages}
                  overlay={CodeIcon}
                />
              </Grid>
              <Grid item md={4}>
                <HorizontalStatCard
                  color="#e0fbfc"
                  name="EVENTS"
                  value={initialAnalysisData?.statcardData?.events}
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
      )}
    </>
  );
}

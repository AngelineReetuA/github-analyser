import { Typography, Grid, TextField, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { useContext, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { DataContext } from "../../DataContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  calculateLanguageData,
  formatStackBarData,
  sortGithubRepos,
  organizeRepos,
  calculateActivityPercent,
  setLinks,
} from "../utils/helper-functions";

export default function FirstPage() {
  const [loader, setLoader] = useState(false);
  const { setData } = useContext(DataContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    setLoader(true);
    e.preventDefault();
    setUsername(username);

    if (username) {
      const userCheckRes = await fetch(
        `https://api.github.com/users/${username}`
      );
      if (userCheckRes.status === 200) {
        const userData = await userCheckRes.json();
        const responses = await Promise.all([
          fetch(
            `https://github-contributions-api.deno.dev/${username}.json`
          ).then((res) => res.json()),
          fetch(`https://api.github.com/users/${username}/repos`).then((res) =>
            res.json()
          ),
          fetch(`https://api.github.com/users/${username}/events/public`).then(
            (res) => res.json()
          ),
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
              username: userData.login
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
        console.log("obj", obj)
        navigate(`/${username}`);
        setLoader(false);
      } else if (userCheckRes.status === 403) {
        setLoader(false);
        Swal.fire({
          icon: "error",
          title: "API request exceeded",
          text: "Try again in another hour",
        });
      } else if (userCheckRes.status === 404) {
        setLoader(false);
        Swal.fire({
          icon: "error",
          title: "User not found",
          text: "Try with an existing username",
        });
      } else {
        setLoader(false);
        Swal.fire({
          icon: "error",
          title: "Unknown server error",
          text: "Sorry about that",
        });
      }
    }
  }

  return (
    <Grid container padding={8} sx={{ alignItems: "center" }}>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid item>
        <GitHubIcon sx={{ fontSize: "120px" }} />
      </Grid>
      <Grid item xs container direction="column">
        <Grid item paddingLeft={2}>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            QuickGit
          </Typography>
          <Typography style={{ fontStyle: "italic", fontSize: "20px" }}>
            The complete GitHub analyser
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        pt={4}
        direction="row"
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          id="username"
          placeholder="Enter a username"
          autoComplete="on"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ paddingRight: "16px", marginBottom: "16px", minWidth: "65%" }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "160px",
            height: "55px",
            backgroundColor: "#4e7a94",
            ":hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Send
        </Button>
      </Grid>
    </Grid>
  );
}

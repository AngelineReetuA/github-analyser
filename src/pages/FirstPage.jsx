import {
  Typography,
  Grid,
  TextField,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import CodeIcon from "@mui/icons-material/Code";

export default function FirstPage() {
  const [loader, setLoader] = useState(false);
  const { setData } = useContext(DataContext);
  const [username, setUsername] = useState("");
  const [error, setError] = useState({ error: false, text: "" });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setUsername(username.trim());
    if (username.trim().length > 0) {
      setLoader(true);
      const userCheckRes = await fetch(
        `https://api.github.com/users/${username.trim()}`
      );
      if (userCheckRes.status === 200) {
        setLoader(true);
        const userData = await userCheckRes.json();
        const responses = await Promise.all([
          fetch(
            `https://github-contributions-api.deno.dev/${username.trim()}.json`
          ).then((res) => res.json()),
          fetch(`https://api.github.com/users/${username.trim()}/repos`).then((res) =>
            res.json()
          ),
          fetch(`https://api.github.com/users/${username.trim()}/events/public`).then(
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
        navigate(`/${username}`);
        setLoader(false);
      } else if (userCheckRes.status === 403) {
        handleError("API request exceeded", "Try again in another hour");
      } else if (userCheckRes.status === 404) {
        handleError("User not found", "Try with an existing username");
      } else {
        handleError("Unknown server error", "Sorry about that");
      }
    } else {
      setError({ error: true, text: "Please enter a valid username" });
    }
  }

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
      <AppBar position="fixed" style={{ backgroundColor: "#293241" }}>
        <Toolbar variant="dense" style={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="a"
            href="/"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            QuickGit
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="sourcecode"
            style={{ marginRight: "10px" }}
          >
            <Tooltip title="Source Code">
              <a
                href="https://github.com/AngelineReetuA/github-analyser"
                target="_blank"
              >
                <CodeIcon style={{ color: "#ffffff" }} />
              </a>
            </Tooltip>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container padding={8} paddingTop={16} sx={{ alignItems: "center" }}>
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
            error={error.error}
            helperText={error.text}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "160px",
              height: "55px",
              backgroundColor: "#293241",
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
      <Box
        component="footer"
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <Typography variant="body2">Ping the developer here -</Typography>
        <a
          href="https://www.linkedin.com/in/angeline-reetu-a-175b5221b"
          target="_blank"
        >
          <LinkedInIcon fontSize="small" style={{ color: "#000000" }} />
        </a>
        <a href="https://github.com/AngelineReetuA/" target="_blank">
          <GitHubIcon fontSize="small" style={{ color: "#000000" }} />
        </a>
        <a href="mailto:angelinereetu@gmail.com" target="_blank">
          <MailIcon fontSize="small" style={{ color: "#000000" }} />
        </a>
      </Box>
    </>
  );
}

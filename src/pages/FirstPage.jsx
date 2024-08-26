import { Typography, Grid, TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { DataContext } from "../../DataContext";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const { setData, data } = useContext(DataContext);
  const [username, setUsername] = useState("");

  // API REQUESTS
  // first api normal - basic user details /users/{uname}
  // ---- login, bio, followers, company, link
  // ---- repositories(public_repos)
  // ---- email
  // second api - contributions .json api
  // ---- totalContributions
  // third api - /repos
  // ---- languages, languagesData(choose top 3) (recur function)
  // ---- githubData (choose 2 with the highest size/first two)
  // ---- repos

  // if req1 returns 404, show error message (means user doesnt exist)

  async function handleSubmit(e) {
    e.preventDefault();
    setUsername(username);

    if (username) {
      try {
        const responses = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://github-contributions-api.deno.dev/${username}.json`),
          fetch(`https://api.github.com/users/${username}/repos`),
        ]);
        console.log(responses);
        const obj = {
          initialAnalysis: {
            headlineData: {
              login: responses[0].body.data.login,
              bio: responses[0].body.data.bio,
              followers: responses[0].body.data.followers,
              company: responses[0].body.data.company,
              link: responses[0].body.data.url,
            },
            statcardData: {
              totalContributions: responses[1].body.data.totalContributions,
              repositories: responses[0].body.data.public_repos,
              languages: 0,
            },
            languagesData: [{ label: "", data: 0 }],
            githubData: {
              repoName: "",
              repoDesc: "",
              repoLang: "",
              repoStars: "",
              repoLink: "",
            },
            releases: [],
          },
          codeAnalysis: {
            repos: {},
          },
          contactDetails: {
            email: "",
          },
        };
        await setData(obj);
        console.log(data);
      } catch {
        console.log("error");
      }
    }
  }

  return (
    <Grid container padding={8} sx={{ alignItems: "center" }}>
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
          sx={{ width: "65%", paddingRight: "16px" }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "160px",
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

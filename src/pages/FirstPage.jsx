import { Typography, Grid, TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { DataContext } from "../../DataContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const calculateLanguageData = async (data) => {
  let langArray = [];
  let total = 0;
  await data.map((repo) => {
    if (repo.language != null) {
      const existingLang = langArray.find(
        (lang) => lang.language === repo.language
      );
      if (existingLang) {
        existingLang.size += repo.size;
      } else {
        langArray.push({ language: repo.language, size: repo.size });
      }
    }
  });
  langArray.map((lang) => {
    total += lang.size;
  });
  langArray.map((lang) => {
    let percent = Math.round((lang.size / total) * 100);
    lang.size = percent;
  });
  return langArray;
};

const sortGithubRepos = async (repos) => {
  let temp = repos
    .sort((a, b) => {
      return b.size - a.size;
    })
    .slice(0, 2);
  return temp.map((repo) => ({
    repoName: repo.name,
    repoDesc: repo.description,
    repoLang: repo.language,
    repoStars: parseInt(repo.stargazers_count),
    repoLink: repo.html_url,
  }));
};

const organizeRepos = async (repos) => {
  return repos.map((repo) => ({
    id: repo.id,
    repoName: repo.name,
    repoDesc: repo.description,
    repoLang: repo.language,
    repoSize: repo.size,
    repoStars: parseInt(repo.stargazers_count),
    repoLink: repo.html_url,
  }));
};

const calculateActivityPercent = async (contribs) => {
  const setTotal = contribs.contributions.length;
  let completeTotal = 0;
  for (let i = 0; i < setTotal; i++) {
    completeTotal += contribs.contributions[i].length;
  }
  const percent =
    (Math.min(contribs.totalContributions, completeTotal) / completeTotal) *
    100;
  return percent;
};

async function formatStackBarData(langs) {
  let stackData = { labels: ["Languages"], datasets: [] };

  const numberOfStacks = Math.min(langs.length, 3);
  let datasets = [];
  const colorArray = ["#4e7a94", "#7eb8d9", "#d9edf8"];
  for (let i = 0; i < numberOfStacks; i++) {
    const tempObj = {
      label: `${langs[i].language}`,
      data: [langs[i].size],
      backgroundColor: `${colorArray[i]}`,
      datalabels: {
        color: "black",
        anchor: "middle",
        align: "start",
        offset: -10,
        font: {
          weight: "bold",
        },
        formatter: () => `${langs[i].language}`,
      },
    };
    datasets.push(tempObj);
  }
  stackData.datasets = datasets;
  return stackData;
}

async function setLinks(events) {
  let linkArrays = [];
  events = events.slice(0, 3);
  events.forEach((event) => {
    let newObj = {};
    let repo = event.repo.name;

    switch (event.type) {
      case "PushEvent":
        let sha = event.payload.head;
        newObj.url = `https://github.com/${repo}/commit/${sha}`;
        break;

      case "PullRequestEvent":
        let prNumber = event.payload.pull_request.number;
        newObj.url = `https://github.com/${repo}/pull/${prNumber}`;
        break;

      case "IssuesEvent":
        let issueNumber = event.payload.issue.number;
        newObj.url = `https://github.com/${repo}/issues/${issueNumber}`;
        break;

      case "IssueCommentEvent":
        let commentId = event.payload.comment.id;
        newObj.url = `https://github.com/${repo}/issues/${event.payload.issue.number}#issuecomment-${commentId}`;
        break;

      case "ForkEvent":
        newObj.url = `https://github.com/${event.payload.forkee.full_name}`;
        break;

      case "WatchEvent":
        newObj.url = `https://github.com/${repo}`;
        break;

      default:
        newObj.url = `https://github.com/${repo}`;
        break;
    }
    newObj.eventType = event.type;
    linkArrays.push(newObj);
  });
  return linkArrays.slice(0, 3);
}

export default function FirstPage() {
  const [loader, setLoader] = useState(false);
  const { setData } = useContext(DataContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setUsername(username);

    if (username) {
      try {
        const userCheckRes = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (userCheckRes.ok) {
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
          const languageData = await calculateLanguageData(responses[1]);
          const githubCardsForInitial = await sortGithubRepos(responses[1]);
          const codeAnalysisRepos = await organizeRepos(responses[1]);
          const doughnutPercent = await calculateActivityPercent(responses[0]);
          const freshStackData = await formatStackBarData(languageData);
          const links = await setLinks(responses[2]);
          console.log(links);

          const obj = {
            initialAnalysis: {
              headlineData: {
                avatar: userData.avatar_url,
                login: userData.login,
                bio: userData.bio,
                followers: userData.followers,
                company: userData.company,
                link: userData.html_url,
              },
              statcardData: {
                totalContributions: responses[0].totalContributions,
                repositories: userData.public_repos,
                languages: languageData.length,
                doughnut: doughnutPercent,
              },
              stackBarData: freshStackData,
              languagesData: languageData,
              githubData: githubCardsForInitial,
              releases: links,
            },
            codeAnalysis: {
              repos: codeAnalysisRepos,
            },
            contactDetails: {
              email: userData.email,
            },
          };
          await setData(obj);
          navigate("/user/user-analysis");
        } else {
          Swal.fire({
            icon: "error",
            title: "User does not exist",
            text: "Make sure the username exists on Github",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Sorry, there was a problem",
          text: "Try again sometime later",
        });
        console.log(error);
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

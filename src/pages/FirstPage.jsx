import { Typography, Grid, TextField, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { useContext, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { DataContext } from "../../DataContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const calculateLanguageData = async (data) => {
  let totalLanguageArray = [];
  let totalLanguageCount = 0;
  await data.map((repo) => {
    if (totalLanguageArray.indexOf(repo.language) === -1) {
      totalLanguageCount += 1;
    }
  });
  data = await data.filter((d) => {
    return d.fork === false;
  });
  data = data.slice(0, 3);
  let langArray = [];
  await Promise.all(
    data.map(async (repo) => {
      const response = await fetch(repo.languages_url);
      const languageObjForRepo = await response.json();

      Object.keys(languageObjForRepo).forEach((lang) => {
        const existingLang = langArray.find((item) => item.language === lang);
        if (existingLang) {
          existingLang.loc += languageObjForRepo[lang];
        } else {
          langArray.push({
            language: lang,
            loc: languageObjForRepo[lang],
          });
        }
      });
    })
  );
  langArray.sort((a, b) => {
    return b.loc - a.loc;
  });
  return { langArray: langArray.slice(0, 2), langCount: totalLanguageCount };
};

async function formatStackBarData(langs) {
  let stackData = { labels: ["Languages"], datasets: [] };
  let totalLOC = 0;
  await langs.map((lang) => {
    totalLOC += lang.loc;
  });
  const numberOfStacks = Math.min(langs.length, 3);
  let datasets = [];
  const colorArray = ["#98c1d9", "#3d5a80", "#305a91"];
  for (let i = 0; i < numberOfStacks; i++) {
    const tempObj = {
      label: `${langs[i].language}`,
      data: [(langs[i].loc / totalLOC) * 100],
      backgroundColor: `${colorArray[i]}`,
      datalabels: {
        color: "white",
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

const sortGithubRepos = async (repos) => {
  repos = await repos.filter((repo) => {
    return repo.fork === false;
  });
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
    repoForkStatus: repo.fork,
    repoLastPush: new Date(repo.pushed_at).toISOString().split('T')[0],
    repoHosted: repo.homepage
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
    repoForkStatus: repo.fork,
    repoLastPush: new Date(repo.pushed_at).toISOString().split('T')[0],
    repoHosted: repo.homepage
  }));
};

const calculateActivityPercent = async (contribs) => {
  const currentYear = new Date().getFullYear();
  const totalContribs = contribs.totalContributions;
  let yearlyContribs = 0;
  contribs = await contribs.contributions.map((contrib) => {
    contrib.filter((quartile) => {
      const isCurrentYear =
        new Date(quartile.date).getFullYear() === currentYear;
      if (isCurrentYear) yearlyContribs += quartile.contributionCount;
    });
  });
  let completeTotal = 366;
  const percent =
    (Math.min(yearlyContribs, completeTotal) / completeTotal) * 100;
  const activityData = {
    percentage: percent,
    total: totalContribs,
    yearly: yearlyContribs,
  };
  return activityData;
};

async function setLinks(events) {
  let linkArrays = [];

  events.forEach((event) => {
    let newObj = {};
    let repo = event.repo.name;

    switch (event.type) {
      case "PushEvent":
        let sha = event.payload.head;
        newObj.eventType = "Pushed";
        newObj.url = `https://github.com/${repo}/commit/${sha}`;
        break;

      case "PullRequestEvent":
        newObj.eventType = "Pull Request";
        let prNumber = event.payload.pull_request.number;
        newObj.url = `https://github.com/${repo}/pull/${prNumber}`;
        break;

      case "IssuesEvent":
        newObj.eventType = "Raised Issue";
        let issueNumber = event.payload.issue.number;
        newObj.url = `https://github.com/${repo}/issues/${issueNumber}`;
        break;

      case "IssueCommentEvent":
        newObj.eventType = "Commented";
        let commentId = event.payload.comment.id;
        newObj.url = `https://github.com/${repo}/issues/${event.payload.issue.number}#issuecomment-${commentId}`;
        break;

      case "ForkEvent":
        newObj.eventType = "Forked";
        newObj.url = `https://github.com/${event.payload.forkee.full_name}`;
        break;

      case "WatchEvent":
        newObj.eventType = "Watching";
        newObj.url = `https://github.com/${repo}`;
        break;

      default:
        newObj.eventType = "Unrecognized event";
        newObj.url = `https://github.com/${repo}`;
        break;
    };
    newObj.date = new Date(event.created_at).toISOString().split('T')[0];
    linkArrays.push(newObj);
  });
  let eventData = {
    eventsToShow: linkArrays.slice(0, 3),
    eventsLength: linkArrays.length,
  };
  return eventData;
}

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
      try {
        const userCheckRes = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (userCheckRes.status === 200) {
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
          console.log(obj);
          localStorage.setItem("data", JSON.stringify(obj));
          navigate(`/${username}`);
          setLoader(false);
        } else if ((userCheckRes.status = 403)) {
          setLoader(false);
          Swal.fire({
            icon: "error",
            title: "API request exceeded",
            text: "Try again in another hour",
          });
        } else if ((userCheckRes.status = 404)) {
          setLoader(false);
          Swal.fire({
            icon: "error",
            title: "User not found",
            text: "Are you sure that username exists?",
          });
        } else {
          setLoader(false);
          Swal.fire({
            icon: "error",
            title: "Unknown server error",
            text: "Sorry about that",
          });
        }
      } catch (error) {
        setLoader(false);
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

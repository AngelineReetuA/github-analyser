/*
A function to calculate the language data for the chart and the total number of languages
Input: Response of /repos API
Output: Object {langArray: [array-of-two-lang-data-for-chart], langCount: int-total-no-langs}
*/
export async function calculateLanguageData(data) {
  let totalLanguageArray = [];
  let totalLanguageCount = 0;
  await data?.map((repo) => {
    if (totalLanguageArray.indexOf(repo.language) === -1) {
      totalLanguageCount += 1;
    }
  });
  data = await data?.filter((d) => {
    return d.fork === false;
  });
  data = data
    .sort((a, b) => {
      return b.stargazers_count - a.stargazers_count || b.size - a.size;
    })
    .slice(0, 3);
  let langArray = [];
  await Promise.all(
    data?.map(async (repo) => {
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
}

/*
A function to format the data for languages chart that creates the object to be feeded to the chart
Input: Response of langArray from calculateLanguageData function
Output: Array of Objects called stackData
*/
export async function formatStackBarData(langs) {
  let stackData = { labels: ["Languages"], datasets: [] };
  let totalLOC = 0;
  await langs?.map((lang) => {
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

/*
A function to filter the forked repos and return the two best repos to be shown
Input: Response of /repos API
Output: Formatted response 
*/
export async function sortGithubRepos(repos) {
  repos = await repos?.filter((repo) => {
    return repo.fork === false;
  });
  let temp = repos
    .sort((a, b) => {
      return b.stargazers_count - a.stargazers_count || b.size - a.size
    })
    .slice(0, 2);
  return temp?.map((repo) => ({
    repoName: repo.name,
    repoDesc: repo.description,
    repoLang: repo.language,
    repoStars: parseInt(repo.stargazers_count),
    repoLink: repo.html_url,
    repoForkStatus: repo.fork,
    repoLastPush: new Date(repo.pushed_at).toISOString().split("T")[0],
    repoHosted: repo.homepage,
  }));
}

/*
A function to format and filter the response
Input: Response of /repos API
Output: Formatted response 
*/
export async function organizeRepos(repos) {
  return repos?.map((repo) => ({
    id: repo.id,
    repoName: repo.name,
    repoDesc: repo.description,
    repoLang: repo.language,
    repoSize: repo.size,
    repoStars: parseInt(repo.stargazers_count),
    repoLink: repo.html_url,
    repoForkStatus: repo.fork,
    repoLastPush: new Date(repo.pushed_at).toISOString().split("T")[0],
    repoHosted: repo.homepage,
  }));
}

/*
A function to calculate the yearly activity percentage of the user
Input: Response of /github-contributions-api.deno.dev/username.json API
Output: Object activityData {percentage, total, yearly}
*/
export async function calculateActivityPercent(contribs) {
  const currentYear = new Date().getFullYear();
  const totalContribs = contribs?.totalContributions;
  let yearlyContribs = 0;
  contribs = await contribs?.contributions?.map((contrib) => {
    contrib?.filter((quartile) => {
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
}

/*
A function to fix the recent events and take event count
Input: Response of /users/username/events/public API
Output: Object eventData {eventsToShow, eventsLength}
*/
export async function setLinks(events) {
  let linkArrays = [];

  events?.forEach((event) => {
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
        newObj.eventType = "Unknown event";
        newObj.url = `https://github.com/${repo}`;
        break;
    }
    newObj.date = new Date(event.created_at).toISOString().split("T")[0];
    linkArrays.push(newObj);
  });
  let eventData = {
    eventsToShow: linkArrays.slice(0, 3),
    eventsLength: linkArrays.length,
  };
  return eventData;
}

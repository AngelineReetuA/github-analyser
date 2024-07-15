import { useState } from "react";
import Divider from "@mui/material/Divider";
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
      <div className="container-fluid">
        <Headline
          photoURL={data.head.photoURL}
          name={data.head.name}
          bio={data.head.bio}
          followers={data.head.followers}
          emp={data.head.emp}
          link={data.head.link}
        />
        <Divider sx={{ bgcolor: "#545454" }} />
        <div className="row d-flex justify-content-center">
          <div className="d-flex">
            <StatCard statName="ACTIVITY">
              <Doughnut />
            </StatCard>
            <div className="vr"></div>
            <StatCard statName="REPOSITORIES">300+</StatCard>
            <div className="vr"></div>
            <StatCard statName="COMMITS">40+</StatCard>
            <div className="vr"></div>
            <StatCard statName="LANGUAGES">6+</StatCard>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-2">
            <StackedBarChart />
          </div>
          <div className="col-md-6">
            <div className="card bg-light border-dark px-3 pt-1">
              <div className="card-title fs-3 fw-bold">Highlights</div>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <GithubCard
                      repoLink="https://www.google.com"
                      repoName="GithubRepoName"
                      repoDesc="GithubRepoDesc"
                      repoLang="Java"
                      repoStars="21"
                    />
                  </div>
                  <div className="col">
                    <GithubCard
                      repoLink="https://www.google.com"
                      repoName="GithubRepoName"
                      repoDesc="GithubRepoDesc"
                      repoLang="Java"
                      repoStars="21"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Releases links={data.links} />
          </div>
        </div>
      </div>
      ;
    </>
  );
}
